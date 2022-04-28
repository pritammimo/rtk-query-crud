import React from 'react'
import { Card, Avatar,Col} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined,DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
import { useDeleteProductMutation } from '../Redux/Services/axiosProducts';
const key = "deletable";
const ProductItem = ({data}) => {
  const navigate=useNavigate();
  const [deleteProduct]=useDeleteProductMutation();
const { Meta } = Card;
console.log(data);
const handleChange=(id)=>{
 deleteProduct(id)
}
  return (
      <>
      <Col span={6} key="column">
   <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={`https://loremflickr.com/320/240/dress?random=${data?.id}`}
      />
    }
    actions={[
        <EyeOutlined key="eye" 
        onClick={()=>navigate(`/product/${data?.id}`)}
        />,
      <EditOutlined key="edit" 
      onClick={()=>navigate(`/editproduct/${data?.id}`)}
      />,
      <DeleteOutlined key="delete" onClick={()=>handleChange(data?.id)} />,
    ]}
  >
    <Meta
      avatar={<Avatar src={`https://joeschmoe.io/api/v1/random=${data?.id}`} />}
      title={data?.title}
      description={data?.description}
    />
  </Card>,
  </Col>
  </>
  )
}

export default ProductItem