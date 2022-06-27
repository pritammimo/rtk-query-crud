import React,{useState,useEffect} from 'react'
import { Input,Button,Row, Col,Card, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import axios from '../Api';
import { useMutation, useQuery } from 'react-query';
const EditProduct = () => {
  let { id } = useParams();
  const [data, setdata] = useState({
    title: "",
    category: "",
    price: "",
    description: ""
  });
  const { isLoading: isLoadingTutorial, refetch: getProductById } = useQuery(
    "query-product-by-id",
    async () => {
      return await axios.get(`/products/${id}`);
    },
    {
      enabled: false,
      retry: 1,
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
       setdata(result.data)
      },
      onError: (err) => {
        // setGetResult(fortmatResponse(err.response?.data || err));
      },
    }
  );
  const { isLoading: isPostingTutorial, mutate: UpdateProduct } = useMutation(
    async (data) => {
      console.log("data",data);
      return await axios.put(`/products/${id}`, 
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
  useEffect(() => {
    if(id !==""){
      getProductById(id)
    }
  }, [id]);
  const handleChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
   }
   const handleSubmit=async(e)=>{
      console.log("data",data)
    await UpdateProduct(data);
    // navigate("/")
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
           Submit
         </Button>
         </Row>
         </Card>
  )
}

export default EditProduct