import React,{useEffect} from 'react'
import { Row, Col, Card, Image, Descriptions, Spin } from "antd";
import {useStore} from "../store/data";
import { useParams } from 'react-router-dom';
const Product = () => {
  const SingleProduct = useStore((state) => state.SingleProduct);
  const getProduct = useStore((state) => state.getProduct);
  console.log("single",SingleProduct);
  let { id } = useParams();
  useEffect(() => {
    if(id !==""){
      getProduct(id)
    }
  }, [id]);
  return (
    <div>
     <Card title="View Product Detials">
     <Row gutter={[0, 20]}>
     <Col span={8}>
              <Image
                width={200}
                src={`https://loremflickr.com/320/240/dress?random=${id}`}
              />
            </Col>
            <Col span={16}>
            <Descriptions title="User Info" layout="vertical">
            <Descriptions.Item label="name">{SingleProduct?.title}</Descriptions.Item>
     <Descriptions.Item label="description">{SingleProduct?.description}</Descriptions.Item>
     <Descriptions.Item label="price">{SingleProduct?.price}</Descriptions.Item>
     <Descriptions.Item label="category" span={2}>
      {SingleProduct?.category}
     </Descriptions.Item>

            </Descriptions>
              </Col>
     </Row>


     </Card>
   
    </div>
  )
}

export default Product