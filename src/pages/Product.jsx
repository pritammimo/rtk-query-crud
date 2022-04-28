import React from 'react'
import { Row, Col, Card, Image, Descriptions, Spin } from "antd";
import {
  useParams,
} from "react-router-dom";
import { useGetSingleProductQuery } from '../Redux/Services/axiosProducts';
const Product = () => {
  let { id } = useParams();
  const {data}=useGetSingleProductQuery(id);
  console.log(data);
  return (
    <div>
    {
      data === undefined ? 
      <div className='spinner-wrapper'>
       <Spin size="large"/>
      </div>
      : <Card title="View Product Detials">
      <Row gutter={[0, 20]}>
      <Col span={8}>
               <Image
                 width={200}
                 src={`https://loremflickr.com/320/240/dress?random=${id}`}
               />
             </Col>
             <Col span={16}>
             <Descriptions title="Product Info" layout="horizontal">
             <Descriptions.Item label="name">{data?.title}</Descriptions.Item>
     <Descriptions.Item label="description">{data?.description}</Descriptions.Item>
     <Descriptions.Item label="price">{data?.price}</Descriptions.Item>
     <Descriptions.Item label="category" span={2}>
      {data?.category}
     </Descriptions.Item>
 
             </Descriptions>
               </Col>
      </Row>
 
 
      </Card>
    }
  
 
  </div>
  )
}

export default Product