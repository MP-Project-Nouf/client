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
  const [defValue, setDefValue] = useState("");
  // const [input, setInput] = useState([]);
  // const [output, setOutput] = useState([]);
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

  const addChall = async (e) => {
    e.preventDefault();
    let test1Input=[];
    let test2Input=[];
    let test3Input=[];
    let input=[];
    let output=[];
    if(test1Input1)
    {
        test1Input.push(test1Input1);
    }
    if(test1Input2)
    {
        test1Input.push(test1Input2);
    }
    if(test1Input3)
    {
        test1Input.push(test1Input3);
    }
    if(test2Input1)
    {
        test2Input.push(test2Input1);
    }
    if(test2Input2)
    {
        test2Input.push(test2Input2);
    }
    if(test2Input3)
    {
        test2Input.push(test2Input3);
    }
    if(test3Input1)
    {
        test3Input.push(test3Input1);
    }
    if(test3Input2)
    {
        test3Input.push(test3Input2);
    }
    if(test3Input3)
    {
        test3Input.push(test3Input3);
    }
    if(test1Input.length)
    {
        input.push(test1Input)
    }
    if(test2Input.length)
    {
        input.push(test2Input)
    }
    if(test3Input.length)
    {
        input.push(test3Input)
    }
    if(output1)
    {
        output.push(output1)
    }
    if(output2)
    {
        output.push(output2)
    }
    if(output3)
    {
        output.push(output3)
    }
    await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/addChall`,
      {
        disc,title,input,output,defValue
      },
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    getChallengeByUser();
    onClose();
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
          <div onClick={onOpen} className="addlang web-button">
            <PlusSquareIcon /> <p>إضافة تحدي </p>
            </div>
            
            }
            <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader className="title">
                                إضافة التحدي
                              </ModalHeader>
                              <ModalCloseButton />
                              <ModalBody>
                                <FormControl>
                                  <FormLabel htmlFor="title label">
                                    {" "}
                                    عنوان التحدي
                                  </FormLabel>
                                  <Input
                                    id="title"
                                    type="text"
                                    className="label-value"
                                    // defaultValue={item.title}
                                    onChange={(e) => {
                                      setTitle(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="disc" className="label">
                                    {" "}
                                    وصف التحدي
                                  </FormLabel>
                                  <Input
                                    id="disc"
                                    type="text"
                                    className="label-value"
                                    // defaultValue={item.disc}
                                    onChange={(e) => {
                                      setDisc(e.target.value);
                                    }}
                                  />

                                  <FormLabel htmlFor="defValue" className="label">
                                    القيمة الافتراضية للدالة
                                  </FormLabel>
                                  <Input
                                    id="defValue"
                                    type="text"
                                    className="label-value"
                                    // defaultValue={item.defValue}
                                    onChange={(e) => {
                                      setDefValue(e.target.value);
                                    }}
                                  />
                                  <ModalHeader className="title label">
                                    مدخلات الدالة للإختبار
                                  </ModalHeader>
                                  <ModalHeader className="title label">
                                    الإختبار الأول
                                  </ModalHeader>
                                  <FormLabel htmlFor="input11" className="label">
                                    المدخل الأول
                                  </FormLabel>
                                  <Input
                                    id="input11"
                                    type="text"
                                    className="label-value"
                                    onChange={(e) => {
                                      setTest1Input1(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="input12" className="label">
                                    المدخل الثاني
                                  </FormLabel>
                                  <Input
                                    id="input12"
                                    type="text"
                                    className="label-value"
                                    // defaultValue={item.input[0][1]? item.input[0][1]: ""}
                                    onChange={(e) => {
                                      setTest1Input2(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="input13" className="label">
                                    المدخل الثالث
                                  </FormLabel>
                                  <Input
                                    id="input13"
                                    type="text"
                                    className="label-value"
                                    // defaultValue={item.input[0][2]? item.input[0][2]: ""}
                                    onChange={(e) => {
                                      setTest1Input3(e.target.value);
                                    }}
                                  />

                                  <ModalHeader className="title label">
                                    الإختبار الثاني
                                  </ModalHeader>
                                  <FormLabel htmlFor="input21" className="label">
                                    المدخل الأول
                                  </FormLabel>
                                  <Input
                                    id="input21"
                                    type="text"
                                    className="label-value"
                                    // defaultValue={(item.input[1]&&item.input[1][0])? item.input[1][0]: ""}
                                    onChange={(e) => {
                                      setTest2Input1(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="input22" className="label">
                                    المدخل الثاني
                                  </FormLabel>
                                  <Input
                                    id="input22"
                                    type="text"
                                    className="label-value"
                                    // defaultValue={(item.input[1]&&item.input[1][1])? item.input[1][1]: ""}
                                    onChange={(e) => {
                                      setTest2Input2(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="input23" className="label">
                                    المدخل الثالث
                                  </FormLabel>
                                  <Input
                                    id="input23"
                                    type="text"
                                    className="label-value"
                                    // defaultValue={(item.input[1]&&item.input[1][2])? item.input[1][2]:""}
                                    onChange={(e) => {
                                      setTest2Input3(e.target.value);
                                    }}
                                  />
                                  <ModalHeader className="title label">
                                    الإختبار الثالث
                                  </ModalHeader>
                                  <FormLabel htmlFor="input31" className="label">
                                    المدخل الأول
                                  </FormLabel>
                                  <Input
                                    id="input31"
                                    type="text"
                                    className="label-value"
                                    // defaultValue={(item.input[2]&&item.input[2][0])? item.input[2][0]: ""}
                                    onChange={(e) => {
                                      setTest3Input1(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="input32" className="label">
                                    المدخل الثاني
                                  </FormLabel>
                                  <Input
                                    id="input32"
                                    type="text"
                                    className="label-value"
                                    // defaultValue={(item.input[2]&&item.input[2][1])? item.input[2][1] : ""}
                                    onChange={(e) => {
                                      setTest3Input2(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="input33" className="label">
                                    المدخل الثالث
                                  </FormLabel>
                                  <Input
                                    id="input33"
                                    type="text"
                                    className="label-value"
                                    // defaultValue={(item.input[2]&&item.input[2][2])? item.input[2][2] : ""}
                                    onChange={(e) => {
                                      setTest3Input3(e.target.value);
                                    }}
                                  />
                                  <ModalHeader className="title label">
                                    مخرجات الدالة للإختبار
                                  </ModalHeader>

                                  <FormLabel htmlFor="output1" className="label">
                                    مخرجات الإختبار الأول
                                  </FormLabel>
                                  <Input
                                    id="output1"
                                    type="text"
                                    className="label-value"
                                    // defaultValue={item.output[0]? item.output[0]: ""}
                                    onChange={(e) => {
                                      setOutput1(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="output2" className="label">
                                    مخرجات الإختبار الثاني
                                  </FormLabel>
                                  <Input
                                    id="output2"
                                    type="text"
                                    className="label-value"
                                    // defaultValue={item.output[1]? item.output[1] : ""}
                                    onChange={(e) => {
                                      setOutput2(e.target.value);
                                    }}
                                  />
                                  <FormLabel htmlFor="output3" className="label">
                                    مخرجات الإختبار الثالث
                                  </FormLabel>
                                  <Input
                                    id="output3"
                                    type="text"
                                    className="label-value"
                                    // defaultValue={item.output[2]? item.output[2]: ""}
                                    onChange={(e) => {
                                      setOutput3(e.target.value);
                                    }}
                                  />
                                </FormControl>
                              </ModalBody>

                              <ModalFooter>
                                <Button
                                  variant="ghost"
                                  onClick={(e) => {
                                    addChall(e);
                                  }}
                                >
                                  إضافة
                                </Button>
                              </ModalFooter>
                            </ModalContent>
                          </Modal>
    
    </>
  );
}

export default UserChall;