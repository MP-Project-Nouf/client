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
  FormControl,
} from "@chakra-ui/react";
import { PlusSquareIcon, CloseIcon } from "@chakra-ui/icons";
import "./style.css";

function Training({ user, getUserById }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [training, setTraining] = useState([]);
  const [center, setCenter] = useState("");
  const [certificate, setCertificate] = useState("");
  const [begining, setBegining] = useState(null);
  const [end, setEnd] = useState(null);

  const state = useSelector((state) => {
    // console.log("state", state);
    return state;
  });

  const gettrainingByuser = async () => {
    const train = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/training/${user}`,
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    setTraining(train.data);
  };

  const addtraining = async (e) => {
    e.preventDefault();
    await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/training`,
      {
        center,
        certificate,
        begining,
        end,
      },
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    gettrainingByuser();
    getUserById();
    onClose();
  };
    const deleteTraining = (id,e) => {
      e.preventDefault();
      axios.delete(`${process.env.REACT_APP_BASIC_URL}/training/${id}`, {
        headers: { Authorization: `Bearer ${state.signIn.token}` },
      });
      gettrainingByuser();
      getUserById()
    };

  useEffect(() => {
    gettrainingByuser();
  }, []);

  return (
    <>
      {training &&
        training.length &&
        training.map((item) => {
          return (
            <div key={item._id} className="lan">
              <h4>{item.center}</h4>
              <h4>{item.certificate}</h4>

              {state.signIn.userId === user && (
                <CloseIcon
                onClick={(e) => {
                    deleteTraining(item._id,e);
                }}
                className="web-button"/>
              )}
            </div>
          );
        })}
      {state.signIn.userId === user && (
        <div onClick={onOpen} className="addlang web-button">
          <PlusSquareIcon /> <p>?????????? ?????????? ????????????</p>
        </div>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="title">?????????? ???????????? ??????????????</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="center" className="label">????????????</FormLabel>
              <Input
                id="center"
                type="text"
                className="label-value"
                onChange={(e) => {
                  setCenter(e.target.value);
                }}
              />
              <FormLabel htmlFor="certificate" className="label">???????? ??????????????</FormLabel>
              <Input
                id="certificate"
                type="text"
                className="label-value"
                onChange={(e) => {
                  setCertificate(e.target.value);
                }}
              />

              <FormLabel htmlFor="start" className="label"> ?????????? ?????????????? </FormLabel>
              <Input
                id="start"
                type="date"
                className="label-value"
                onChange={(e) => {
                  setBegining(e.target.value);
                }}
              />
              <FormLabel htmlFor="end" className="label">?????????? ?????????????? </FormLabel>
              <Input
                id="end"
                type="date"
                className="label-value"
                onChange={(e) => {
                  setEnd(e.target.value);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              ??????????
            </Button>
            <Button
              variant="ghost"
              onClick={(e) => {
                addtraining(e);
              }}
            >
              ??????????
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Training;
