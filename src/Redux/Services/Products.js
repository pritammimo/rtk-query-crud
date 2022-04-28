import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ProductsApi=createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:4000/",
}),
tagTypes:["Product"],
endpoints:(builder)=>({
  getProducts:builder.query({
      query:()=>"products",
      transformResponse: (res) => res.reverse(),
      providesTags:["Product"]
  }),
  addProducts:builder.mutation({
    query:(product)=>({
      url:"products",
      method:"POST",
      data:product
    }),
    invalidatesTags:['Product']
  }),
  updateProduct:builder.mutation({
    query:({id,...product})=>({
      url:`products/${id}`,
      method:"PUT",
      body:product
    }),
    invalidatesTags:['Product']
  }),
  deleteProduct:builder.mutation({
    query:(id)=>({
      url:`products/${id}`,
      method:"DELETE",
    }),
    invalidatesTags:['Product']
  })
//   getProductsById:builder.query({
//       query:(id)=>"products/"+id
//   })
})
})
export const {useGetProductsQuery,useAddProductsMutation,useUpdateProductMutation,useDeleteProductMutation}=ProductsApi