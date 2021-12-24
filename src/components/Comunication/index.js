import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
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
  RadioGroup,
  HStack,
  Radio,
  Select,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import "./style.css";

function Comunication(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [website, setWebsite] = useState(props.website);
  const [github, setGithub] = useState(props.github);
  const [stackflow, setStackflow] = useState(props.stackflow);
  const [twitter, setTwitter] = useState(props.twitter);
  const [linkedin, setLinkedin] = useState(props.linkedin);
  const state = useSelector((state) => {
    // console.log("state", state);
    return state;
  });
  const comunication = async (e) => {
    e.preventDefault();
    await axios.put(
      `${process.env.REACT_APP_BASIC_URL}/comunication`,
      {
        github,
        website,
        stackflow,
        twitter,
        linkedin,
      },
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    props.getUserById();
    onClose();
  };

  return (
    <>
      {" "}
      <div className="comunication">
        <h1 className="line title textcolor">Personal website:</h1>
        {props.website && <a href={props.website} className="name"> زيارة</a>}
      </div>
      <div className="comunication">
        <h1 className="line title textcolor">twitter:</h1>
        {props.twitter && <a href={props.twitter} className="name"> زيارة</a>}
      </div>
      <div className="comunication">
        <h1 className="line title textcolor">Stackoverflow:</h1>
        {props.stackflow && <a href={props.stackflow} className="name"> زيارة</a>}
      </div>
      <div className="comunication">
        <h1 className="line title textcolor">github:</h1>
        {props.github && <a href={props.github} className="name"> زيارة</a>}
      </div>
      <div className="comunication">
        <h1 className="line title textcolor">linkedin:</h1>
        {props.linkedin && <a href={props.linkedin} className="name"> زيارة</a>}
      </div>
      {state.signIn.userId === props.id && (
        <EditIcon onClick={onOpen} className="editButt" />
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="title"> أدخل روابط وسائل التواصل</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="website">Personal website </FormLabel>
              <Input
                id="website"
                type="text"
                defaultValue={props.website}
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
              />
              <FormLabel htmlFor="github">github</FormLabel>
              <Input
                id="github"
                type="text"
                defaultValue={props.github}
                onChange={(e) => {
                  setGithub(e.target.value);
                }}
              />{" "}
              <FormLabel htmlFor="stackflow">stackflow</FormLabel>
              <Input
                id="stackflow"
                type="text"
                defaultValue={props.stackflow}
                onChange={(e) => {
                  setStackflow(e.target.value);
                }}
              />{" "}
              <FormLabel htmlFor="twitter">twitter</FormLabel>
              <Input
                id="twitter"
                type="text"
                defaultValue={props.twitter}
                onChange={(e) => {
                  setTwitter(e.target.value);
                }}
              />{" "}
              <FormLabel htmlFor="linkedin">linkedin</FormLabel>
              <Input
                id="linkedin"
                type="text"
                defaultValue={props.linkedin}
                onChange={(e) => {
                  setLinkedin(e.target.value);
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
                comunication(e);
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

export default Comunication;
