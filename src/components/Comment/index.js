import React,{useState,useEffect} from 'react'
import Header from '../Header'
import axios from 'axios'
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './style.css'

function Comment() {
    const { id } = useParams();
    const [comment,setComment]=useState([]);
    const state = useSelector((state) => {
        // console.log("state", state);
        return state;
      });

    const getcommentByChall = async () => {
        console.log("state.signIn.level", state.signIn.level);
        const comm = await axios.get(
          `${process.env.REACT_APP_BASIC_URL}/comment/${id}`,
          { headers: { Authorization: `Bearer ${state.signIn.token}` } }
        );
        console.log("comm", comm.data);
        setComment(comm.data);
      };

      useEffect(() => {
        getcommentByChall();
      }, []);

    return (
        <>
        <Header />
        <div>
            {(comment&&comment.length)&&
            comment.map(item=>{
                return(
                <div>
                    <h1>{item.username}</h1>
                </div>
            )})

            }
            <h1>comment</h1>
            
        </div>
        </>
    )
}

export default Comment
