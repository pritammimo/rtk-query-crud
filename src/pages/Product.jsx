import React from 'react'
import { Row, Col, Card, Image, Descriptions, Spin } from "antd";

const Product = () => {
  return (
    <div>
     <Card title="View Product Detials">
     <Row gutter={[0, 20]}>
     <Col span={8}>
              <Image
                width={200}
                src="https://loremflickr.com/320/240/dress?random=1"
              />
            </Col>
            <Col span={16}>
            <Descriptions title="User Info" layout="vertical">
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Address" span={2}>
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>

            </Descriptions>
              </Col>
     </Row>


     </Card>
   
    </div>
  )
}

export default Product