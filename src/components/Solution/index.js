import React, { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Header from "../Header";
import { Avatar,Input} from "@chakra-ui/react";
import "./style.css";

function Solution() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [solution, setSolution] = useState([]);

  const state = useSelector((state) => {
    // console.log("state", state);
    return state;
  });
  const getSoulByChall = async () => {
    console.log("state.signIn.level", state.signIn.level);
    const solve = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/solution/${id}`,
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    console.log("id",id);
    console.log("solve", solve.data);
    setSolution(solve.data);
  };

//   const gosolution = () => {
//     navigate(`/solution/${challenge._id}`);
//   };

//   const gocomment = () => {
//     navigate(`/comment/${challenge._id}`);
//   };
  useEffect(() => {
    getSoulByChall();
  }, []);
  return (
    <>
      <Header />
      <div className="comment-container">
      {(solution&&solution.length)&&
            solution.map(item=>{
                return(
                <div key={item._id}>
                    <div className='comment-infoUser'>
                    <Avatar
                    name="Dan Abrahmov"
                    src={item.image}
                    className="line"
                  />
                  <div>
                    <h2>{item.username}</h2>
                    <h6>{item.date.slice(0,10)}</h6>
                    </div>
                
                    </div>
                    <h1>{item.solve}</h1>
                </div>
            )})

            }
          
          </div>
    </>
  );
}

export default Solution;
