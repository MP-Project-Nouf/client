import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Header from "../Header";
import AceEditor from "react-ace";
import "./style.css";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function Challenge() {
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState([]);

  const state = useSelector((state) => {
    // console.log("state", state);
    return state;
  });
  const getChallbylevel = async () => {
    console.log("state.signIn.level", state.signIn.level);
    const chall = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/challByLevel/${state.signIn.level}`,
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    console.log("chall", chall.data);
    setChallenge(chall.data);
  };

  const gosolution = () => {
    navigate(`/solution/${challenge._id}`);
  };

  const gocomment = () => {
    navigate(`/comment/${challenge._id}`);
  };
  useEffect(() => {
    getChallbylevel();
  }, []);
  return (
    <>
      <Header />
      <div className="challenge-container">
        <AceEditor
          placeholder="Placeholder Text"
          mode="javascript"
          theme="github"
          name="blah2"
        //   onLoad={onLoad}
        //   onChange={onChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={`function= () => {
}`}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
          
        />
        <h1 onClick={gosolution}>الحلول</h1>
        <h1 onClick={gocomment}>التعليقات</h1>
      </div>
    </>
  );
}

export default Challenge;
