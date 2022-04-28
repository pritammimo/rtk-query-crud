import { configureStore } from "@reduxjs/toolkit";
import { ProductsApi } from "./Services/Products";
import { axiosProductApi } from "./Services/axiosProducts";
export const store=configureStore({
    reducer:{
        [ProductsApi.reducerPath]:ProductsApi.reducer,
        [axiosProductApi.reducerPath]:axiosProductApi.reducer
    },
    middleware:(gDM)=>gDM().concat(ProductsApi.middleware,axiosProductApi.middleware),
})