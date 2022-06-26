import React,{useState,useEffect} from 'react';
import { Row, Col, Card, Typography, Spin } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import ProductItem from '../component/ProductItem';
import { useQuery } from "react-query";
import axios from '../Api';
const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const { isLoading: isLoadingProducts, refetch: getAllProducts } = useQuery(
    "query-products",
    async () => {
      return await axios.get("/products");
    },
    {
      enabled: false,
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        // setGetResult(fortmatResponse(result));
        console.log("result",result);
        setAllProducts(result?.data)
      },
      onError: (err) => {
        // setGetResult(fortmatResponse(err.response?.data || err));
      },
    }
  );
  console.log("allProducts",allProducts);
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <Card title="Products Page">
         <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
           {allProducts?.length >0 && allProducts?.map((item,i)=>(
              <ProductItem {...item} key={i}/>
           ))}
       
        </Row>
        </Card>
    </div>
  )
}

export default Products