import { configureStore } from "@reduxjs/toolkit";
import { ProductsApi } from "./Services/Products";
import { axiosProductApi } from "./Services/axiosProducts";
import { axiosTokenProductApi } from "./Services/axiostokenProducts";
export const store=configureStore({
    reducer:{
        [ProductsApi.reducerPath]:ProductsApi.reducer,
        [axiosProductApi.reducerPath]:axiosProductApi.reducer,
        [axiosTokenProductApi.reducerPath]:axiosTokenProductApi.reducer
    },
    middleware:(gDM)=>gDM().concat(ProductsApi.middleware,axiosProductApi.middleware,axiosTokenProductApi.middleware),
})