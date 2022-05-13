import React from 'react'
import { Button, Radio } from 'antd';
import {useNavigate} from "react-router-dom"
const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
     <Button size="large" onClick={()=>navigate("/login")}>Login</Button>
     <Button size="large" onClick={()=>navigate("/register")}>Register</Button>
    </div>
  )
}

export default Home