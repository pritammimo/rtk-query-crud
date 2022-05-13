import React from 'react';
import { Row, Col, Card, Typography, Spin,PageHeader,Tag,Button } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import ProductItem from '../component/ProductItem';
import {  useGetProductsQuery } from "../Redux/Services/axiostokenProducts";
import { useNavigate} from "react-router-dom";
const Products = () => {
  const {data:{customdata}={},isFetching}=useGetProductsQuery();
  const navigate=useNavigate();
  // const {data}=useGetProductsQuery()
  console.log(useGetProductsQuery())
  // console.log(data);
  console.log(customdata);
  const handleRouteChange=()=>{
    console.log("ok");
   navigate("/ownproducts")
  }
  return (
    <div>
 
      <Card title="Products Page">
      <PageHeader
    title="All Products"

    extra={[
      <Button key="2" onClick={handleRouteChange}>
       Your Products
      </Button>,
      <Button key="1" type="primary">
        All Products
      </Button>,
      // <DropdownMenu key="more" />,
    ]}
    // avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
    // breadcrumb={{ routes }}
  >

  </PageHeader>
         <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
         {customdata?.length >0 && customdata?.map((custom,i)=>(
           <ProductItem key={i} data={custom}/>
         ))}
        </Row>
        </Card>

    </div>
  )
}

export default Products