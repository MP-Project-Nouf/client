import React, { useState, useEffect } from "react";
import Header from "../Header";
import Image from "./bghome.webp";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRightIcon } from "@chakra-ui/icons";
import logo from "./logohommp.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { SiCodeceptjs } from "react-icons/si";
import {GiLaddersPlatform} from "react-icons/gi";
import { GiLevelEndFlag } from "react-icons/gi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

import "./style.css";

import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import Footer from "../Footer";

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const state = useSelector((state) => {
    console.log("state", state);
    return state;
  });
  const [image] = useState(Image);

  const goChallege = () => {
    if (state.signIn.token) {
      navigate(`/challenge`);
    } else {
      onOpen();
    }
  };
  return (
    <>
      {/* <div className="home-header"> */}
      <Header />
      {/* </div> */}
      <div className="hom">
        <div className="hom-container">
          {/* <img className="home-image" src={image} alt="image" /> */}
          <div className="C">
            <img src={logo} alt="logo" className="logo-home" />
            <div className="home-plate">
              <h2> منصة عربية متخصصة في التحديات البرمجة بلغة</h2>
              <h1>جافا سكريبت</h1>
            </div>
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
            <div onClick={goChallege} className="startChall">
              <h1 >إبدأ التحدي</h1>
              <ArrowRightIcon w={8} h={8}  />
            </div>
            <div className="home-role">
              <h1 className="home-role-tilte">قوانين التحدي</h1>
              <div className="home-role-container">
                <div className="home-role-content">
                  <SiCodeceptjs className="home-role-icon"/>
                  <h1 className="home-role-text">قم بحل التحدي للأنتقال للتحدي التالي</h1>
                </div>
                <div className="home-role-content">
                  <GiLaddersPlatform className="home-role-icon"/>
                  <h1 className="home-role-text">إجمع النقاط من خلال حل التحديات</h1>
                </div>
                <div className="home-role-content">
                  <GiLevelEndFlag className="home-role-icon"/>
                  <h1 className="home-role-text">نقاط كل تحدي يعتمد على مستوى الصعوبة</h1>
                </div>
                <div className="home-role-content">
                  <AiOutlineAppstoreAdd className="home-role-icon"/>
                  <h1 className="home-role-text">يمكنك أضافة تحديات عند وصولك ل 300 نقطة</h1>
                </div>
              </div>
            </div>
            <div className="home-role gole">
            <h1 className="home-role-tilte">أهدافنا </h1>
            <h4>منصة تهدف الى تشجيع المبرمجين لتطوير مهاراتهم البرمجية من خلال حل العديد من التحديات البرمجية</h4>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader className="title">
                  لم تقم بتسجيل الدخول
                </ModalHeader>

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
      <Footer />
    </>
  );
}

export default Home;
