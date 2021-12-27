import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PlusSquareIcon, CloseIcon } from "@chakra-ui/icons";
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
import "./style.css";

function UserChall({user}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [chall, setChall] = useState([]);
  const [disc, setDisc] = useState("");
  const [title, setTitle] = useState("");
  const [point, setPoint] = useState(5);
  const [defValue, setDefValue] = useState("");
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState([]);
  const [active, setActive] = useState(false);
  //   const [_id, set_id] = useState("");
  // const [challenges, setChallenges] = useState([]);
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

  const state = useSelector((state) => {
    // console.log("state", state);
    return state;
  });

  const getChallengeByUser= async () => {
  
    const challenge = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/chall/${user}`,
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    // console.log("solveing", solveing.data);
    setChall( challenge.data);
 
  };
  useEffect(() => {
    getChallengeByUser();
  }, []);


  return (
    <>
      {chall &&
        chall.length &&
        chall.map((item) => {
          return (
            <div key={item._id} className="lan">
              <h1>{item.title}</h1>
            </div>
          );
        })}
        {((state.signIn.role==="admin"||state.signIn.point>300)&&state.signIn.userId===user) &&
          <div onClick={onOpen} className="addlang">
            <PlusSquareIcon /> <p>إضافة تحدي </p>
            </div>
            
            }
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
                                    type="text"
                                    // defaultValue={item.title}
                                    onChange={(e) => {
                                      setTitle(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="disc">
                                    {" "}
                                    وصف التحدي
                                  </FormLabel>
                                  <Input
                                    id="disc"
                                    type="text"
                                    // defaultValue={item.disc}
                                    onChange={(e) => {
                                      setDisc(e.target.value);
                                    }}
                                  />

                                  <FormLabel htmlFor="point">النقاط</FormLabel>
                                  <Input
                                    id="point"
                                    type="number"
                                    // defaultValue={item.point}
                                    onChange={(e) => {
                                      setPoint(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="defValue">
                                    القيمة الافتراضية للدالة
                                  </FormLabel>
                                  <Input
                                    id="defValue"
                                    type="text"
                                    // defaultValue={item.defValue}
                                    onChange={(e) => {
                                      setDefValue(e.target.value);
                                    }}
                                  />
                                  <ModalHeader className="title">
                                    مدخلات الدالة للإختبار
                                  </ModalHeader>
                                  <ModalHeader className="title">
                                    الإختبار الأول
                                  </ModalHeader>
                                  <FormLabel htmlFor="input11">
                                    المدخل الأول
                                  </FormLabel>
                                  <Input
                                    id="input11"
                                    type="text"
                                    
                                        // defaultValue={item.input[0][0]? item.input[0][0]: ""}
                        
                                    
                                    
                                    onChange={(e) => {
                                      setTest1Input1(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="input12">
                                    المدخل الثاني
                                  </FormLabel>
                                  <Input
                                    id="input12"
                                    type="text"
                                    // defaultValue={item.input[0][1]? item.input[0][1]: ""}
                                    onChange={(e) => {
                                      setTest1Input2(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="input13">
                                    المدخل الثالث
                                  </FormLabel>
                                  <Input
                                    id="input13"
                                    type="text"
                                    // defaultValue={item.input[0][2]? item.input[0][2]: ""}
                                    onChange={(e) => {
                                      setTest1Input3(e.target.value);
                                    }}
                                  />

                                  <ModalHeader className="title">
                                    الإختبار الثاني
                                  </ModalHeader>
                                  <FormLabel htmlFor="input21">
                                    المدخل الأول
                                  </FormLabel>
                                  <Input
                                    id="input21"
                                    type="text"
                                    // defaultValue={(item.input[1]&&item.input[1][0])? item.input[1][0]: ""}
                                    onChange={(e) => {
                                      setTest2Input1(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="input22">
                                    المدخل الثاني
                                  </FormLabel>
                                  <Input
                                    id="input22"
                                    type="text"
                                    // defaultValue={(item.input[1]&&item.input[1][1])? item.input[1][1]: ""}
                                    onChange={(e) => {
                                      setTest2Input2(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="input23">
                                    المدخل الثالث
                                  </FormLabel>
                                  <Input
                                    id="input23"
                                    type="text"
                                    // defaultValue={(item.input[1]&&item.input[1][2])? item.input[1][2]:""}
                                    onChange={(e) => {
                                      setTest2Input3(e.target.value);
                                    }}
                                  />
                                  <ModalHeader className="title">
                                    الإختبار الثالث
                                  </ModalHeader>
                                  <FormLabel htmlFor="input31">
                                    المدخل الأول
                                  </FormLabel>
                                  <Input
                                    id="input31"
                                    type="text"
                                    // defaultValue={(item.input[2]&&item.input[2][0])? item.input[2][0]: ""}
                                    onChange={(e) => {
                                      setTest3Input1(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="input32">
                                    المدخل الثاني
                                  </FormLabel>
                                  <Input
                                    id="input32"
                                    type="text"
                                    // defaultValue={(item.input[2]&&item.input[2][1])? item.input[2][1] : ""}
                                    onChange={(e) => {
                                      setTest3Input2(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="input33">
                                    المدخل الثالث
                                  </FormLabel>
                                  <Input
                                    id="input33"
                                    type="text"
                                    // defaultValue={(item.input[2]&&item.input[2][2])? item.input[2][2] : ""}
                                    onChange={(e) => {
                                      setTest3Input3(e.target.value);
                                    }}
                                  />
                                  <ModalHeader className="title">
                                    مخرجات الدالة للإختبار
                                  </ModalHeader>

                                  <FormLabel htmlFor="output1">
                                    مخرجات الإختبار الأول
                                  </FormLabel>
                                  <Input
                                    id="output1"
                                    type="text"
                                    // defaultValue={item.output[0]? item.output[0]: ""}
                                    onChange={(e) => {
                                      setOutput1(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="output2">
                                    مخرجات الإختبار الثاني
                                  </FormLabel>
                                  <Input
                                    id="output2"
                                    type="text"
                                    // defaultValue={item.output[1]? item.output[1] : ""}
                                    onChange={(e) => {
                                      setOutput2(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="output3">
                                    مخرجات الإختبار الثالث
                                  </FormLabel>
                                  <Input
                                    id="output3"
                                    type="text"
                                    // defaultValue={item.output[2]? item.output[2]: ""}
                                    onChange={(e) => {
                                      setOutput3(e.target.value);
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
                                  // onClick={(e) => {
                                  //   deleteeducation(e, item._id);
                                  // }}
                                >
                                  حذف التحدي
                                </Button>
                                <Button
                                  variant="ghost"
                                  // onClick={(e) => {
                                  //   editchallenge(e, item._id);
                                  // }}
                                >
                                  تعديل
                                </Button>
                              </ModalFooter>
                            </ModalContent>
                          </Modal>
    
    </>
  );
}

export default UserChall;