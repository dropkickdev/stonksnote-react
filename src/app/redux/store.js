import { configureStore } from "@reduxjs/toolkit"
import { auth, theme } from "./slices"


const store = configureStore({
    reducer: {
        auth: auth.reducer,
        theme: theme.reducer,
    }
})



export const {login, logout, set_display} = auth.actions
export const {set_theme} = theme.actions
export default store