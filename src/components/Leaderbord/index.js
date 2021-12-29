import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
// import image from "./bgprofile.jpg";
// import image from "./bgUsers.jpg";
import logo from './leader.png'
import {  useSelector } from "react-redux";
import "./style.css";
import { Avatar,Input} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Leaderbord() {
  const [users, setUsers] = useState([]);
  const navigate=useNavigate();
  const state = useSelector((state) => {
    return state;
  });
  const getAllUser = async () => {
    console.log("token", state.signIn.token);
    const allUsers = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/getAllUsers`
    );

    setUsers(allUsers.data);
  };

  const goprofile=(id)=>{
    navigate(`/user/${id}`);
  }

 
  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <>
      <Header />
      
      
      <div className="users">
        <div className="users-container">
          {/* <img className="users-image" src={image} alt="image" /> */}
        
          <div className="leader-container">
          {/* <img className="leader-logo" src={logo} alt="logo" /> */}
          <img className="leader-logo" src={logo} alt="logo" />
          
          <div  className="leader-head">
          <h4> المركز</h4> 
                  <h4>اسم المستخدم</h4>
                  <h4>عدد النقاط</h4>
                  {state.signIn.token&&
                      <h4>الملف الشخصي </h4>}
                </div>
          {( users &&
            users.length) &&
            users.map((item,i) => {
              return (
                  
                <div key={item._id} className="leader-box" >
                   <div className="leader-level">
                       {i+1}
                   </div>
                   <div className="leader-content">
                  <h4>{item.username}@</h4>

                  <h4>{item.point}</h4>
                  </div>
                  {state.signIn.token&&
                      <div className="leader-profile" onClick={()=>{goprofile(item._id)}}>
                       الملف الشخصي
                   </div>}
                  
                </div>
              );
            })}
            </div>
        </div>
      </div>
    </>
  );
}

export default Leaderbord;