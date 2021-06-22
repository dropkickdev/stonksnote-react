import { createSlice, configureStore } from "@reduxjs/toolkit"

const auth = createSlice({
    name: 'authentication',
    initialState: {
        is_auth: false,
        display: '',
        email: '',
    },
    reducers: {
        login: (state, {display, email}) => {
            state.is_auth = true
            state.display = display
            state.email = email
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

const theme = createSlice({
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


const store = configureStore({
    reducer: {
        auth: auth.reducer,
        theme: theme.reducer,
    }
})



export const {login, logout, set_display} = auth.actions
export const {set_theme} = theme.actions
export default store