import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { edit } from "./../../reducer/login";
import axios from "axios";
import { Avatar } from "@chakra-ui/react";
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
import { storage } from "./../../firebase";
import "./style.css";

function AccountInfo(props) {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
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

  // const handleUpload = () => {
  //   const ref = storage.ref(`/images/${file.name}`);
  //   const uploadTask = ref.put(file);
  //   uploadTask.on("state_changed", console.log, console.error, () => {
  //     ref.getDownloadURL().then((url) => {
  //       setFile(null);
  //       setURL(url);
  //       // createPost(url);
  //     });
  //   });
  // };

  const editAccInfo =  (e) => {
    e.preventDefault();
    const ref = storage.ref(`/images/${file.name}`);
    const uploadTask = ref.put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref.getDownloadURL().then(async (url) => {
        setFile(null);
        await axios.put(
          `${process.env.REACT_APP_BASIC_URL}/accountInfo`,
          {
            avatar: url,
            firstname: Firstname,
            lastname: Lastname,
            username: Username,
            email: Email,
            phone: Phone,
          },
          { headers: { Authorization: `Bearer ${state.signIn.token}` } }
        );
        let username=Username||state.signIn.userName;
        let avatar=url||state.signIn.image;
        const data = {
          username,
         avatar,
        };
        dispatch(edit(data));
        props.getUserById();
        onClose();
        // setURL(url);
        // createPost(url);
      });
    });
    
    
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="title">معلومات الحساب</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Avatar name="Dan Abrahmov" src={props.avatar} className="line" />
            <input
              type="file"
              name="avatar"
              accept="image/*"
              className="input-image"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
            <FormControl>
              <FormLabel htmlFor="fname" className="label">الإسم الأول</FormLabel>
              <Input
                id="fname"
                type="text"
                defaultValue={props.firstname}
                className="label-value"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
              <FormLabel htmlFor="lname" className="label">الإسم الأخير</FormLabel>
              <Input
                id="lname"
                type="text"
                defaultValue={props.lastname}
                className="label-value"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
              <FormLabel htmlFor="username" className="label">اسم المستخدم</FormLabel>
              <Input
                id="username"
                type="text"
                defaultValue={props.username}
                className="label-value"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <FormLabel htmlFor="email" className="label">الإيميل</FormLabel>
              <Input
                id="email"
                type="email"
                defaultValue={props.email}
                className="label-value"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <FormLabel htmlFor="phone" className="label">رقم الجوال</FormLabel>
              <Input
                id="phone"
                type="number"
                defaultValue={props.phone}
                className="label-value"
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
          size='2xl'
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
      {state.signIn.userId === props.id && (
        <EditIcon onClick={onOpen} className="editButt web-button" />
      )}
    </>
  );
}

export default AccountInfo;
