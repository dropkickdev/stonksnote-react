import { createSlice } from "@reduxjs/toolkit"


export const auth  = createSlice({
    name: 'authentication',
    initialState: {
        is_auth: false,
        display: '',
        email  : '',
    },
    reducers: {
        login: (state, {payload: {display, email}}) => {
            state.is_auth = true
            state.display = display
            state.email   = email
        },
        logout: (state) => {
            state.is_auth = false
            state.display = ''
        },
        set_display: (state, {payload}) => {
            state.display = payload
        }
    }
})

export const theme = createSlice({
    name: 'theme',
    initialState: {
        type: 'light'
    },
    reducers: {
        set_theme: (state, {payload}) => {
            state.type = payload
        }
    }
})