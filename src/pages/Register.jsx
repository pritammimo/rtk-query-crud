import React,{useState,useEffect} from 'react'
import { Input,Button,Row, Col,Card } from 'antd';
import { useSignupRequestMutation } from '../Redux/Services/axiostokenProducts';
import { useNavigate} from "react-router-dom";

const Register = () => {
  const navigate=useNavigate();
  const [navigatedata,setnavigatedata]=useState("")
  const [signup, setSignup] = useState({
    email:"",
    password:""
  });

  const [register,{isLoading,data}]=useSignupRequestMutation()
  console.log("data",data)
  const handleChange=(e)=>{
    setSignup({...signup,[e.target.name]:e.target.value})
   }
 
  const handleSubmit=async(e)=>{
    console.log("signup",signup);
     await register(signup);
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
  console.log("nav",navigatedata);
  return (
    <Card title="Register">
      <Row gutter={[0, 20]}>
      <Col span={24}>
      <Input size="large" 
    placeholder="email"
    value={signup?.email}
    name="email"
    onChange={handleChange} 
    />
      </Col>
      <Col span={24}>
      <Input size="large" placeholder="password"
        value={signup?.password}
        name="password"
        onChange={handleChange} 
    />
      </Col>
     
      </Row>
      <Button type="primary" size="large" onClick={handleSubmit} 
    //  disabled={isLoading}
     >
          Submit
        </Button>
  
    </Card>
  )
}

export default Register