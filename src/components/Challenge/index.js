import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Header from "../Header";
import AceEditor from "react-ace";
import "./style.css";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import * as ace from "ace-builds/src-noconflict/ace";
ace.config.set("basePath", "/assets/ui/");
ace.config.set("modePath", "");
ace.config.set("themePath", "");

function Challenge() {
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState([]);
  let solution = "";

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

  const goTest = (e) => {
    e.preventDefault();
    // console.log("solution",solution);
    let code = new Function("a", `return ${solution}`);
    const result = code();
    console.log("code", result(...challenge.input[0]));
  };
  function onChange(newValue) {
    // console.log("change", newValue);
    solution = newValue;
  }

  useEffect(() => {
    getChallbylevel();
  }, []);
  return (
    <>
      <Header />
      {challenge && (
        <div className="challenge-container">
          <div className="challenge-slide">
            <h1 className="disc">{challenge.title}</h1>
            <h1 className="disc">{challenge.disc}</h1>

            <table
            className="disc">
              <tr>
              {challenge.input &&
                challenge.input.length &&
                challenge.input.map((item, i) => {
                  return (
                    item.map((x) => {
                        return <th>input</th>;
                      })

                  )})}
                
                <th>output</th>
              </tr>

              {challenge.input &&
                challenge.input.length &&
                challenge.input.map((item, i) => {
                  return (
                    <tr>
                      {item.map((x) => {
                        return <td>{x}</td>;
                      })}

                      <td>{challenge.output[i][0]}</td>
                    </tr>
                  );
                })}
            </table>
            <h1 onClick={gosolution}>الحلول</h1>
            <h1 onClick={gocomment}>التعليقات</h1>
          </div>
          <div className="challenge-slide">
            <div className="chall-slide-header">
              <button
                onClick={(e) => {
                  goTest(e);
                }}
              >
                Run
              </button>
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
          </div>
        </div>
      )}
    </>
  );
}

export default Challenge;
