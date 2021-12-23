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

function PersonalInfo(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [workStatus, setWorkStatus] = useState("");
  const state = useSelector((state) => {
    // console.log("state", state);
    return state;
  });

  const editPesonalInfo = async (e) => {
    e.preventDefault();
    await axios.put(
      `${process.env.REACT_APP_BASIC_URL}/pesonalInfo`,
      {
        birth,
        country,
        city,
        nationality,
        gender,
        workStatus,
      },
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    props.getUserById();
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>
        <EditIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="title">معلومات شخصية</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="birth">تاريخ الميلاد</FormLabel>
              <Input
                id="birth"
                type="date"
                defaultValue={props.birth}
                onChange={(e) => {
                  setBirth(e.target.value);
                }}
              />
              <FormLabel htmlFor="country">الدولة</FormLabel>
              <Select
                id="country"
                placeholder="اختار دولتك"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              >
                <option>السعودية</option>
                <option>الإمارات</option>
              </Select>
              <FormLabel htmlFor="city">المدينة</FormLabel>
              <Input
                id="city"
                type="text"
                defaultValue={props.city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <FormLabel htmlFor="nationality">الجنسية</FormLabel>
              <Input
                id="nationality"
                type="text"
                defaultValue={props.nationality}
                onChange={(e) => {
                  setNationality(e.target.value);
                }}
              />
              <FormControl as="fieldset">
                <FormLabel as="legend">الجنس</FormLabel>
                <RadioGroup defaultValue="Itachi">
                  <HStack spacing="24px">
                    <Radio
                      value="mail"
                      onChange={() => {
                        setGender("ذكر");
                      }}
                    >
                      ذكر
                    </Radio>
                    <Radio
                      value="femail"
                      onChange={() => {
                        setGender("انثى");
                      }}
                    >
                      انثى
                    </Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              <FormLabel htmlFor="work">الحالة الوظيفية</FormLabel>
              <Input
                id="work"
                type="text"
                defaultValue={props.workStatus}
                onChange={(e) => {
                  setWorkStatus(e.target.value);
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
                editPesonalInfo(e);
              }}
            >
              إرسال
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div>
        <h1 className="line title">تاريخ الميلاد</h1>
        <h1 className="line value">{props.birth}</h1>
      </div>
      <div>
        <h1 className="line title">الدولة</h1>
        <h1 className="line value">{props.country}/</h1>
        <h1 className="line value">{props.city}</h1>
      </div>
      <div>
        <h1 className="line title">الجنسية</h1>
        <h1 className="line value">{props.nationality}</h1>
      </div>
      <div>
        <h1 className="line title">الجنس</h1>
        <h1 className="line value">{props.gender}</h1>
      </div>
      <div>
        <h1 className="line title">الحالة الوظيفية</h1>
        <h1 className="line value">{props.workStatus}</h1>
      </div>
    </>
  );
}

export default PersonalInfo;