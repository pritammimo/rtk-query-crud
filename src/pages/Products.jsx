import React from 'react';
import { Row, Col, Card, Typography, Spin } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import ProductItem from '../component/ProductItem';
import {  useGetProductsQuery } from "../Redux/Services/axiosProducts";
const Products = () => {
  const {data:{customdata}={},isFetching}=useGetProductsQuery();
  // const {data}=useGetProductsQuery()
  console.log(useGetProductsQuery())
  // console.log(data);
  console.log(customdata);
  return (
    <div>
 
      <Card title="Products Page">
         <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
         {customdata?.length >0 && customdata?.map((custom,i)=>(
           <ProductItem key={i} data={custom}/>
         ))}
        </Row>
        </Card>

    </div>
  )
}

export default Products