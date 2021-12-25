import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login} from "./../../reducer/login"
import { useDispatch } from 'react-redux';
import axios from 'axios';
import logo from './logocoding(1).png'
import './style.css'

function Signin() {
    const dispatch=useDispatch();
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("")
    const navigate = useNavigate();

    const signin=async(e)=>{
        e.preventDefault();
        let role="";
        const user=await axios.post(`${process.env.REACT_APP_BASIC_URL}/login`, {input:name,password:password})
        console.log("user.data",user.data)
        console.log("statuse",user.status)
        
    if (user.status !== 200) {
      setMessage(user.data);
    }else{
        if(user.data.result.role==="61c04027e201d8703bbc7c51")
    
        {
             role="admin";
        }else{role="user";}
        const data={
            role:role,
            token:user.data.token,
            userId:user.data.result._id,
            userName:user.data.result.username,
            image:user.data.result.avatar,
            point:user.data.result.point,
            level:user.data.result.level,

        }
        dispatch(login(data));
        navigate(`/`);
      }
    }
    return (
        <div className="login">
      <Link to="/">
        <img className="login-logo" alt='logo' src={logo}/>
      </Link>
      <div className="login-container">
        <h1>تسجيل دخول</h1>
        <form>
          <h5>اسم المستخدم/الإيمل</h5>
          <input
            type="text"
            onChange={(e) =>{ 
              e.preventDefault();
              setName(e.target.value);
            }}
            required
          />
          <h5>كلمة المرور</h5>
          <input
            type="password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            required
          />
          <Link to="/" className="login-forgit">نسيت كلمة المرور؟؟</Link>
          <button className="login-signInButton" onClick={(e)=>signin(e)}>تسجل الدخول</button>
          <p className='login-account'>ليس لديك حساب؟</p>
          <Link to="/register" className="login-account">إنشاء حساب</Link>
          <div className="message">{message} </div>
        </form>
        
      </div>
    </div>
    )
}

export default Signin
