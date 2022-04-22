import React,{useState,useId} from 'react'
import { Input,Button,Row, Col,Card, message,Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAddProductsMutation } from "../Redux/services/products";
import {  useNavigate } from 'react-router-dom';
const AddProduct = () => {
  const navigate=useNavigate();
  const [data, setdata] = useState({
    title: "",
    category: "",
    price: "",
    description: ""
  });
  const handleChange=(e)=>{
   setdata({...data,[e.target.name]:e.target.value})
  }
  const [addProduct,{isLoading}]=useAddProductsMutation()
  const handleSubmit=async(e)=>{
    console.log("data",data)
  await addProduct(data);
  navigate("/")
  }
 
  return (
   <>
   <Card title="Create a new Product">
   <Row gutter={[0, 20]}>
   <Col span={24}>
 <Input size="large" 
  value={data?.title}
  name="title"
 placeholder="title" prefix={<UserOutlined />} onChange={handleChange} />
  </Col>
    <br />
    <br />
    <Col span={24}>
 <Input size="large"
 value={data?.category}
 name="category"
  placeholder="category" prefix={<UserOutlined />} 
  onChange={handleChange}
  disabled={isLoading}
  />
  </Col>
    <br />
    <br />
    <Col span={24}>
 <Input size="large" 
 value={data?.price}
 name="price"
 placeholder="price" prefix={<UserOutlined />} onChange={handleChange}
 disabled={isLoading}/>
  </Col>
    <br/>
    <br/>
    <Col span={24}>
 <Input size="large" 
 value={data?.description}
 name="description"
 placeholder="description" prefix={<UserOutlined />} onChange={handleChange}
 disabled={isLoading}/>
  </Col>
  <br></br>
    <Button type="primary" size="large" onClick={handleSubmit}  disabled={isLoading}>
          Submit
        </Button>
        </Row>
        </Card>
   </>
  )
}

export default AddProduct