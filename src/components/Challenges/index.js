import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import image from "./bgprofile.jpg";
// import image from "./bgchall.jpg";
// import logo from './leader.png'
import { useSelector } from "react-redux";
import "./style.css";
import { useNavigate } from "react-router-dom";
// import { EditIcon } from "@chakra-ui/icons";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   RadioGroup,
//   HStack,
//   Radio,
// } from "@chakra-ui/react";
import ChallengesItem from "./../ChallengesItem";

function Challenges() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [disc, setDisc] = useState("");
//   const [title, setTitle] = useState("");
//   const [point, setPoint] = useState(5);
//   const [defValue, setDefValue] = useState("");
//   //   const [input, setInput] = useState([]);
//   //   const [output, setOutput] = useState([]);
//   const [active, setActive] = useState(false);
//   //   const [_id, set_id] = useState("");
  const [challenges, setChallenges] = useState([]);
//   const [test1Input1, setTest1Input1] = useState("");
//   const [test1Input2, setTest1Input2] = useState("");
//   const [test1Input3, setTest1Input3] = useState("");
//   const [test2Input1, setTest2Input1] = useState("");
//   const [test2Input2, setTest2Input2] = useState("");
//   const [test2Input3, setTest2Input3] = useState("");
//   const [test3Input1, setTest3Input1] = useState("");
//   const [test3Input2, setTest3Input2] = useState("");
//   const [test3Input3, setTest3Input3] = useState("");
//   const [output1, setOutput1] = useState("");
//   const [output2, setOutput2] = useState("");
//   const [output3, setOutput3] = useState("");
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

  const gochallenge = (challid) => {
    navigate(`/challenge/${challid}`);
  };

