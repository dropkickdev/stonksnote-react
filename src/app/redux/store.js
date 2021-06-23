import { configureStore } from "@reduxjs/toolkit"
import { auth, theme } from "./slices"



const store = configureStore({
    reducer: {
        auth: auth.reducer,
        theme: theme.reducer,
    }
})

export default store