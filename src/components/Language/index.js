import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Avatar} from "@chakra-ui/react";
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
import { EditIcon,CloseIcon } from "@chakra-ui/icons";
import "./style.css";

function Language({id,getUserById}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [favLan,setFavLan]= useState([]);
  const [language,setLanguage]= useState("");
  const [expertise,setExpertise]= useState("");
  
  const state = useSelector((state) => {
    // console.log("state", state);
    return state;
  });

  const getfavLanByuser = async () => {
    const lang = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/favoritLang/${id}`,
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    console.log("lang.profile", lang.data);
    setFavLan(lang.data);
    getUserById();
  };


  useEffect(() => {
    getfavLanByuser();
  }, []);

  return (
    <>
    {(favLan&&favLan.length)&&
    favLan.map((item)=>{
        return (
            <div>
                <h1>{item.language}</h1>
                <h6>{item.expertise}</h6>
                
                    <EditIcon onClick={onOpen}/>
                    <CloseIcon />
                  
            </div>
        )
    })

    }
   
          

                  {/* <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader className="title">
                        معلومات الحساب
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Avatar
                          name="Dan Abrahmov"
                          src={props.avatar}
                          className="line"
                        />
                        <FormControl>
                          <FormLabel htmlFor="fname">الإسم الأول</FormLabel>
                          <Input
                            id="fname"
                            type="text"
                            defaultValue={props.firstname}
                            onChange={(e) => {
                              setFirstname(e.target.value);
                            }}
                          />
                          <FormLabel htmlFor="lname">الإسم الأخير</FormLabel>
                          <Input
                            id="lname"
                            type="text"
                            defaultValue={props.lastname}
                            onChange={(e) => {
                              setLastname(e.target.value);
                            }}
                          />
                          <FormLabel htmlFor="username">اسم المستخدم</FormLabel>
                          <Input
                            id="username"
                            type="text"
                            defaultValue={props.username}
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                          />
                          <FormLabel htmlFor="email">الإيميل</FormLabel>
                          <Input
                            id="email"
                            type="email"
                            defaultValue={props.email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                          <FormLabel htmlFor="phone">رقم الجوال</FormLabel>
                          <Input
                            id="phone"
                            type="number"
                            defaultValue={props.phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                          />
                        </FormControl>
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                          إغلاق
                        </Button>
                        <Button variant="ghost" onClick={(e) => editAccInfo(e)}>
                          إرسال
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                  <div className="avatar">
                    <Avatar
                      name="Dan Abrahmov"
                      src={props.avatar}
                      className="line"
                    />

                    <h1 className="line fname">{props.firstname}</h1>
                    <h1 className="line lname">{props.lastname}</h1>
                    <h1 className="name">{props.username}@</h1>
                  </div>
                  <div>
                    <h1 className="line title">الإيميل</h1>
                    <h1 className="line value">{props.email}</h1>
                  </div>
                  <div>
                    <h1 className="line title">رقم الهاتف</h1>
                    <h1 className="line value">{props.phone}</h1>
                  </div> */}
                
    </>
  );
}

export default Language;