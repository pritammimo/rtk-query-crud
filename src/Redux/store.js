import { configureStore } from "@reduxjs/toolkit";
import { ProductsApi } from "./services/products";
export const store=configureStore({
    reducer:{
        [ProductsApi.reducerPath]:ProductsApi.reducer
    },
    middleware:(gDM)=>gDM().concat(ProductsApi.middleware)
})
