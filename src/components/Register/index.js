import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";

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
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BASIC_URL}/register`, {
            email,
            username,
            password,
            role:'61c0401fe201d8703bbc7c4f',
            firstname ,
            lastname,
            phone,
          
        });
        navigate(`/signin`);
      };
    return (
        <div className="login">
        {/* <Link to="/">
          <img className="login-logo" src={logo} />
        </Link> */}
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
              onChange={(e) =>{ 
                e.preventDefault();
                setEmail(e.target.value);
              }}
              required
            />
            <h5>رقم الجوال</h5>
            <input
              type="number"
              onChange={(e) => {
                e.preventDefault();
                setPhone(e.target.value);
              }}
              required
            />
           <h5>كلمة المرور</h5>
           <p>يجب ان تحتوي على الاقل 6 خانات,حرف كبير,حرف صغير,رقم و رمز</p>
            <input
              type="password"
              onChange={(e) =>{ 
                e.preventDefault();
                if (
                    /\d/.test(e.target.value) &&
                    /[A-Z]/.test(e.target.value) &&
                    /[a-z]/.test(e.target.value) &&
                    /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(e.target.value) &&
                    e.target.value.length > 6
                  )
                {
                    
                    setPassword(e.target.value);
                }else{
                    setComplex(true);
                }
              }}
              required
            />
            {complex && <h6>كلمة المرور غير مناسبة</h6>}
            <h5>تأكيد كلمة المرور</h5>
            <input
              type="password"
              onChange={(e) => {
                e.preventDefault();
                setPass(e.target.value);
                if(!(password===e.target.value))
                {
                    setValue(true);
                }
              }}
              required
            />
            {value && <h6>كلمة المرور غير متطابقة</h6>}
            <Link to="/signin" className="forgit">العودة الى تسجيل الدخول</Link>
            <button className="login-signInButton" onClick={(e)=>register(e)}>
              إنشاء حساب
            </button>
          </form>
        </div>
      </div>
    )
}

export default Register
