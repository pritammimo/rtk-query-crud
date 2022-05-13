import axios from './axiosInstance'
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      console.log("resultsaxios",result)
      return { ...result,
      meta:result.status}
    } catch (axiosError) {
      let err = axiosError
      console.log("response",err)
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }
  export default axiosBaseQuery
  export const gettoken = (sKey) => 
{
  
      return localStorage.getItem(sKey)
   
}
