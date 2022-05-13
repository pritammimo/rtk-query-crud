import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from "../axiosBaseQuery";

export const axiosTokenProductApi = createApi({
    reducerPath:"axiosProductApi",
    baseQuery:axiosBaseQuery({
        baseUrl:"http://localhost:4000/",
        prepareHeaders: (headers, { getState }) => {
          const token = localStorage.getItem("testtoken")
          console.log("toke",token)
          // If we have a token set in state, let's assume that we should be passing it.
          if (token) {
            headers.set('authorization', `Bearer ${token}`)
          }
          return headers
        },
}),
tagTypes:["Product"],
endpoints(build) {
  return {
    getProducts: build.query({ 
      query: () => ({ url: 'products', method: 'get' }),
      transformResponse: (response,meta, arg) => {
        console.log("response",response);
        console.log("meta",meta);
        if(meta === 200){
           return{
             customdata:response
           }
        }
        else {
          return{
            data:response
          }   
        }
       
      },
      providesTags:["Product"]
    }),
    getSingleProduct:build.query({
      query:(id)=>({url: `products/${id}`, method: 'get'}),
      providesTags:["Product"]
    }),
    //   getProductsById:builder.query({
//       query:(id)=>"products/"+id
//   })
    addProduct: build.mutation({
      query: (product) => (
        { url: 'products', method: 'post',data:product }
        ),
        transformResponse: (response,meta, arg) => {
          console.log("meta",meta);
         console.log("response",response);
         console.log("arg",arg);
          if(meta === 201){
             return{
               customdata:response
             }
          }
          else {
            return{
              data:response
            }   
          }
         
        },
      invalidatesTags:['Product']
    }),
    updateProduct:build.mutation({
      query: (product) => (
        { url: `products/${product?.id}`, method: 'put',data:product }
        ),
        invalidatesTags:['Product']
    }),
    deleteProduct:build.mutation({
      query:(id)=>(
        {url:`products/${id}`,method:'delete'}
      ),
      invalidatesTags:['Product']
    }),
    SignupRequest: build.mutation({
      query: (signup) => (
        { url: 'signup', method: 'post',data:signup }
        ),
        transformResponse: (response,meta, arg) => {
          console.log("meta",meta);
         console.log("response",response);
         console.log("arg",arg);
          if(meta === 201){
             localStorage.setItem("testtoken",response?.accessToken)
             return{
               data:"Sucessfully Registration Completed"
             }
          }
          // else {
          //   return{
          //     data:response
          //   }   
          // }
         
        },
      // invalidatesTags:['Product']
    }),
    SignInRequest: build.mutation({
      query: (signin) => (
        { url: 'signin', method: 'post',data:signin }
        ),
        transformResponse: (response,meta, arg) => {
          console.log("meta",meta);
         console.log("response",response);
         console.log("arg",arg);
          if(meta === 200){
             localStorage.setItem("testtoken",response?.accessToken);
             localStorage.setItem("testuserdata",JSON.stringify(response?.user));
             return{
               data:"Sucessfully Login Completed"
             }
          }
          // else {
          //   return{
          //     data:response
          //   }   
          // }
         
        },
      // invalidatesTags:['Product']
    }),
    addProductByToken: build.mutation({
      query: (product) => (
        { 
          url: 'api/v1/productstoken', 
        method: 'post',
        data:product,
      }
        ),
        transformResponse: (response,meta, arg) => {
          console.log("meta",meta);
         console.log("response",response);
         console.log("arg",arg);
          if(meta === 201){
             return{
               customdata:response
             }
          }
          else {
            return{
              data:response
            }   
          }
         
        },
      invalidatesTags:['Product']
    }),
    getTokenProducts: build.query({ 
      query: (id) => ({ url: `products?userId=${id}`, method: 'get' }),
      // transformResponse: (response,meta, arg) => {
      //   console.log("response",response);
      //   console.log("meta",meta);
      //   if(meta === 200){
      //      return{
      //        customdata:response
      //      }
      //   }
      //   else {
      //     return{
      //       data:response
      //     }   
      //   }
       
      // },
      providesTags:["Product"]
    }),
    updateProductByToken:build.mutation({
      query: (product) => (
        { url: `authoritytoken/${product?.id}`, method: 'put',data:product }
        ),
        invalidatesTags:['Product']
    }),
    deleteProductByToken:build.mutation({
      query:(id)=>(
        {url:`authoritytoken/${id}`,method:'delete'}
      ),
      invalidatesTags:['Product']
    }),
  }
},
  })
  export const {useGetProductsQuery,
    useAddProductMutation,useUpdateProductMutation,
    useGetSingleProductQuery,useDeleteProductMutation,
    useSignupRequestMutation,useAddProductByTokenMutation,useSignInRequestMutation,
    useGetTokenProductsQuery,useUpdateProductByTokenMutation
  }=axiosTokenProductApi