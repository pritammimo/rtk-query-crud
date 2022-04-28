import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from "../axiosBaseQuery";
export const axiosProductApi = createApi({
    reducerPath:"axiosProductApi",
    baseQuery:axiosBaseQuery({
        baseUrl:"http://localhost:4000/",
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
    })

  }
},
  })
  export const {useGetProductsQuery,
    useAddProductMutation,useUpdateProductMutation,
    useGetSingleProductQuery,useDeleteProductMutation}=axiosProductApi
