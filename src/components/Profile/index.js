import React, { useState, useEffect } from "react";
import Header from "../Header";
import Image from "./bgprofile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import "./style.css";
import AccountInfo from "../AccountInfo";
import PersonalInfo from "../PersonalInfo";
import Language from "../Language";
import ChallSolve from "../ChallSolve";
import CompleteProfile from "../CompleteProfile";


function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image] = useState(Image);
  const { id } = useParams();
  const [User, setUser] = useState(null);
  const [acou,setAcou]=useState(0);

  const state = useSelector((state) => {
    // console.log("state", state);
    return state;
  });

  const getUserById = async () => {
    console.log("token", state.signIn.token);
    const user = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/user/${id}`,
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
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
                  <AccountInfo
                    avatar={User.avatar}
                    firstname={User.firstname}
                    lastname={User.lastname}
                    username={User.username}
                    email={User.email}
                    phone={User.phone}
                    getUserById={getUserById}
                  />
                </div>
                <div className="box">
                <PersonalInfo
                    birth={User.birth}
                    country={User.country}
                    city={User.city}
                    nationality={User.nationality}
                    gender={User.gender}
                    workStatus={User.workStatus}
                    getUserById={getUserById}
                  />
                 
                </div>
                <div className="box">
                <Language
                    id={id}
                    getUserById={getUserById}
                  />
                 
                </div>
                <div className="box">
                <ChallSolve 
                user={id}
                />
                 
                </div>
              </div>
              <div className="slid"></div>
              <div className="box">
                 <CompleteProfile user={User}/> 
              
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
