import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login} from "./../../reducer/login"
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './style.css'

function Signin() {
    const dispatch=useDispatch();
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    const signin=async()=>{
        let role="";
        console.log("name",name,"password",password)
        const user=await axios.post(`${process.env.REACT_APP_BASIC_URL}/login`, {name:name,password:password})
        console.log("user.data",user.data)
        if(user.data.result.role==="61c04027e201d8703bbc7c51")
    
        {
             role="admin";
        }else{role="user";}
        const data={
            role:role,
            token:user.data.token,
            userId:user.data.result._id

        }
        dispatch(login(data));
        navigate(`/`);
    }
    return (
        <div className="login">
      {/* <Link to="/">
        <img className="login-logo" alt='logo' />
      </Link> */}
      <div className="login-container">
        <h1>Signin</h1>
        <form>
          <h5>E-mail / UserName</h5>
          <input
            type="text"
            onChange={(e) =>{ 
              e.preventDefault();
              setName(e.target.value);
            }}
            required
          />
          <h5>password</h5>
          <input
            type="password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            required
          />
          <Link to="/" className="forgit">نسيت كلمة المرور؟؟</Link>
          <button className="login-signInButton" onClick={signin}>signin</button>
          <p>ليس لديك حساب؟</p>
          <Link to="/" className="forgit">إنشاء حساب</Link>
        </form>
        
      </div>
    </div>
    )
}

export default Signin
