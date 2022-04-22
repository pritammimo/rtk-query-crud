import React from 'react'
import { Card, Avatar,Col} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined,DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
import { useDeleteProductMutation } from '../Redux/services/products';
import Product from '../pages/Product';
const key = "deletable";

const ProductItem = ({product}) => {
  console.log("check",product)
  const [deleteProduct]=useDeleteProductMutation()
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
        // src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        src={`https://loremflickr.com/320/240/dress?random=${product?.id}`}
      />
    }
    actions={[
        <EyeOutlined key="eye" 
        onClick={()=>navigate(`/product/${product?.id}`)}
        />,
      <EditOutlined key="edit" 
      onClick={()=>navigate(`/editproduct/${product?.id}`)}
      />,
      <DeleteOutlined key="delete" onClick={()=>deleteProduct(product?.id)}/>,
    ]}
  >
    <Meta
      avatar={<Avatar src={`https://joeschmoe.io/api/v1/random=${product?.id}`} />}
      title={product?.title}
      description={product?.description}
    />
  </Card>,
  </Col>
  </>
  )
}

export default ProductItem