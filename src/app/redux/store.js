import { configureStore } from "@reduxjs/toolkit"
import { auth, site } from "./slices"



const store = configureStore({
    reducer: {
        auth: auth.reducer,
        site: site.reducer,
    }
})

export default store