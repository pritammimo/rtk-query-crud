import React,{useEffect,useState} from 'react';
import { Row, Col, Card, Typography, Spin, Pagination } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import ProductItem from '../component/ProductItem';
import {useStore} from "../store/data";
const Products = () => {
  const products = useStore((state) => state.products);
  const getProducts = useStore((state) => state.getProducts);
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(5);
  useEffect(() => {
    getProducts({page,limit})
  }, [page]);
  const handleChange=(page)=>{
   setpage(page)
  }
  console.log("bears",products);
  return (
    <div>
      <Card title="Products Page">
         <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
           {products?.length >0 &&

           products?.map((item,i)=>(
              <ProductItem  {...item} key={i}/>
           ))}
          
           

{/*         
         <ProductItem/> */}
        </Row>
        <Row>
        <Pagination defaultCurrent={1} total={50} onChange={handleChange}/>
        </Row>
        </Card>
    </div>
  )
}

export default Products