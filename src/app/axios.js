import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

import s from "./settings/settings"
import { history } from "../index"
import store from "./redux/store"
import { create_access_token } from "./api/auth-account"
import { logout, set_access_token, access_token_action } from "./redux/slices"


const api = axios.create({
    baseURL: s.AXIOS_BASEURL,
    timeout: 2000,
    withCredentials: true,
})

api.interceptors.request.use(req => {
    const {auth: {access_token}} = store.getState()
    if(access_token) {
        // console.log('[SUCCESS Request interceptor] access_token', access_token)
        req.headers.Authorization = `Bearer ${access_token}`
    }
    return req
}, async err => {
    console.log('[ERROR Request interceptor]', err)
    return err
})

// // TODO: Renewing the access_token
// // TODO: Why can't fapi access the refresh_token cookie?
api.interceptors.response.use(res => {
    console.log('[Response interceptor SUCCESS]')
    return res
}, async err => {
    console.log(err.response.status, '[Response interceptor FAIL from]', err.config.url)

    // Prevent infinite loops
    if(err.config.url === s.ACCESS_TOKEN_API) {
        store.dispatch(logout(store.getState()))
    }

    if(err.response.status === 401) {
        const {auth: {is_auth}} = store.getState()
        console.log(is_auth)

        if(!is_auth) {
            // console.log('[Not authenticated, redirect to 401 error]')
            return history.replace(s.ERROR_401_URL)
        }

        const new_access_token = await create_access_token()
        console.log('[Access token]', new_access_token)

        if(!new_access_token) {
            return history.replace(s.ERROR_401_URL)
        }


        const state = store.getState()
        store.dispatch(set_access_token(state.auth.access_token, {
            payload: new_access_token
        }))

        // store.dispatch({
        //     ...state,
        //     auth: {
        //         ...state.auth,
        //         access_token: new_access_token
        //     }
        // })

        // return api.request(err.config)

        // if(new_access_token) {
        //     // retry the request with the updated access_token
        //     // err.config.headers.Authorization = new_access_token
        //     // store.dispatch(set_access_token(store.getState(), {
        //     //     payload: new_access_token
        //     // }))
        //     console.log('[Config]', err.config)
        //
        // }
        // else {
        //     console.log('[no new access token, redirect to 401]')
        //     store.dispatch(logout())
        //     // return history.push(s.ERROR_401_URL)
        // }
    }
    return err
})


export default api