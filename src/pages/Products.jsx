import React from 'react';
import { Row, Col, Card, Typography, Spin } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import ProductItem from '../component/ProductItem';
const Products = () => {
  return (
    <div>
      <Card title="Products Page">
         <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
         <ProductItem/>
        </Row>
        </Card>
    </div>
  )
}

export default Products