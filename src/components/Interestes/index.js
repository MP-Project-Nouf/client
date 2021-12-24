import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
  FormLabel,
  Select,
  Checkbox,
  Stack,
} from "@chakra-ui/react";
import { PlusSquareIcon, CloseIcon } from "@chakra-ui/icons";
import "./style.css";

function Interestes({ Interest, getUserById }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [interest, setInterest] = useState([]);

  const state = useSelector((state) => {
    // console.log("state", state);
    return state;
  });

  const addInerest = async (e) => {
    e.preventDefault();
    console.log("interest",interest);
    // await axios.post(
    //   `${process.env.REACT_APP_BASIC_URL}/interest`,
    //   {
    //     interest,
    //   },
    //   { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    // );
    // getUserById();
    onClose();
  };
  const deletefavoritLang = (interest) => {
    axios.delete(`${process.env.REACT_APP_BASIC_URL}/interest/${interest}`, {
      headers: { Authorization: `Bearer ${state.signIn.token}` },
    });
    getUserById();
  };

  return (
    <>
      {Interest &&
        Interest.length &&
        Interest.map((item, i) => {
          return (
            <div key={i} className="lan">
              <h1>{item}</h1>

              <CloseIcon
                onClick={() => {
                  deletefavoritLang(item);
                }}
              />
            </div>
          );
        })}
      <div onClick={onOpen} className="addlang">
        <PlusSquareIcon /> <p>إضافةإهتمامات اخرى </p>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="title">الإهتمامات </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3} direction="column" >
              <Checkbox colorScheme="red" className="check" 
              onChange={(e)=>{if(e.target.checked){
                setInterest(...interest,"تطوير المواقع الإلكترونية")}
                if(!(e.target.checked))
                {
                    let copy=[...interest];
                    copy.splice(interest.indexOf("تطوير المواقع الإلكترونية"),1);
                    setInterest(...copy);
                    }}}>
                تطوير المواقع الالكترونية
              </Checkbox>
              <Checkbox colorScheme="red" className="check"
              onChange={(e)=>{if(e.target.checked){
                setInterest(...interest,"تصميم المواقع الإلكترونية")}
                if(!(e.target.checked))
                {
                    let copy=[...interest];
                    copy.splice(interest.indexOf("تصميم المواقع الإلكترونية"),1);
                    setInterest(...copy);
                    }}}
              >
                تصميم المواقع الإلكترونية
              </Checkbox>
              <Checkbox colorScheme="red" className="check"
              onChange={(e)=>{if(e.target.checked){
                setInterest(...interest,"تصميم  الواجهات")}
                if(!(e.target.checked))
                {
                    let copy=[...interest];
                    copy.splice(interest.indexOf("تصميم  الواجهات"),1);
                    setInterest(...copy);
                    }}}
              >
                تصميم الواجهات
              </Checkbox>
              <Checkbox colorScheme="red" className="check"
              onChange={(e)=>{if(e.target.checked){
                setInterest(...interest,"الذكاء الإصطناعي")}
                if(!(e.target.checked))
                {
                    let copy=[...interest];
                    copy.splice(interest.indexOf("الذكاء الإصطناعي"),1);
                    setInterest(...copy);
                    }}}
              >
                الذكاء الإصطناعي
              </Checkbox>
              <Checkbox colorScheme="red" className="check"
              onChange={(e)=>{if(e.target.checked){
                setInterest(...interest,"البرمجة")}
                if(!(e.target.checked))
                {
                    let copy=[...interest];
                    copy.splice(interest.indexOf("البرمجة"),1);
                    setInterest(...copy);
                    }}}
              >
                البرمجة
              </Checkbox>
              <Checkbox colorScheme="red" className="check"
              onChange={(e)=>{if(e.target.checked){
                setInterest(...interest,"علم البيانات")}
                if(!(e.target.checked))
                {
                    let copy=[...interest];
                    copy.splice(interest.indexOf("علم البيانات"),1);
                    setInterest(...copy);
                    }}}
              >
                علم البيانات
              </Checkbox>
              <Checkbox colorScheme="red" className="check"
              onChange={(e)=>{if(e.target.checked){
                setInterest(...interest,"الأمن السيبراني")}
                if(!(e.target.checked))
                {
                    let copy=[...interest];
                    copy.splice(interest.indexOf("الأمن السيبراني"),1);
                    setInterest(...copy);
                    }}}>
                الأمن السيبراني
              </Checkbox>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              إغلاق
            </Button>
            <Button
              variant="ghost"
              onClick={(e) => {
                addInerest(e);
              }}
            >
              إرسال
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Interestes;
