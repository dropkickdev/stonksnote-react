import api from "../axios"
import store from "../redux/store"

import { set_access_token } from "../redux/slices"


export const api_register = data => api.post('/auth/register', data)
export const api_login = data => api.post('/auth/login', data)
export const api_logout = () => api.get('/auth/logout')
export const api_generate_access_token = () => api.post('/auth/token')

// export const generate_access_token = async () => {
//
// }

export const create_access_token = async () => {
    try {
        const res = await api_generate_access_token()
        return res.data
    }
    catch (err) {
        return ''
    }
    // return await generate_access_token()
    // if(access_token) {
    //     store.dispatch(set_access_token(store.getState(), access_token))
    // }
    // return access_token
}



