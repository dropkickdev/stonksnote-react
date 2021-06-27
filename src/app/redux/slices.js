import { createSlice, createAction } from "@reduxjs/toolkit"


export const access_token_action = createAction('SET_ACCESS_TOKEN')

export const auth  = createSlice({
    name: 'authentication',
    initialState: {
        is_auth: false,
        display: '',
        email  : '',
        access_token: '',
        is_verified: false,
        foo: 'bar',
    },
    reducers: {
        login: (state, {payload}) => {
            const {display, email, access_token, is_verified} = payload
            state.is_auth = true
            state.display = display
            state.email   = email
            state.access_token = access_token
            state.is_verified = is_verified
        },
        logout: (state) => {
            state.is_auth = false
            state.display = ''
            state.email = ''
            state.access_token = ''
            state.is_verified = false
        },
        set_access_token: (state, {payload}) => {
            state.access_token = payload
        },
        set_display: (state, {payload}) => {
            state.display = payload
        }
    }
})

export const site = createSlice({
    name: 'site',
    initialState: {
        debug: true,
        theme: 'dark-theme',
        pageclass: ''
    },
    reducers: {
        set_theme: (state, {payload}) => {
            state.theme = payload
        },
        set_pageclass: (state, {payload}) => {
            state.pageclass = payload
        }
    }
})


export const {login, logout, set_access_token, set_display} = auth.actions
export const {set_theme, set_pageclass} = site.actions