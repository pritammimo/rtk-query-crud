import React,{useState,useEffect} from 'react'
import { Row, Col, Card, Image, Descriptions, Spin } from "antd";
import { useParams } from 'react-router-dom';
import axios from '../Api';
import { useQuery } from 'react-query';

const Product = () => {
  let { id } = useParams();
  const [product, setproduct] = useState("");
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
       setproduct(result.data)
      },
      onError: (err) => {
        // setGetResult(fortmatResponse(err.response?.data || err));
      },
    }
  );
  useEffect(() => {
    if(id !==""){
      getProductById(id)
    }
  }, [id]);
  console.log("product",product);
  return (
    <div>
     <Card title="View Product Detials">
     <Row gutter={[0, 20]}>
     <Col span={8}>
              <Image
                width={200}
                src={`https://loremflickr.com/320/240/dress?random=${id}`}
              />
            </Col>
            <Col span={16}>
            <Descriptions title="User Info" layout="vertical">
            <Descriptions.Item label="name">{product?.title}</Descriptions.Item>
     <Descriptions.Item label="description">{product?.description}</Descriptions.Item>
     <Descriptions.Item label="price">{product?.price}</Descriptions.Item>
     <Descriptions.Item label="category" span={2}>
      {product?.category}
     </Descriptions.Item>

            </Descriptions>
              </Col>
     </Row>


     </Card>
   
    </div>
  )
}

export default Product