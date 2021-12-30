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
  Input,
  FormControl


} from "@chakra-ui/react";
import { PlusSquareIcon, CloseIcon } from "@chakra-ui/icons";
import "./style.css";

function Education({ id, getUserById }) {
   
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [education, setEducation] = useState([]);
  const [level, setLevel] = useState("");
  const [college, setCollege] = useState("");
  const [speciall, setSpeciall] = useState("");
  const [enrollment, setEnrollment] = useState(null);
  const [graduation, setGraduation] = useState(null);

  const state = useSelector((state) => {
    // console.log("state", state);
    return state;
  });

  const geteducationByuser = async () => {
    const educat = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/education/${id}`,
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    setEducation(educat.data);
 
  };

  const addeducation = async (e) => {
    e.preventDefault();
    await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/education`,
      {
        level,
        college,
        speciall,
        enrollment,
        graduation,
      },
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    geteducationByuser();
    getUserById()
    onClose();
  };
  const deleteeducation = (id,e) => {
    e.preventDefault();
    axios.delete(`${process.env.REACT_APP_BASIC_URL}/education/${id}`, {
      headers: { Authorization: `Bearer ${state.signIn.token}` },
    });
    geteducationByuser();
    getUserById()
  };

  useEffect(() => {
    geteducationByuser();
  }, []);

  return (
    <>
      {education &&
        education.length &&
        education.map((item) => {
          return (
            <div key={item._id} className="lan">
              <h4>{item.level}</h4>
              <h4>{item.college}</h4>
              <h4>{item.speciall}</h4>
             


              {state.signIn.userId===id&&
                  <CloseIcon
                onClick={(e) => {
                    deleteeducation(item._id,e);
                }}
              className="web-button"/>}
            </div>
          );
        })}
        {state.signIn.userId===id&&
                      
                      <div onClick={onOpen} className="addlang web-button">
                      <PlusSquareIcon /> <p>إضافة مستوى تعليمي</p>
                    </div>
                    }
     
     <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="title">إضافة مستوى تعليمي</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="level" className="label">المستوى</FormLabel>
              <Input
                id="level"
                type="text"
                className="label-value"
                onChange={(e) => {
                  setLevel(e.target.value);
                }}
              />
              <FormLabel htmlFor="college" className="label">الجامعة</FormLabel>
              <Input
                id="college"
                type="text"
                className="label-value"
                onChange={(e) => {
                  setCollege(e.target.value);
                }}
              />
              <FormLabel htmlFor="speciall" className="label">التخصص</FormLabel>
              <Input
                id="speciall"
                type="text"
                className="label-value"
                onChange={(e) => {
                    setSpeciall(e.target.value);
                }}
              />
              <FormLabel htmlFor="start" className="label">تاريخ البداية </FormLabel>
              <Input
                id="start"
                type="date"
                className="label-value"
                onChange={(e) => {
                    setEnrollment(e.target.value);
                }}
              />
              <FormLabel htmlFor="end" className="label">تاريخ التخرج </FormLabel>
              <Input
                id="end"
                type="date"
                className="label-value"
                onChange={(e) => {
                    setGraduation(e.target.value);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              إغلاق
            </Button>
            <Button
              variant="ghost"
              onClick={(e) => {
                addeducation(e);
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

export default Education;