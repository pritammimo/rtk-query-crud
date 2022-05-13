import React,{useState} from 'react'
import { Input,Button,Row, Col,Card, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAddProductMutation } from '../Redux/Services/axiosProducts';
import {  useNavigate } from 'react-router-dom';
// import { useAddProductByTokenMutation } from '../Redux/Services/axiostokenProducts';
// import { useAddProductsByTokenMutation } from '../Redux/Services/Products';
import { useAddProductByTokenMutation } from '../Redux/Services/axiostokenProducts';
const AddProduct = () => {
  const navigate=useNavigate();
  const userId = JSON.parse(localStorage.getItem("testuserdata"))?.id;
  console.log("userr",userId);
  const [productdata, setdata] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    userId
  });
  const handleChange=(e)=>{
    setdata({...productdata,[e.target.name]:e.target.value})
   }
   const [addProduct,{isLoading}]=useAddProductByTokenMutation()
  // const [addProduct,{isLoading}]=useAddProductsByTokenMutation();
   const handleSubmit=async(e)=>{
    // console.log("data",data)
    console.log("products",productdata);
     await addProduct(productdata);
     navigate("/")
  }
  //  console.log("data",data);
  return (
   <>
   <Card title="Create a new Product">
   <Row gutter={[0, 20]}>
   <Col span={24}>
   <Input size="large" 
  value={productdata?.title}
  name="title"
 placeholder="title" 
 prefix={<UserOutlined />} 
 onChange={handleChange} />
  </Col>
    <br />
    <br />
    <Col span={24}>
    <Input size="large"
 value={productdata?.category}
 name="category"
  placeholder="category" prefix={<UserOutlined />} 
  onChange={handleChange}
  // disabled={isLoading}
  />
  </Col>
    <br />
    <br />
    <Col span={24}>
    <Input size="large" 
 value={productdata?.price}
 name="price"
 placeholder="price" prefix={<UserOutlined />} onChange={handleChange}
//  disabled={isLoading}
 />
  </Col>
  <br/>
    <br/>
    <Col span={24}>
 <Input size="large" 
 value={productdata?.description}
 name="description"
 placeholder="description" prefix={<UserOutlined />} onChange={handleChange}
//  disabled={isLoading}
 />
  </Col>
  <br></br>
    <Button type="primary" size="large" onClick={handleSubmit} 
    //  disabled={isLoading}
     >
          Submit
        </Button>
        </Row>
        </Card>
   </>
  )
}

export default AddProduct