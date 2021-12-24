import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useDisclosure} from "@chakra-ui/react";
import "./style.css";

function UserChall({user}) {

  const [chall, setChall] = useState([]);

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
    
    </>
  );
}

export default UserChall;