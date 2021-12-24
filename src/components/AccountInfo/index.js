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
import { EditIcon } from "@chakra-ui/icons";
import "./style.css";

function AccountInfo(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Avatarr, setAvatarr] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const state = useSelector((state) => {
    // console.log("state", state);
    return state;
  });

 

  const editAccInfo = async (e) => {
    e.preventDefault();
    await axios.put(
      `${process.env.REACT_APP_BASIC_URL}/accountInfo`,
      {
        avatar: Avatarr,
        firstname: Firstname,
        lastname: Lastname,
        username: Username,
        email: Email,
        phone: Phone,
      },
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    props.getUserById();
    onClose();
  };



  return (
    <>
   
                 

                  <Modal isOpen={isOpen} onClose={onClose}>
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
                      className="line personImage"
                    />
                    <div className="names">
                        <div className="fullname">
                        <h1 className="lname">{props.lastname}</h1>
                        <h1 className="fname">{props.firstname}</h1>
                    
                        </div>
                   
                    <h1 className="name">{props.username}@</h1>
                    </div>

                    
                  </div>
                  <div>
                    <h1 className="line title textcolor">الإيميل</h1>
                    <h1 className="line value">{props.email}</h1>
                  </div>
                  <div>
                    <h1 className="line title textcolor">رقم الهاتف</h1>
                    <h1 className="line value">{props.phone}</h1>
                  </div>
                  {state.signIn.userId===props.id&&
                      
                      <EditIcon onClick={onOpen} className="editButt"/>
                    }
                
    </>
  );
}

export default AccountInfo;