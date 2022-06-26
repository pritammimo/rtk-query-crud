import React,{useEffect,useState} from 'react'
import { Input,Button,Row, Col,Card, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import {useStore} from "../store/data";
const EditProduct = () => {
  let { id } = useParams();
  const updateProduct = useStore((state) => state.updateProduct);
  const SingleProduct = useStore((state) => state.SingleProduct);
  const getProduct = useStore((state) => state.getProduct);
  const [data, setdata] = useState({
    title: "",
    category: "",
    price: "",
    description: ""
  });
  useEffect(() => {
    if(id !==""){
      getProduct(id)
    }
  }, [id]);
  useEffect(() => {
    if(SingleProduct !==""){
      setdata(SingleProduct)
    }
  }, [SingleProduct]);
  console.log("data",data);
  const handleChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
   }
   const handleSubmit=async(e)=>{
      console.log("data",data)
    await updateProduct(data);
    // navigate("/products")
    }
  return (
    <Card title="Create a new Product">
    <Row gutter={[0, 20]}>
    <Col span={24}>
  <Input size="large" 
  placeholder="title"
  name="title"
   prefix={<UserOutlined />} 
   value={data?.title}
   onChange={handleChange}
   />
   </Col>
     <br />
     <br />
     <Col span={24}>
  <Input 
  size="large" 
  value={data?.category}
  name="category"
  placeholder="category"
  onChange={handleChange}
   prefix={<UserOutlined />} />
   </Col>
     <br />
     <br />
     <Col span={24}>
  <Input size="large"  value={data?.price}
  name="price"
  placeholder="price" prefix={<UserOutlined />} onChange={handleChange}/>
   </Col>
     <br/>
     <br/>
     <Col span={24}>
  <Input size="large"  value={data?.description}
  name="description"
  placeholder="description" prefix={<UserOutlined />} onChange={handleChange}/>
   </Col>
     <br/>
     <br/>
     <Button type="primary" size="large" onClick={handleSubmit}
               >
           Primary
         </Button>
         </Row>
         </Card>
  )
}

export default EditProduct