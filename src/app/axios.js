import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

import con from "./utils"
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
    con.log('[ERROR Request interceptor]', err)
    return err
})

api.interceptors.response.use(res => {
    con.log('[URL]', res.config.url)
    con.log('[Response interceptor SUCCESS]')
    return res
}, async err => {
    con.log(err.response.status, '[Response interceptor FAIL from]', err.config.url)

    // Prevent infinite loops
    if(err.config.url === s.ACCESS_TOKEN_API) {
        store.dispatch(logout(store.getState()))
    }

    if(err.response.status === 401) {
        const {auth: {is_auth}} = store.getState()
        con.log(is_auth)

        if(!is_auth) {
            // con.log('[Not authenticated, redirect to 401 error]')
            return history.replace(s.ERROR_401_URL)
        }

        const new_access_token = await create_access_token()
        con.log('[Access token]', new_access_token)

        if(!new_access_token) {
            store.dispatch(logout())
            return history.replace(s.ERROR_401_URL)
        }

        // Update state with the new token
        store.dispatch(set_access_token(new_access_token))

        // Retry the request with the updated access_token
        // con.log(err.response)
        return api.request(err.config)
    }
    return err
})


export default api