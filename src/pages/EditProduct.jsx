import React,{useState,useEffect} from 'react'
import { Input,Button,Row, Col,Card, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {  useNavigate,useParams } from 'react-router-dom';
import { useGetProductsQuery, useUpdateProductMutation } from '../Redux/services/products';
const EditProduct = () => {
  const navigate=useNavigate();
  let { id } = useParams();
  const [data, setdata] = useState({
    title: "",
    category: "",
    price: "",
    description: ""
  });
  const [updateProduct]=useUpdateProductMutation()
  const { data:productData } = useGetProductsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.find((el) => el.id == id),
    }),
  });
  console.log(data)
  useEffect(() => {
    if(productData !==undefined){
      setdata(productData)
    }
  }, [productData]);
  const handleChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
   }
   const handleSubmit=async(e)=>{
  //   console.log("data",data)
  await updateProduct(data);
  navigate("/")
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