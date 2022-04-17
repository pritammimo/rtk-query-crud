import React from 'react'
import { Input,Button,Row, Col,Card, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const AddProduct = () => {
  return (
   <>
   <Card title="Create a new Product">
   <Row gutter={[0, 20]}>
   <Col span={24}>
 <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
  </Col>
    <br />
    <br />
    <Col span={24}>
 <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
  </Col>
    <br />
    <br />
    <Col span={24}>
 <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
  </Col>
    <br/>
    <br/>
    <Button type="primary" size="large"
              >
          Primary
        </Button>
        </Row>
        </Card>
   </>
  )
}

export default AddProduct