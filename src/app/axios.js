import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

import s from "./settings/settings"
import { history } from "../index"
import store from "./redux/store"
import { create_access_token } from "./api/auth-account"
import { logout, set_access_token } from "./redux/slices"


const api = axios.create({
    baseURL: s.AXIOS_BASEURL,
    timeout: 2000,
    withCredentials: true,
})

api.interceptors.request.use(req => {
    const {auth: {access_token}} = store.getState()
    if(access_token) {
        // con.log('[SUCCESS Request interceptor] access_token', access_token)
        req.headers.Authorization = `Bearer ${access_token}`
    }
    return req
}, async err => {
    const {auth} = store.getState()
    console.warn('[ERROR Request interceptor]', err)
    return err
})

api.interceptors.response.use(res => {
    // console.log('[Response interceptor SUCCESS]')
    return res
}, async err => {
    const {auth} = store.getState()
    if(!auth.is_auth) {
        console.log('[You need to be signed in]')
    }
    else {
        console.warn(err.response.status, '[Response interceptor FAIL from]', err.config.url)
    }

    // Prevent infinite loops
    if(err.config.url === s.ACCESS_TOKEN_API) {
        store.dispatch(logout(store.getState()))
    }

    if(err.response.status === 401) {
        const {auth: {is_auth}} = store.getState()
        // conutils.log(is_auth)

        if(!is_auth) {
            // con.log('[Not authenticated, redirect to 401 error]')
            return history.replace(s.ERROR_401_URL)
        }

        const new_access_token = await create_access_token()
        // conutils.log('[Access token]', new_access_token)

        if(!new_access_token) {
            store.dispatch(logout())
            return history.replace(s.ERROR_401_URL)
        }

        // Update state with the new token
        store.dispatch(set_access_token(new_access_token.access_token))

        // Retry the request with the updated access_token
        // con.log(err.response)
        return api.request(err.config)
    }
    return err
})


export default api