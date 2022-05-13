import React from 'react'
import { Row, Col, Card, Typography, Spin,PageHeader,Tag,Button } from "antd";
import ProductItem from '../component/ProductItem';
import { useNavigate} from "react-router-dom";
import { useGetTokenProductsQuery } from '../Redux/Services/axiostokenProducts';
const OwnProduct = () => {
    const navigate=useNavigate();
    // const {data}=useGetSingleProductQuery(id);
    const userId = JSON.parse(localStorage.getItem("testuserdata"))?.id;
    const {data}=useGetTokenProductsQuery(userId);
    console.log(data);
    console.log("userr",userId);
    const handleRouteChange=()=>{
        console.log("ok");
       navigate("/products")
      }
  return (
    <div>
     <Card title=" Your Products Page">
      <PageHeader
    title="Your Products"

    extra={[
      <Button key="2" onClick={handleRouteChange}>
       All Products
      </Button>,
      <Button key="1" type="primary">
        Your Products
      </Button>,
      // <DropdownMenu key="more" />,
    ]}
    // avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
    // breadcrumb={{ routes }}
  >

  </PageHeader>
         <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
         {data?.length >0 && data?.map((custom,i)=>(
           <ProductItem key={i} data={custom}/>
         ))}
        </Row>
        </Card>

    </div>
  )
}

export default OwnProduct