import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import logo from "./logocoding(1).png";
import './style.css'

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState(0);
  const [value, setValue] = useState(false);
  const [complex, setComplex] = useState(false);
  const [message,setMessage]=useState("")
  const navigate = useNavigate();

  const register = async(e) => {
    e.preventDefault();
    if(password!=pass)
    {
      setMessage("كلمة المرور غير متطابقة")
    }else{
    const user = await axios.post(`${process.env.REACT_APP_BASIC_URL}/register`, {
      email,
      username,
      password,
      role:"61c0401fe201d8703bbc7c4f",
      firstname,
      lastname,
    });
    console.log("user.status",user.status)
   
    if(user.status === 200){
      setMessage("تم ارسال رابط توثيق الحساب على الإيميل ");
    }else if(user.status === 203)
    {
      setMessage("كلمة المرور غير مطابقة للشروط");
    }else if (user.status === 204) {
      setMessage("اسم المستخدم او كلمة المرور موجوده مسبقا");
    }
  }
  };
  return (
    <div className="register">
      <Link to="/">
        <img className="login-logo" alt="logo" src={logo} />
      </Link>
      <div className="login-container">
        <h1>تسجيل</h1>
        <form>
          <h5>الإسم الأول</h5>
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setFirstname(e.target.value);
            }}
            required
          />
          <h5>الإسم الأخير</h5>
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setLastname(e.target.value);
            }}
            required
          />
          <h5>اسم المستخدم</h5>
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
            required
          />
          <h5>الإيميل</h5>
          <input
            type="text"
            defaultValue={""}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            required
          />
         
          <h5>كلمة المرور</h5>
          <p className="complex" >يجب ان تحتوي على الاقل 6 خانات,حرف كبير,حرف صغير,رقم و رمز</p>
          <input
            type="password"
            defaultValue={""}
            onChange={(e) => {
              e.preventDefault();
              
                setPassword(e.target.value);
             
              
            }}
            required
          />
          {/* {complex && <h6>كلمة المرور غير مناسبة</h6>} */}
          <h5>تأكيد كلمة المرور</h5>
          <input
            type="password"
            onChange={(e) => {
              e.preventDefault();
              setPass(e.target.value);
              if (!(password === e.target.value)) {
                setValue(true);
              }
            }}
            required
          />
          {/* {value && <h6>كلمة المرور غير متطابقة</h6>} */}
         
          <button className="login-registerButton" onClick={(e) => register(e)}>
            إنشاء حساب
          </button>
          <Link to="/signin" className="register-back">
            العودة الى تسجيل الدخول
          </Link>
          <div className="message">{message} </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
