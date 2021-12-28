import React, { useState, useEffect } from "react"
import Header from "../Header";
import Image from "./bghome.webp";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {ArrowRightIcon} from '@chakra-ui/icons';
import logo from './logoedit.png'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,

} from "@chakra-ui/react";

import './style.css'

import { Button, ButtonGroup,Stack } from "@chakra-ui/react";

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const state = useSelector((state) => {
        console.log("state", state);
        return state;
      });
    const [image] = useState(Image);

   

    const goChallege=()=>{
      if(state.signIn.token)
      {
        navigate(`/challenge`);
      }else{
        onOpen();
      }


        
    }
  return (
    <>
    {/* <div className="home-header"> */}
      <Header />
      {/* </div> */}
      <div className="hom">
        <div className="hom-container">
          {/* <img className="home-image" src={image} alt="image" /> */}
          <div className="C">
          <img src={logo} alt="logo" className="logo-home"/> 
          <div><h1>منصة عربية متخصصة في التحديات البرمجة</h1></div>
            {/* <div className="lang">
              <Stack direction="row" spacing={4} align="center">
              <Button colorScheme="gray" variant="ghost">
                  javascript
                </Button>
                <Button colorScheme="gray" variant="ghost">
                  java
                </Button>
                <Button colorScheme="gray" variant="ghost">
                  ++c
                </Button>
                
              </Stack>
            </div> */}
            <div className="startChall" onClick={goChallege}>
                <h1>إبدأ التحدي</h1>
                <ArrowRightIcon  />
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="title">لم تقم بتسجيل الدخول</ModalHeader>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              إغلاق
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
