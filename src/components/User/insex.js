import React, { useState, useEffect } from "react";
import Header from "../Header";
import Image from "./bgprofile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  Button,

} from "@chakra-ui/react";
import "./style.css";
import AccountInfo from "../AccountInfo";
import PersonalInfo from "../PersonalInfo";
import Language from "../Language";
import ChallSolve from "../ChallSolve";
import CompleteProfile from "../CompleteProfile";
import Comunication from "../Comunication";
import Education from '../Education'
import Training from "../Training";
import UserChall from "../UserChall";
import {logout} from "./../../reducer/login"


function User() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      `${process.env.REACT_APP_BASIC_URL}/user/${id}`,
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    console.log("user.profile", user.data);
    setUser(user.data);
   
  };
  const deleteUserById = (e) => {
    e.preventDefault();
    axios.delete(`${process.env.REACT_APP_BASIC_URL}/user/${id}`, {
      headers: { Authorization: `Bearer ${state.signIn.token}` },
    });
    dispatch(logout({ role: "", token: "",userId:"",useName:"",image:"" ,point:0,level:1}));
    navigate(`/`);
   
  };

  useEffect(() => {
    getUserById();
    
  }, []);


  return (
    <>
    <div className="home-header">
      <Header />
      </div>
      <div className="home">
        <div className="home-container">
         
          {User && (
              <>
            <div className="container-profile">
              <div className="slid">
                <div className="box">
                    <h1 className="title-profile">معلومات الحساب</h1>
                  <AccountInfo
                    avatar={User.avatar}
                    firstname={User.firstname}
                    lastname={User.lastname}
                    username={User.username}
                    email={User.email}
                    phone={User.phone}
                    getUserById={getUserById}
                    id={User._id}
                  />
                </div>
                <div className="box">
                <h1 className="title-profile">معلومات شخصية</h1>
                <PersonalInfo
                    birth={User.birth}
                    country={User.country}
                    city={User.city}
                    nationality={User.nationality}
                    gender={User.gender}
                    workStatus={User.workStatus}
                    getUserById={getUserById}
                    id={User._id}
                  />
                 
                </div>
                <div className="box">
                <h1 className="title-profile">اللغات المفضلة</h1>
                <Language
                    id={id}
                    getUserById={getUserById}
                  />
                 
                </div>
                <div className="box">
                <h1 className="title-profile"> التحديات المجتازة</h1>
                <ChallSolve 
                user={id}
                />
                 
                </div>
              </div>
              <div className="slid">
              <div className="box compleate">
                 <CompleteProfile user={User}/> 
              
              </div>
              <div className="box">
              <h1 className="title-profile"> وسائل التواصل</h1>
                 <Comunication
                  github={User.github} 
                  stackflow={User.stackflow} 
                  website={User.website}
                  twitter={User.twitter}
                  linkedin={User.linkedin}
                  id={User._id}
                  getUserById={getUserById}
                  />
              
              </div>
              <div className="box">
              <h1 className="title-profile"> المستوى التعليمي</h1>
                 <Education
                 
                  id={User._id}
                  getUserById={getUserById}
                  />
              
              </div>
              <div className="box">
              <h1 className="title-profile"> الشهادات التدريبية</h1>
                 <Training
                 
                  user={User._id}
                  getUserById={getUserById}
                  />
              
              </div>
              
              <div className="box">
              <h1 className="title-profile"> التحديات المضافة</h1>
                 <UserChall
                 
                  user={User._id}
                  />
              
              </div>
              </div>
              
            </div>
            {(state.signIn.userId===id||state.signIn.role==="admin")&&
                <button onClick={onOpen} className="deleteAccount">حذف الحساب</button>}
            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="title">هل انت متأكد من حذف الحساب ؟؟ </ModalHeader>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              إغلاق
            </Button>
            <Button
              variant="ghost"
              onClick={(e) => {
                deleteUserById(e);
              }}
            >
              تأكيد
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default User;