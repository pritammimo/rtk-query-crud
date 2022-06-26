import React from 'react'
import { Card, Avatar,Col} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined,DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
const key = "deletable";
const ProductItem = ({id,title,description,price,category}) => {
  const navigate=useNavigate();
const { Meta } = Card;
console.log("title",title);
  return (
      <>
      <Col span={6} key="column">
   <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={`https://loremflickr.com/320/240/dress?random=${id}`}
      />
    }
    actions={[
        <EyeOutlined key="eye" 
        onClick={()=>navigate(`product/${id}`)}
        />,
      <EditOutlined key="edit" 
      onClick={()=>navigate(`/editproduct/${id}`)}
      />,
      <DeleteOutlined key="delete" />,
    ]}
  >
    <Meta
      avatar={<Avatar src={`https://joeschmoe.io/api/v1/random=${id}`} />}
      title={title}
      description={description}
    />
  </Card>,
  </Col>
  </>
  )
}

export default ProductItem