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
} from "@chakra-ui/react";
import { PlusSquareIcon, CloseIcon } from "@chakra-ui/icons";
import "./style.css";

function Language({ id, getUserById }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [favLan, setFavLan] = useState([]);
  const [language, setLanguage] = useState("");
  const [expertise, setExpertise] = useState("");

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

  const addfavoritLang = async (e) => {
    e.preventDefault();
    await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/favoritLang`,
      {
        language,
        expertise,
      },
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    getfavLanByuser();
    onClose();
  };
  const deletefavoritLang = (id) => {
    axios.delete(`${process.env.REACT_APP_BASIC_URL}/favoritLang/${id}`, {
      headers: { Authorization: `Bearer ${state.signIn.token}` },
    });
    getfavLanByuser();
  };

  useEffect(() => {
    getfavLanByuser();
  }, []);

  return (
    <>
      {favLan &&
        favLan.length &&
        favLan.map((item) => {
          return (
            <div key={item._id} className="lan">
              <h1>{item.language}</h1>
              <h6>{item.expertise}</h6>

              {state.signIn.userId===id&&
                  <CloseIcon
                onClick={() => {
                  deletefavoritLang(item._id);
                }}
              />}
            </div>
          );
        })}
        {state.signIn.userId===id&&
                      
                      <div onClick={onOpen} className="addlang">
                      <PlusSquareIcon /> <p>إضافة لغة مفضلة</p>
                    </div>
                    }
     

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="title">لغة البرمجة المفضلة</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel htmlFor="country">لغة البرمجة</FormLabel>
            <Select
              id="country"
              placeholder="اختر لغة"
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option>جافاسكريبت</option>
              <option>جافا</option>
              <option>سويفت</option>
              <option>كوتلن</option>
              <option>c++</option>
              <option>بايثون</option>
            </Select>
            <FormLabel htmlFor="country">سنوات الخبرة</FormLabel>
            <Select
              id="country"
              placeholder="اختار سنوات الخبرة"
              onChange={(e) => {
                setExpertise(e.target.value);
              }}
            >
              <option>0-1 سنة</option>
              <option>1-2 سنوات</option>
              <option>2-4 سنوات</option>
              <option>اكثر من 6 سنوات</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              إغلاق
            </Button>
            <Button
              variant="ghost"
              onClick={(e) => {
                addfavoritLang(e);
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

export default Language;
