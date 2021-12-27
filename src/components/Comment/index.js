import React,{useState,useEffect} from 'react'
import Header from '../Header'
import axios from 'axios'
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar,Input} from "@chakra-ui/react";
import { PlusSquareIcon, CloseIcon } from "@chakra-ui/icons";
import './style.css'

function Comment() {
    const { id } = useParams();
    const [comment,setComment]=useState([]);
    const [addComment,setAddComment]=useState("")
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
      const delComment = (_id) => {
        axios.delete(`${process.env.REACT_APP_BASIC_URL}/delcomment/${_id}`, {
          headers: { Authorization: `Bearer ${state.signIn.token}` },
        });
        getcommentByChall();
      };
      const Add=(e)=>{
          console.log("call-id",id);
          console.log("addComment",addComment);

        e.preventDefault();
        if(addComment.length>0)
        {
         axios.post(
            `${process.env.REACT_APP_BASIC_URL}/comment`,
            {
                image:state.signIn.image,
                username:state.signIn.userName,
                disc:addComment,
                challenge:id,
            },
            { headers: { Authorization: `Bearer ${state.signIn.token}` } }
          );
          getcommentByChall();
        }

      }

      useEffect(() => {
        getcommentByChall();
      }, []);

    return (
        <>
        <Header />
        <div className='comment-container'>
            <h1>إضافة تعليق</h1>
            <input type="text" placeholder='ادخل تعليقك هنا ...'  onChange={(e)=>{setAddComment(e.target.value)}}/>
            <button onClick={(e)=>{Add(e)}}>إرسال</button>
            {(comment&&comment.length)&&
            comment.map(item=>{
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
                    {(state.signIn.userId===item.user||state.signIn.role==="admin")&&
                <CloseIcon
                onClick={() => {
                    delComment(item._id);
                }}
              />}
                    </div>
                    <h1>{item.disc}</h1>
                </div>
            )})

            }
          
            
        </div>
        </>
    )
}

export default Comment
