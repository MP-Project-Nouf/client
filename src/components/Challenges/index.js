import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import image from "./bgchall.jpg";
// import logo from './leader.png'
import { useSelector } from "react-redux";
import "./style.css";
import { useNavigate } from "react-router-dom";
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

function Challenges() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [disc, setDisc] = useState("");
  const [title, setTitle] = useState("");
  const [point, setPoint] = useState(null);
  const [level, setLevel] = useState(null);
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState([]);
  const [active, setActive] = useState(false);
//   const [_id, set_id] = useState("");
  const [challenges, setChallenges] = useState([]);
  const navigate = useNavigate();
  const state = useSelector((state) => {
    return state;
  });
  const getAllchallenge = async () => {
    const allchall = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/challenge`,
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    console.log("allchall.data", allchall.data);

    setChallenges(allchall.data);
  };

  const editchallenge = async (e,_id) => {
    console.log("salam");
    e.preventDefault();
    await axios.put(
      `${process.env.REACT_APP_BASIC_URL}/challenge`,
      {
        disc,
        title,
        point,
        level,
        input,
        output,
        active,
        _id,
      }
      ,
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    getAllchallenge();
    onClose();
  };

  const deleteeducation = (e,id) => {
    e.preventDefault();
    axios.delete(`${process.env.REACT_APP_BASIC_URL}/challenge/${id}`, {
      headers: { Authorization: `Bearer ${state.signIn.token}` },
    });
    getAllchallenge();
    onClose();
  };

  const goprofile = (id) => {
    navigate(`/user/${id}`);
  };

  useEffect(() => {
    getAllchallenge();
  }, []);
  return (
    <>
      <Header />

      <div className="users">
        <div className="users-container">
          <img className="users-image" src={image} alt="image" />

          <div className="challenges-container">
            {challenges &&
              challenges.length &&
              challenges.map((item, i) => {
                return (
                  <>
                    <div className="challenges-box">
                      <>
                        <div className="challenges-title">
                          <h1>{item.title}</h1>
                        </div>
                        <div className="challenges-content">
                          <div className="challenges-point contents">
                            <h1>النقاط:</h1>
                            <h1>{item.point}</h1>
                          </div>
                          <div className="challenges-point contents">
                            <h1>المستوى:</h1>
                            <h1>{item.level}</h1>
                          </div>
                        </div>
                        <div className="challenges-point last">
                          {item.active ? (
                            <h1 className="active">مفعل</h1>
                          ) : (
                            <h1 className="notactive">غير مفعل</h1>
                          )}
                          <div>
                          <EditIcon onClick={onOpen} />
                          </div>
                          <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader className="title">
                                تعديل التحدي
                              </ModalHeader>
                              <ModalCloseButton />
                              <ModalBody>
                                <FormControl>
                                  <FormLabel htmlFor="title">
                                    {" "}
                                    عنوان التحدي
                                  </FormLabel>
                                  <Input
                                    id="title"
                                    type="date"
                                    defaultValue={item.title}
                                    onChange={(e) => {
                                      setTitle(e.target.value);
                                    }}
                                  />

                                  <FormLabel htmlFor="point">النقاط</FormLabel>
                                  <Input
                                    id="point"
                                    type="number"
                                    defaultValue={item.point}
                                    onChange={(e) => {
                                      setPoint(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="level">المستوى</FormLabel>
                                  <Input
                                    id="level"
                                    type="number"
                                    defaultValue={item.level}
                                    onChange={(e) => {
                                      setLevel(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="input">
                                    المدخلات
                                  </FormLabel>
                                  <Input
                                    id="input"
                                    type="text"
                                    defaultValue={item.input}
                                    onChange={(e) => {
                                      setInput(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="output">
                                    المخرجات
                                  </FormLabel>
                                  <Input
                                    id="output"
                                    type="text"
                                    defaultValue={item.output}
                                    onChange={(e) => {
                                      setOutput(e.target.value);
                                    }}
                                  />
                                  <FormControl as="fieldset">
                                    <FormLabel as="legend">
                                      تفعيل التحدي
                                    </FormLabel>
                                    <RadioGroup defaultValue="Itachi">
                                      <HStack spacing="24px">
                                        <Radio
                                          value="مفعل"
                                          onChange={() => {
                                            setActive(true);
                                          }}
                                        >
                                          مفعل
                                        </Radio>
                                        <Radio
                                          value="غير مفعل"
                                          onChange={() => {
                                            setActive(false);
                                          }}
                                        >
                                          غير مفعل
                                        </Radio>
                                      </HStack>
                                    </RadioGroup>
                                  </FormControl>
                                </FormControl>
                              </ModalBody>

                              <ModalFooter>
                                <Button
                                  colorScheme="blue"
                                  mr={3}
                                  onClick={(e) => {
                                   
                                    deleteeducation(e,item._id);
                                  }}
                                >
                                  حذف التحدي
                                </Button>
                                <Button
                                  variant="ghost"
                                  onClick={(e) => {
                                    editchallenge(e, item._id);
                                  }}
                                >
                                  تعديل
                                </Button>
                              </ModalFooter>
                            </ModalContent>
                          </Modal>
                        </div>
                      </>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Challenges;