//   const editchallenge = async (e, _id) => {
//     console.log("salam");
//     e.preventDefault();
//     let test1Input = [];
//     let test2Input = [];
//     let test3Input = [];
//     let input = [];
//     let output = [];
//     if (test1Input1) {
//       test1Input.push(test1Input1);
//     }
//     if (test1Input2) {
//       test1Input.push(test1Input2);
//     }
//     if (test1Input3) {
//       test1Input.push(test1Input3);
//     }
//     if (test2Input1) {
//       test2Input.push(test2Input1);
//     }
//     if (test2Input2) {
//       test2Input.push(test2Input2);
//     }
//     if (test2Input3) {
//       test2Input.push(test2Input3);
//     }
//     if (test3Input1) {
//       test3Input.push(test3Input1);
//     }
//     if (test3Input2) {
//       test3Input.push(test3Input2);
//     }
//     if (test3Input3) {
//       test3Input.push(test3Input3);
//     }
//     if (test1Input.length) {
//       input.push(test1Input);
//     }
//     if (test2Input.length) {
//       input.push(test2Input);
//     }
//     if (test3Input.length) {
//       input.push(test3Input);
//     }
//     if (output1) {
//       output.push(output1);
//     }
//     if (output2) {
//       output.push(output2);
//     }
//     if (output3) {
//       output.push(output3);
//     }
//     await axios.put(
//       `${process.env.REACT_APP_BASIC_URL}/challenge`,
//       {
//         disc,
//         title,
//         point,
//         defValue,
//         input,
//         output,
//         active,
//         _id,
//       },
//       { headers: { Authorization: `Bearer ${state.signIn.token}` } }
//     );
//     getAllchallenge();
//     onClose();
//   };

  //   const deleteeducation = (e, id) => {
  //     e.preventDefault();
  //     axios.delete(`${process.env.REACT_APP_BASIC_URL}/challenge/${id}`, {
  //       headers: { Authorization: `Bearer ${state.signIn.token}` },
  //     });
  //     getAllchallenge();
  //     onClose();
  //   };

  //   const goprofile = (id) => {
  //     navigate(`/user/${id}`);
  //   };

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
                    <div  key={item._id} onDoubleClick={gochallenge(item._id)}>
                        <ChallengesItem item={item} getAllchallenge={getAllchallenge} />
                    </div> 
                    
                //   <>
                //     <div className="challenges-box">
                //       <>
                //         <div className="challenges-title">
                //           <h1>{item.title}</h1>
                //         </div>
                //         <div className="challenges-content">
                //           <div className="challenges-point contents">
                //             <h1>النقاط:</h1>
                //             <h1>{item.point}</h1>
                //           </div>
                //           <div className="challenges-point contents">
                //             <h1>المستوى:</h1>
                //             <h1>{item.level}</h1>
                //           </div>
                //         </div>
                //         <div className="challenges-point last">
                //           {item.active ? (
                //             <h1 className="active">مفعل</h1>
                //           ) : (
                //             <h1 className="notactive">غير مفعل</h1>
                //           )}
                //           <div>
                //             <EditIcon onClick={onOpen} />
                //           </div>
                //           <Modal isOpen={isOpen} onClose={onClose}>
                //             <ModalOverlay />
                //             <ModalContent>
                //               <ModalHeader className="title">
                //                 تعديل التحدي
                //               </ModalHeader>
                //               <ModalCloseButton />
                //               <ModalBody>
                //                 <FormControl>
                //                   <FormLabel htmlFor="title">
                //                     {" "}
                //                     عنوان التحدي
                //                   </FormLabel>
                //                   <Input
                //                     id="title"
                //                     type="text"
                //                     defaultValue={item.title}
                //                     onChange={(e) => {
                //                       setTitle(e.target.value);
                //                     }}
                //                   />
                //                   <FormLabel htmlFor="disc">
                //                     {" "}
                //                     وصف التحدي
                //                   </FormLabel>
                //                   <Input
                //                     id="disc"
                //                     type="text"
                //                     defaultValue={item.disc}
                //                     onChange={(e) => {
                //                       setDisc(e.target.value);
                //                     }}
                //                   />

                //                   <FormLabel htmlFor="point">النقاط</FormLabel>
                //                   <Input
                //                     id="point"
                //                     type="number"
                //                     defaultValue={item.point}
                //                     onChange={(e) => {
                //                       setPoint(e.target.value);
                //                     }}
                //                   />
                //                   <FormLabel htmlFor="defValue">
                //                     القيمة الافتراضية للدالة
                //                   </FormLabel>
                //                   <Input
                //                     id="defValue"
                //                     type="text"
                //                     defaultValue={item.defValue}
                //                     onChange={(e) => {
                //                       setDefValue(e.target.value);
                //                     }}
                //                   />
                //                   <ModalHeader className="title">
                //                     مدخلات الدالة للإختبار
                //                   </ModalHeader>
                //                   <ModalHeader className="title">
                //                     الإختبار الأول
                //                   </ModalHeader>
                //                   <FormLabel htmlFor="input11">
                //                     المدخل الأول
                //                   </FormLabel>
                //                   <Input
                //                     id="input11"
                //                     type="text"
                //                     defaultValue={
                //                       item.input[0] && item.input[0][0]
                //                         ? item.input[0][0]
                //                         : ""
                //                     }
                //                     onChange={(e) => {
                //                       setTest1Input1(e.target.value);
                //                     }}
                //                   />
                //                   <FormLabel htmlFor="input12">
                //                     المدخل الثاني
                //                   </FormLabel>
                //                   <Input
                //                     id="input12"
                //                     type="text"
                //                     defaultValue={
                //                       item.input[0] && item.input[0][1]
                //                         ? item.input[0][1]
                //                         : ""
                //                     }
                //                     onChange={(e) => {
                //                       setTest1Input2(e.target.value);
                //                     }}
                //                   />
                //                   <FormLabel htmlFor="input13">
                //                     المدخل الثالث
                //                   </FormLabel>
                //                   <Input
                //                     id="input13"
                //                     type="text"
                //                     defaultValue={
                //                       item.input[0] && item.input[0][2]
                //                         ? item.input[0][2]
                //                         : ""
                //                     }
                //                     onChange={(e) => {
                //                       setTest1Input3(e.target.value);
                //                     }}
                //                   />

                //                   <ModalHeader className="title">
                //                     الإختبار الثاني
                //                   </ModalHeader>
                //                   <FormLabel htmlFor="input21">
                //                     المدخل الأول
                //                   </FormLabel>
                //                   <Input
                //                     id="input21"
                //                     type="text"
                //                     defaultValue={
                //                       item.input[1] && item.input[1][0]
                //                         ? item.input[1][0]
                //                         : ""
                //                     }
                //                     onChange={(e) => {
                //                       setTest2Input1(e.target.value);
                //                     }}
                //                   />
                //                   <FormLabel htmlFor="input22">
                //                     المدخل الثاني
                //                   </FormLabel>
                //                   <Input
                //                     id="input22"
                //                     type="text"
                //                     defaultValue={
                //                       item.input[1] && item.input[1][1]
                //                         ? item.input[1][1]
                //                         : ""
                //                     }
                //                     onChange={(e) => {
                //                       setTest2Input2(e.target.value);
                //                     }}
                //                   />
                //                   <FormLabel htmlFor="input23">
                //                     المدخل الثالث
                //                   </FormLabel>
                //                   <Input
                //                     id="input23"
                //                     type="text"
                //                     defaultValue={
                //                       item.input[1] && item.input[1][2]
                //                         ? item.input[1][2]
                //                         : ""
                //                     }
                //                     onChange={(e) => {
                //                       setTest2Input3(e.target.value);
                //                     }}
                //                   />
                //                   <ModalHeader className="title">
                //                     الإختبار الثالث
                //                   </ModalHeader>
                //                   <FormLabel htmlFor="input31">
                //                     المدخل الأول
                //                   </FormLabel>
                //                   <Input
                //                     id="input31"
                //                     type="text"
                //                     defaultValue={
                //                       item.input[2] && item.input[2][0]
                //                         ? item.input[2][0]
                //                         : ""
                //                     }
                //                     onChange={(e) => {
                //                       setTest3Input1(e.target.value);
                //                     }}
                //                   />
                //                   <FormLabel htmlFor="input32">
                //                     المدخل الثاني
                //                   </FormLabel>
                //                   <Input
                //                     id="input32"
                //                     type="text"
                //                     defaultValue={
                //                       item.input[2] && item.input[2][1]
                //                         ? item.input[2][1]
                //                         : ""
                //                     }
                //                     onChange={(e) => {
                //                       setTest3Input2(e.target.value);
                //                     }}
                //                   />
                //                   <FormLabel htmlFor="input33">
                //                     المدخل الثالث
                //                   </FormLabel>
                //                   <Input
                //                     id="input33"
                //                     type="text"
                //                     defaultValue={
                //                       item.input[2] && item.input[2][2]
                //                         ? item.input[2][2]
                //                         : ""
                //                     }
                //                     onChange={(e) => {
                //                       setTest3Input3(e.target.value);
                //                     }}
                //                   />
                //                   <ModalHeader className="title">
                //                     مخرجات الدالة للإختبار
                //                   </ModalHeader>

                //                   <FormLabel htmlFor="output1">
                //                     مخرجات الإختبار الأول
                //                   </FormLabel>
                //                   <Input
                //                     id="output1"
                //                     type="text"
                //                     defaultValue={
                //                       item.output[0] ? item.output[0] : ""
                //                     }
                //                     onChange={(e) => {
                //                       setOutput1(e.target.value);
                //                     }}
                //                   />
                //                   <FormLabel htmlFor="output2">
                //                     مخرجات الإختبار الثاني
                //                   </FormLabel>
                //                   <Input
                //                     id="output2"
                //                     type="text"
                //                     defaultValue={
                //                       item.output[1] ? item.output[1] : ""
                //                     }
                //                     onChange={(e) => {
                //                       setOutput2(e.target.value);
                //                     }}
                //                   />
                //                   <FormLabel htmlFor="output3">
                //                     مخرجات الإختبار الثالث
                //                   </FormLabel>
                //                   <Input
                //                     id="output3"
                //                     type="text"
                //                     defaultValue={
                //                       item.output[2] ? item.output[2] : ""
                //                     }
                //                     onChange={(e) => {
                //                       setOutput3(e.target.value);
                //                     }}
                //                   />
                //                   <FormControl as="fieldset">
                //                     <FormLabel as="legend">
                //                       تفعيل التحدي
                //                     </FormLabel>
                //                     <RadioGroup defaultValue="Itachi">
                //                       <HStack spacing="24px">
                //                         <Radio
                //                           value="مفعل"
                //                           onChange={() => {
                //                             setActive(true);
                //                           }}
                //                         >
                //                           مفعل
                //                         </Radio>
                //                         <Radio
                //                           value="غير مفعل"
                //                           onChange={() => {
                //                             setActive(false);
                //                           }}
                //                         >
                //                           غير مفعل
                //                         </Radio>
                //                       </HStack>
                //                     </RadioGroup>
                //                   </FormControl>
                //                 </FormControl>
                //               </ModalBody>

                //               <ModalFooter>
                //                 {/* <Button
                //                   colorScheme="blue"
                //                   mr={3}
                //                   onClick={(e) => {
                //                     deleteeducation(e, item._id);
                //                   }}
                //                 >
                //                   حذف التحدي
                //                 </Button> */}
                //                 <Button
                //                   variant="ghost"
                //                   onClick={(e) => {
                //                     editchallenge(e, item._id);
                //                   }}
                //                 >
                //                   تعديل
                //                 </Button>
                //               </ModalFooter>
                //             </ModalContent>
                //           </Modal>
                //         </div>
                //       </>
                //     </div>
                //   </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Challenges;
