import React,{useState} from 'react'
import { Input,Button,Row, Col,Card, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useMutation } from 'react-query';
import axios from '../Api';
const AddProduct = () => {
  const [productdata, setdata] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
  });
  const handleChange=(e)=>{
    setdata({...productdata,[e.target.name]:e.target.value})
   }
  console.log("product",productdata);
   
   const { isLoading: isPostingTutorial, mutate: postProduct } = useMutation(
    async (data) => {
      console.log("data",data);
      return await axios.post(`/products`, 
      // {
      //   title: postTitle,
      //   description: postDescription,
      // }
      data
      );
    },
    {
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        // setPostResult(fortmatResponse(result));
      },
      onError: (err) => {
        // setPostResult(fortmatResponse(err.response?.data || err));
      },
    }
  );
  const handleSubmit=async()=>{
    await postProduct(productdata)
   }
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