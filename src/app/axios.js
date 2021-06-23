import axios from "axios"

import s from "./settings/settings"



const api = axios.create({
    baseURL: s.AXIOS_BASEURL,
    timeout: 2000
})


export default api