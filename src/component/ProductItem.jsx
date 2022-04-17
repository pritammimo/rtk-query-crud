import React from 'react'
import { Card, Avatar,Col} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined,DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
const key = "deletable";
const ProductItem = () => {
  const navigate=useNavigate();
const { Meta } = Card;
  return (
      <>
      <Col span={6} key="column">
   <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
        <EyeOutlined key="eye" 
        onClick={()=>navigate("/product/1")}
        />,
      <EditOutlined key="edit" 
      onClick={()=>navigate("/editproduct")}
      />,
      <DeleteOutlined key="delete" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>,
  </Col>
  </>
  )
}

export default ProductItem