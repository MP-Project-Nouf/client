import React, { useState, useEffect } from "react";

function CompleteProfile({user}) {
    const [acou,setAcou]=useState(0);

    const count=()=>{
     let x=0;
     console.log("User",user);
     for(let key in user)
     {   let l=user[key];
         if(user[key]!=undefined&&!(user[key].length)&&key!="role"&&key!="_id"&&key!="rand"&&key!="isDel"&&key!="isActive"&&key!="point"&&key!="level"){
             x+=5;

         }
     }
     setAcou(x)
    }
    useEffect(() => {
        count();
        
      }, []);
    return (
        <>
        <div>تم إكتمال نسبة<span> {acou} </span> % من ملفك الشخصي </div>
                  <h1>مجموع النقاط</h1>
                  <h1>{user.point}</h1>
            
        </>
    )
}

export default CompleteProfile
