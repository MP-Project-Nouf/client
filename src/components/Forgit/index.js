import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom'
import logo from './logocoding(1).png'
import './style.css'


function Forgit() {
    const [email,setEmail]=useState("");
    const [rand,setrand]=useState("");
    const [pass,setpass]=useState("");
    const [passtow,setpasstow]=useState("");
    const [target,setTarger]=useState(false);
    const [message,setMessage]=useState("");
    const [messageTow,setMessageTow]=useState("")

    const forgit = async(e) => {
        e.preventDefault();
        const user=await axios.post(`${process.env.REACT_APP_BASIC_URL}/forgit`, {
          email: email,
       
        });
        // console.log("forgit status" ,user.status);
        if(user.status===200)
        {
            setTarger(true);  
        }else if(user.status===400)
        {
            setMessage("الإيميل غير موجود ")
        }
        
      };
      const change=async(e)=>{
        e.preventDefault();
        
        if(passtow!=pass)
        {
            setMessageTow("كلمة المرور غير متطابقة")
        }else if(
            !(/\d/.test(pass)) ||
            !(/[A-Z]/.test(pass)) ||
            !(/[a-z]/.test(pass)) ||
            !(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(pass)) ||
            !(pass.length > 6)
          ){
            setMessageTow("كلمة المرور غير مطابقة للشروط")
          }else {
        const chang=await axios.post(`${process.env.REACT_APP_BASIC_URL}/changepass`, {
            email: email,
           rand:rand,
           password:pass
         
          });
          if(chang.status===200)
          {
            setMessageTow("تم تغيير كلمة المرور بنجاح قم بتسجيل الدخول")
          }
          if(chang.status===400)
          {
            setMessageTow("الكود المدخل خاطئ")
          }
        }
      }
    return (
        <div className="login">
      <Link to="/">
        <img className="login-logo" alt='logo' src={logo}/>
      </Link>
      <div className="login-container">
        
        {!target ?
            <form>
          <h5>ادخل الإيميل</h5>
          <input
            type="email"
            onChange={(e) =>{ 
              e.preventDefault();
              setEmail(e.target.value);
            }}
            required
          />
        
          <button className="login-signInButton" onClick={(e)=>forgit(e)}>إرسال كود لتغيير كلمة المرور</button>
          <Link to="/signin" className="login-account">تسجيل الدخول</Link>
          <Link to="/register" className="login-account">إنشاء حساب</Link>
          <div className="message">{message} </div>
        </form> :
        <form>
        <h5> الإيميل</h5>
        <input
        value={email}
          type="text"
          required
        />
        <h5>ادخل الكود المرسل الى ايميلك</h5>
          <input
            type="number"
            onChange={(e) =>{ 
              e.preventDefault();
              setrand(e.target.value);
            }}
            required
          />
          <h5>كلمة مرور جديدة</h5>
          <input
             type="password"
            onChange={(e) =>{ 
              e.preventDefault();
              setpass(e.target.value);
            }}
            required
          />
          <h5> تأكيد كلمة المرور</h5>
          <input
             type="password"
            onChange={(e) =>{ 
              e.preventDefault();
              setpasstow(e.target.value);
            }}
            required
          />
      
        <button className="login-signInButton" onClick={(e)=>change(e)}>تغيير</button>
        <Link to="/signin" className="login-account">تسجيل الدخول</Link>
        <Link to="/register" className="login-account">إنشاء حساب</Link>
        <div className="message">{messageTow} </div>
      </form>
        }
        
      </div>
    </div>
    )
}

export default Forgit
