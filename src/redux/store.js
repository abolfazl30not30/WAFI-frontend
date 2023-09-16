import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer  from "@/redux/sidebar/sidebarSlice";
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        sidebar:sidebarReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})