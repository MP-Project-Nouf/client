import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { update } from "./../../reducer/login";
import axios from "axios";
import Header from "../Header";
import AceEditor from "react-ace";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Button,
  
  } from "@chakra-ui/react";
import "./style.css";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import * as ace from "ace-builds/src-noconflict/ace";
ace.config.set("basePath", "/assets/ui/");
ace.config.set("modePath", "");
ace.config.set("themePath", "");

function ChallengeId() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState([]);
  const [message,setMessage]=useState("")
  let solution = "";

  const state = useSelector((state) => {
    // console.log("state", state);
    return state;
  });
  const getChallById = async () => {
    console.log("state.signIn.level", state.signIn.level);
    const chall = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/challById/${id}`,
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    console.log("chall", chall.data);
    setChallenge(chall.data);
  };

  const gosolution = () => {
    navigate(`/solution/${challenge._id}`);
  };

  const gocomment = () => {
    navigate(`/commentadmin/${challenge._id}`);
  };
  

  const goTest = (e) => {
    e.preventDefault();
    // console.log("solution",solution);
    let code = new Function("a", `return ${solution}`);
    let resul=true;
    let ms="";
    const result = code();
    challenge.input.forEach((item,i)=>{
        if(!(result(...item)===challenge.output[i]))
        {
            ms+=`\n`+`test number ${i+1} output is ${result(...item)} expect output is ${challenge.output[i]}`; 
            resul=false;
            
        }
       
        // console.log("input",...item);
        // console.log("output",challenge.output[i]);
    })
    console.log("ms",ms);
    setMessage(ms);
//     console.log("code", result(...challenge.input[0]));
if(resul)
{
    axios.post(
        `${process.env.REACT_APP_BASIC_URL}/solution`,
        {
            image:state.signIn.image,
            username:state.signIn.userName,
            solve:solution,
            challenge:challenge._id,
            point:challenge.point,
            title:challenge.title,
        },
        { headers: { Authorization: `Bearer ${state.signIn.token}` } }
      );
      const newPoint=state.signIn.point+challenge.point;
      const newLevel=state.signIn.level+challenge.level;
    //   console.log("newPoint",newPoint);
    //   console.log("newLevel",newLevel)
      const data = {
        pointt: newPoint,
        levell:newLevel,
      };
      dispatch(update(data));
      navigate(`/solution/${challenge._id}`); 
}else{
    onOpen();
}
  };
  function onChange(newValue) {
    // console.log("change", newValue);
    solution = newValue;
  }
//   console.log(state.signIn.token)

  useEffect(() => {
    getChallById();
  }, []);
  return (
    <>
      <Header />
      {challenge && 
        <div className="challenge-container">
          <div className="challenge-slide">
              <div className="challenge-title">
              <h1 className="title-challenge">عنوان التحدي</h1>
            <h1 className="disc">{challenge.title}</h1>
            </div>
            <h1 className="title-disc">وصف التحدي</h1>
            <h1 className="disc">{challenge.disc}</h1>

            <table
            className="disc">
              <tr>
              {(challenge.input &&
                challenge.input.length) &&
                challenge.input[0].map((item, i) => {
                //   return (
                //     item.map((x) => {
                        return <th key={i}>input</th>;
                    //   })

                  })}
                
                <th>output</th>
              </tr>

              {challenge.input &&
                challenge.input.length &&
                challenge.input.map((item, i) => {
                  return (
                    <tr>
                      {item.map((x) => {
                        return <td key={x+i}>{x}</td>;
                      })}

                      <td>{challenge.output[i]}</td>
                    </tr>
                  );
                })}
            </table>
            <div className="challenge-bottun">
            <h1 onClick={gosolution} className="go-comment">الحلول</h1>
            <h1 onClick={gocomment} className="go-comment">التعليقات</h1>
            
            </div>
          </div>
          <div className="challenge-slide">
            <div className="chall-slide-header">
             
              <h1>javascript</h1>
              <div className="chall-level">
                <h1> المستوى:</h1>
                <h1>{challenge.level}</h1>
              </div>
              <div className="chall-level">
                <h1> النقاط:</h1>
                <h1>{challenge.point}</h1>
              </div>
            </div>
            <div className="editor">
              <AceEditor
                placeholder=""
                mode="javascript"
                theme="monokai"
                name="blah2"
                editorProps={{ $blockScrolling: true }}
                // onLoad={(v) => console.log(v)}
                onChange={onChange}
                fontSize={18}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                width="100%"
                value={challenge.defValue}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
              />
     
            </div>
            <button
                onClick={(e) => {
                  goTest(e);
                }}
                className="run">
                Run
              </button>
          </div>
          <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="title">حاول مرة اخرى</ModalHeader>
          <ModalBody>
              {message}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              إغلاق
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
      }
    </>
  );
}

export default ChallengeId;