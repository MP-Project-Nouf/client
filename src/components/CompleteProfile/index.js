import React, { useState, useEffect } from "react";

function CompleteProfile({user}) {
    const [acou,setAcou]=useState(0);

    const count=()=>{
     let x=0;
     console.log("User",user);
     for(let key in user)
     {   let l=user[key];
         if(user[key]!=undefined&&user[key].length>0&&key!="role"&&key!="_id"&&key!="rand"&&key!="isDel"&&key!="isActive"&&key!="point"&&key!="level"){
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
        <div className="compleated">
        <div>تم إكتمال نسبة<span className="account"> {acou} </span> % من ملفك الشخصي </div>
        <div className="totl-point">
        <h1 className="totl-point-name">مجموع النقاط</h1>
                  <h1>{user.point}</h1>
        </div>
                  
                  </div>
            
        </>
    )
}

export default CompleteProfile
