import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

import s from "./settings/settings"
import { history } from "../index"
import store from "./redux/store"
import { create_access_token } from "./api/auth-account"
import { logout } from "./redux/slices"


const api = axios.create({
    baseURL: s.AXIOS_BASEURL,
    timeout: 2000
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
    const originalRequest = err.config;
    // console.log('[Original request]', originalRequest)
    if (err.response.status === 403 && originalRequest.url === s.ACCESS_TOKEN_API) {
        store.dispatch(logout(store.getState()))
        console.log('[Redirecting to the Login page]')
        // history.push(s.LOGIN_URL)
        // history.replace(s.LOGIN_URL)
        // return err
    }


    if(err.response.status === 401) {
        const {auth: {is_auth}} = store.getState()
        console.log(is_auth)

        if(!is_auth) {
            // console.log('[Not authenticated, redirect to 401 error]')
            return history.push(s.ERROR_401_URL)
        }

        const new_access_token = await create_access_token()
        console.log('[New access token]', new_access_token)

        // if(new_access_token) {
        //     // retry the request with the updated access_token
        //     err.config.headers.Authorization = new_access_token
        //     return api.request(err.config)
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