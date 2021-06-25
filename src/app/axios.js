import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

import s from "./settings/settings"
import { history } from "../index"


const api = axios.create({
    baseURL: s.AXIOS_BASEURL,
    timeout: 2000
})

api.interceptors.request.use(req => {
    // console.log('[request interceptor]')
    const {auth: {access_token}} = useSelector(state => state)

    if(access_token) {
        req.headers.Authorization = `Bearer ${access_token}`
    }
    return req
}, async err => {
    // console.log('[request interceptor ERROR]', err)
    return err
})

api.interceptors.response.use(res => {
    return res
}, async err => {
    // // prevent infinite loops
    // const originalRequest = err.config;
    // if (err.response.status === 401 && originalRequest.url === `${s.AXIOS_BASEURL}/auth/token`) {
    //     history.push(s.LOGIN_URL)
    //     return err
    // }
    //
    // if(err.response.status === 401) {
    //     console.log('[401 error]')
    //     const { user: { is_authenticated } } = store.getState()
    //
    //     if(!is_authenticated) {
    //         return history.push(s.ERROR_401_URL)
    //     }
    //
    //     const new_access_token = await create_access_token()
    //     if(new_access_token) {
    //         // retry the request with the updated access_token
    //         // err.config.headers.Authorization = new_access_token
    //         return api.request(err.config)
    //     }
    //     else {
    //         store.dispatch({ type: LOGOUT })
    //         return history.push(s.ERROR_401_URL)
    //     }
    // }
    return err
})


export default api