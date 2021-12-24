import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useDisclosure} from "@chakra-ui/react";
import "./style.css";

function ChallSolve({user}) {

  const [solve, setSolve] = useState([]);

  const state = useSelector((state) => {
    // console.log("state", state);
    return state;
  });

  const getSoulByuser = async () => {
    const solveing = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/sol/${user}`,
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    console.log("solveing", solveing.data);
    setSolve( solveing.data);
 
  };
  useEffect(() => {
    getSoulByuser();
  }, []);


  return (
    <>
      {solve &&
        solve.length &&
        solve.map((item) => {
          return (
            <div key={item._id} className="lan">
              <h1>{item.title}</h1>
              <h6>{item.point}</h6>
            </div>
          );
        })}
    
    </>
  );
}

export default ChallSolve;