import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import image from "./bgprofile.jpg";
// import image from "./bgUsers.jpg";
import {  useSelector } from "react-redux";
import "./style.css";
import { Avatar,Input} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

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

  const [searchUser, setSearchUser] = useState([]);


  // let productInSearch = [];

  const getSearched = async (e) => {
    e.preventDefault();
    const search = await axios.get(`${process.env.REACT_APP_BASIC_URL}/search/${e.target.value}`);
    // console.log("search",search.data[0]._id);
    setSearchUser(search.data);
  };


  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <>
      <Header />
      
      
      <div className="users">
        <div className="users-container">
          {/* <img className="users-image" src={image} alt="image" /> */}
          <div className="search">
          <Input placeholder='ابحث عن اسم المستخدم او الايميل'  onKeyUp={(e)=>{getSearched(e)}}
        autoFocus/>
        </div>
          
          <div className="user-container">
          
          <div  className="user head">
          <h3>الصورة الشخصية</h3> 
                  <h3>اسم المستخدم</h3>
                  <h3>الإيميل</h3>
                  {/* <h4>المستوى</h4> */}
                  <h3>عدد النقاط</h3>
                </div>
             
          {(searchUser&&searchUser.length )?
          searchUser.map((item,i)=>{
            console.log("hello")
            return (
              <div key={i} className="user users-user " onClick={()=>{goprofile(item._id)}}>
                  <Avatar
                    name="Dan Abrahmov"
                    src={item.avatar}
                    className="line"
                  />
              
                <h4 className="u-u-i">{item.username}@</h4>
                <h4 className="u-u-i">{item.email}</h4>
                <h4 className="u-u-i">{item.point}</h4>
              </div>
            );

          }):
         ( users &&
            users.length) &&
            users.map((item) => {
              return (
                <div key={item._id} className="user users-user" onClick={()=>{goprofile(item._id)}}>
                 
                    <Avatar
                      name="Dan Abrahmov"
                      src={item.avatar}
                      className="line"
                    />
                 
               
                  <h4 className="u-u-i">{item.username}@</h4>
                  <h4 className="u-u-i">{item.email}</h4>
                  {/* <h4>{item.level}</h4> */}
                  <h4 className="u-u-i">{item.point}</h4>
              
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
