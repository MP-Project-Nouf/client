import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import image from "./bgUsers.jpg";
import {  useSelector } from "react-redux";
import "./style.css";
import { Avatar} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Users() {
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
      <div className="home">
        <div className="home-container">
          <img className="home-image" src={image} alt="image" />
          <div className="user-container">
          <div  className="user head">
          <h4>الصورة الشخصية</h4> 
                  <h4>اسم المستخدم</h4>
                  <h4>الإيميل</h4>
                  <h4>المستوى</h4>
                  <h4>عدد النقاط</h4>
                </div>
          {users &&
            users.length &&
            users.map((item) => {
              return (
                <div key={item._id} className="user" onClick={()=>{goprofile(item._id)}}>
                    <Avatar
                      name="Dan Abrahmov"
                      src={item.avatar}
                      className="line"
                    />
                  <h4>{item.username}@</h4>
                  <h4>{item.email}</h4>
                  <h4>{item.level}</h4>
                  <h4>{item.point}</h4>
                </div>
              );
            })}
            </div>
        </div>
      </div>
    </>
  );
}

export default Users;
