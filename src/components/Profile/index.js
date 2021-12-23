import React, { useState, useEffect } from "react";
import Header from "../Header";
import Image from "./bgprofile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import "./style.css";

function Profile() {
  const [image] = useState(Image);
  const { id } = useParams();
  const [User, setUser] = useState(null);
  const state = useSelector((state) => {
    // console.log("state", state);
    return state;
  });

  const getUserById = async () => {
    console.log("token", state.signIn.token);
    const user = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/user/${id}`
    );
    console.log("user.profile", user.data);
    setUser(user.data);
  };

  useEffect(() => {
    getUserById();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <div className="home-container">
          <img className="home-image" src={image} alt="image" />
          {User && (
            <div className="container-profile">
              <div className="slid">
                <div className="box">
                  <div className="avatar">
                  <Avatar name='Dan Abrahmov' src={User.avatar} />
                  <h1>{User.firstname}</h1>
                  <h1>{User.lastname}</h1>
                  <h1>{User.username}@</h1>
                  </div>
                  <h1>الإيميل</h1>
                  <h1>{User.email}</h1>
                  <h1>رقم الهاتف</h1>
                  <h1>{User.phone}</h1>
                </div>
              </div>
              <div className="slid"></div>
              <div className="box">
                  <div className="avatar">
                  <Avatar name='Dan Abrahmov' src={User.avatar} />
                  <h1>{User.firstname}</h1>
                  <h1>{User.lastname}</h1>
                  <h1>{User.username}@</h1>
                  </div>
                  <h1>الإيميل</h1>
                  <h1>{User.email}</h1>
                  <h1>رقم الهاتف</h1>
                  <h1>{User.phone}</h1>
                </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
