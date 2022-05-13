import React,{useState,useEffect} from 'react'
import { Input,Button,Row, Col,Card } from 'antd';
import { useNavigate} from "react-router-dom";
import { useSignInRequestMutation } from '../Redux/Services/axiostokenProducts';
const Login = () => {
  const navigate=useNavigate();
  const [navigatedata,setnavigatedata]=useState("");
  const [signin, setSignin] = useState({
    email:"",
    password:""
  });
  const handleChange=(e)=>{
    setSignin({...signin,[e.target.name]:e.target.value})
   }
   const [login,{isLoading,data}]=useSignInRequestMutation()
   const handleSubmit=async(e)=>{
    console.log("signin",signin);
     await login(signin);
    //  navigate("/login")
  }
  useEffect(() => {
    
    if(data !=="" && data !==undefined){
      setnavigatedata(data)
    }
      // return cleanUp = () => {
      //   data("")
      // }
    }, [data]);
    useEffect(() => {
      if(navigatedata !==""){
        navigate("/products")
      }
      return () => {
        setnavigatedata("")
      }
    }, [navigatedata]);
  return (
    <Card title="Login">
      <Row gutter={[0, 20]}>
      <Col span={24}>
      <Input size="large" 
   placeholder="email"
   value={signin?.email}
   name="email"
   onChange={handleChange} 
     />
      </Col>
      
    <Col span={24}>
    <Input size="large" 
    placeholder="password"
    value={signin?.password}
   name="password"
   onChange={handleChange}  />
    
    </Col>
    <Col span={24}>
    <Button type="primary" size="large" onClick={handleSubmit} 
     >
          Submit
        </Button>
       </Col>
       </Row>
    </Card>
  )
}

export default Login