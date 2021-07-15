import api from "../../app/axios"



export const api_mark_create = data => api.post('/trades/marks/add', data)
