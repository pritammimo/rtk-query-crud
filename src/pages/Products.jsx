import React from 'react';
import { Row, Col, Card, Typography, Spin } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import ProductItem from '../component/ProductItem';
import { useGetProductsQuery } from "../Redux/services/products";
const Products = () => {
  const {data,isFetching}=useGetProductsQuery();
 
  console.log("data",data)
  return (
    <div>
      {
        isFetching? 
        <div className='spin-wrapper'>
          <Spin size='large'/>
          </div>:   
        <Card title="Products Page">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {data?.map((product)=>{
            return(
              <div key={product?.id}>
              <ProductItem product={product}/>
              </div>
            )
          })}
       
       </Row>
       </Card>
      }
   
    </div>
  )
}

export default Products