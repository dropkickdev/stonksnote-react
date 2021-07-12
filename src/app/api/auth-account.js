import api from "../axios"
import conutils from "../utils"

export const api_register = data => api.post('/auth/register', data)
export const api_login = data => api.post('/auth/login', data)
export const api_logout = () => api.get('/auth/logout')
export const api_generate_access_token = () => api.post('/auth/token')
export const api_reload_user_data = () => api.get('/auth/reload_user_data')
export const api_google_login = id_token => api.post('/auth/google/login', id_token)

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



