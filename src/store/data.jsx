import create from 'zustand';
import axios from "axios";
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set, get) => ({
      products:0,
      SingleProduct:"",
      getProducts: async ({page,limit}) => {
        console.log("check",page,limit);
        const response = await axios.get(`http://localhost:4000/products?_page=${page}&_limit=${limit}`)
        set({ products: response.data })
      },
      getProduct: async (id) => {
        const response = await axios.get(`http://localhost:4000/products/${id}`)
        set({ SingleProduct: response.data })
      },
      addProduct: async (formdata) => {
        const response = await axios.post(`http://localhost:4000/products`,formdata)
      },
      updateProduct: async (formdata) => {
        const response = await axios.put(`http://localhost:4000/products/${formdata?.id}`,formdata)
      },
      deleteProduct: async (id) => {
        const response = await axios.delete(`http://localhost:4000/products/${id}`)
      },
    }),
    {
      name: 'axios-crud', // unique name
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
  )
)