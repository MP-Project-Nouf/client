import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./style.css";
import { useNavigate } from "react-router-dom";
import {BiCodeAlt} from 'react-icons/bi'
import { EditIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";

function ChallengesItem({ item, getAllchallenge }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [disc, setDisc] = useState("");
  const [title, setTitle] = useState("");
  const [point, setPoint] = useState(5);
  const [defValue, setDefValue] = useState("");
  const [active, setActive] = useState(null);
  const [test1Input1, setTest1Input1] = useState("");
  const [test1Input2, setTest1Input2] = useState("");
  const [test1Input3, setTest1Input3] = useState("");
  const [test2Input1, setTest2Input1] = useState("");
  const [test2Input2, setTest2Input2] = useState("");
  const [test2Input3, setTest2Input3] = useState("");
  const [test3Input1, setTest3Input1] = useState("");
  const [test3Input2, setTest3Input2] = useState("");
  const [test3Input3, setTest3Input3] = useState("");
  const [output1, setOutput1] = useState("");
  const [output2, setOutput2] = useState("");
  const [output3, setOutput3] = useState("");
  const navigate = useNavigate();
  const state = useSelector((state) => {
    return state;
  });

  const editchallenge = async (e, _id) => {
    // console.log("salam");
    e.preventDefault();
    let test1Input = [];
    let test2Input = [];
    let test3Input = [];
    let input = [];
    let output = [];
    if (test1Input1) {
      test1Input.push(test1Input1);
    }
    if (test1Input2) {
      test1Input.push(test1Input2);
    }
    if (test1Input3) {
      test1Input.push(test1Input3);
    }
    if (test2Input1) {
      test2Input.push(test2Input1);
    }
    if (test2Input2) {
      test2Input.push(test2Input2);
    }
    if (test2Input3) {
      test2Input.push(test2Input3);
    }
    if (test3Input1) {
      test3Input.push(test3Input1);
    }
    if (test3Input2) {
      test3Input.push(test3Input2);
    }
    if (test3Input3) {
      test3Input.push(test3Input3);
    }
    if (test1Input.length) {
      input.push(test1Input);
    }
    if (test2Input.length) {
      input.push(test2Input);
    }
    if (test3Input.length) {
      input.push(test3Input);
    }
    if (output1) {
      output.push(output1);
    }
    if (output2) {
      output.push(output2);
    }
    if (output3) {
      output.push(output3);
    }
    await axios.put(
      `${process.env.REACT_APP_BASIC_URL}/challenge`,
      {
        disc,
        title,
        point,
        defValue,
        input,
        output,
        active,
        _id,
      },
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    getAllchallenge();
    onClose();
  };

  const gochallenge = (id) => {
    navigate(`/challengeid/${id}`);
  };

  useEffect(() => {
    getAllchallenge();
  }, []);
  return (
    <>
      
      <div className="challenges-box" >
        <>
          <div className="challenges-title">
            <h1>{item.title}</h1>
          </div>
          <div className="challenges-content">
            <div className="challenges-point contents">
              <h1 className="tit">????????????:</h1>
              <h1>{item.point}</h1>
            </div>
            <BiCodeAlt className="icon-challenges"/>
            <div className="challenges-point contents">
              <h1 className="tit">??????????????:</h1>
              <h1>{item.level}</h1>
            </div>
          </div>
          <div className="challenges-point last">
            {item.active ? (
              <h1 className="active">????????</h1>
            ) : (
              <h1 className="notactive">?????? ????????</h1>
            )}
            <h1 onClick={()=>{gochallenge(item._id)}} className="challenge-open">??????</h1>
            <div>
        
              <EditIcon onClick={onOpen} className="challenge-open"/>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader className="title">?????????? ????????????</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <FormLabel htmlFor="title" className="label"> ?????????? ????????????</FormLabel>
                    <Input
                      id="title"
                      type="text"
                      className="label-value"
                      defaultValue={item.title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <FormLabel htmlFor="disc" className="label"> ?????? ????????????</FormLabel>
                    <Input
                      id="disc"
                      type="text"
                      className="label-value"
                      defaultValue={item.disc}
                      onChange={(e) => {
                        setDisc(e.target.value);
                      }}
                    />

                    <FormLabel htmlFor="point" className="label">????????????</FormLabel>
                    <Input
                      id="point"
                      type="number"
                      className="label-value"
                      defaultValue={item.point}
                      onChange={(e) => {
                        setPoint(e.target.value);
                      }}
                    />
                    <FormLabel htmlFor="defValue" className="label">
                      ???????????? ???????????????????? ????????????
                    </FormLabel>
                    <Input
                      id="defValue"
                      type="text"
                      className="label-value"
                      defaultValue={item.defValue}
                      onChange={(e) => {
                        setDefValue(e.target.value);
                      }}
                    />
                    <ModalHeader className="title label">
                      ???????????? ???????????? ????????????????
                    </ModalHeader>
                    <ModalHeader className="title label">???????????????? ??????????</ModalHeader>
                    <FormLabel htmlFor="input11" className="label">???????????? ??????????</FormLabel>
                    <Input
                      id="input11"
                      type="text"
                      className="label-value"
                      defaultValue={
                        item.input[0] && item.input[0][0]
                          ? item.input[0][0]
                          : ""
                      }
                      onChange={(e) => {
                        setTest1Input1(e.target.value);
                      }}
                    />
                    <FormLabel htmlFor="input12" className="label">???????????? ????????????</FormLabel>
                    <Input
                      id="input12"
                      type="text"
                      className="label-value"
                      defaultValue={
                        item.input[0] && item.input[0][1]
                          ? item.input[0][1]
                          : ""
                      }
                      onChange={(e) => {
                        setTest1Input2(e.target.value);
                      }}
                    />
                    <FormLabel htmlFor="input13" className="label">???????????? ????????????</FormLabel>
                    <Input
                      id="input13"
                      type="text"
                      className="label-value"
                      defaultValue={
                        item.input[0] && item.input[0][2]
                          ? item.input[0][2]
                          : ""
                      }
                      onChange={(e) => {
                        setTest1Input3(e.target.value);
                      }}
                    />

                    <ModalHeader className="title label">???????????????? ????????????</ModalHeader>
                    <FormLabel htmlFor="input21" className="label">???????????? ??????????</FormLabel>
                    <Input
                      id="input21"
                      type="text"
                      className="label-value"
                      defaultValue={
                        item.input[1] && item.input[1][0]
                          ? item.input[1][0]
                          : ""
                      }
                      onChange={(e) => {
                        setTest2Input1(e.target.value);
                      }}
                    />
                    <FormLabel htmlFor="input22" className="label">???????????? ????????????</FormLabel>
                    <Input
                      id="input22"
                      type="text"
                      className="label-value"
                      defaultValue={
                        item.input[1] && item.input[1][1]
                          ? item.input[1][1]
                          : ""
                      }
                      onChange={(e) => {
                        setTest2Input2(e.target.value);
                      }}
                    />
                    <FormLabel htmlFor="input23" className="label">???????????? ????????????</FormLabel>
                    <Input
                      id="input23"
                      type="text"
                      className="label-value"
                      defaultValue={
                        item.input[1] && item.input[1][2]
                          ? item.input[1][2]
                          : ""
                      }
                      onChange={(e) => {
                        setTest2Input3(e.target.value);
                      }}
                    />
                    <ModalHeader className="title label">???????????????? ????????????</ModalHeader>
                    <FormLabel htmlFor="input31" className="label">???????????? ??????????</FormLabel>
                    <Input
                      id="input31"
                      type="text"
                      className="label-value"
                      defaultValue={
                        item.input[2] && item.input[2][0]
                          ? item.input[2][0]
                          : ""
                      }
                      onChange={(e) => {
                        setTest3Input1(e.target.value);
                      }}
                    />
                    <FormLabel htmlFor="input32" className="label">???????????? ????????????</FormLabel>
                    <Input
                      id="input32"
                      type="text"
                      className="label-value"
                      defaultValue={
                        item.input[2] && item.input[2][1]
                          ? item.input[2][1]
                          : ""
                      }
                      onChange={(e) => {
                        setTest3Input2(e.target.value);
                      }}
                    />
                    <FormLabel htmlFor="input33" className="label">???????????? ????????????</FormLabel>
                    <Input
                      id="input33"
                      type="text"
                      className="label-value"
                      defaultValue={
                        item.input[2] && item.input[2][2]
                          ? item.input[2][2]
                          : ""
                      }
                      onChange={(e) => {
                        setTest3Input3(e.target.value);
                      }}
                    />
                    <ModalHeader className="title label">
                      ???????????? ???????????? ????????????????
                    </ModalHeader>

                    <FormLabel htmlFor="output1" className="label">
                      ???????????? ???????????????? ??????????
                    </FormLabel>
                    <Input
                      id="output1"
                      type="text"
                      className="label-value"
                      defaultValue={item.output[0] ? item.output[0] : ""}
                      onChange={(e) => {
                        setOutput1(e.target.value);
                      }}
                    />
                    <FormLabel htmlFor="output2" className="label">
                      ???????????? ???????????????? ????????????
                    </FormLabel>
                    <Input
                      id="output2"
                      type="text"
                      className="label-value"
                      defaultValue={item.output[1] ? item.output[1] : ""}
                      onChange={(e) => {
                        setOutput2(e.target.value);
                      }}
                    />
                    <FormLabel htmlFor="output3" className="label">
                      ???????????? ???????????????? ????????????
                    </FormLabel>
                    <Input
                      id="output3"
                      type="text"
                      className="label-value"
                      defaultValue={item.output[2] ? item.output[2] : ""}
                      onChange={(e) => {
                        setOutput3(e.target.value);
                      }}
                    />
                    <FormControl as="fieldset">
                      <FormLabel as="legend" className="label">?????????? ????????????</FormLabel>
                      <RadioGroup defaultValue="Itachi">
                        <HStack spacing="24px">
                          <Radio
                            value="????????"
                            onChange={() => {
                              setActive(true);
                            }}
                          >
                            ????????
                          </Radio>
                          <Radio
                            value="?????? ????????"
                            onChange={() => {
                              setActive(false);
                            }}
                          >
                            ?????? ????????
                          </Radio>
                        </HStack>
                      </RadioGroup>
                    </FormControl>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  {/* <Button
                                  colorScheme="blue"
                                  mr={3}
                                  onClick={(e) => {
                                    deleteeducation(e, item._id);
                                  }}
                                >
                                  ?????? ????????????
                                </Button> */}
                  <Button
                    variant="ghost"
                    onClick={(e) => {
                      editchallenge(e, item._id);
                    }}
                  >
                    ??????????
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </>
      </div>
    </>

  );
}

export default ChallengesItem;
