const instialState ={
    role:"",
    token:"",
    userId:"",
    userName:""
};
const signIn=(state=instialState,action)=>{
    const { type,payload}=action;
    switch (type){
        case "LOGIN":
            const {role,token,userId,userName}=payload;
            localStorage.setItem("Token",token);
            localStorage.setItem("Role",role);
            localStorage.setItem("UserId",userId);
            localStorage.setItem("UserName",userName);
            return{role,token,userId,userName};
        case "LOGOUT":
            localStorage.clear();
            return{role:"",token:"",userId:"",userName:""};
        default:
            const tokenStorage=localStorage.getItem("Token");
            const roleStorage=localStorage.getItem("Role");
            const userIdStorage=localStorage.getItem("UserId");
            const userNameStorage=localStorage.getItem("UserName");
            if(tokenStorage){
                return {token:tokenStorage,role:roleStorage,userId:userIdStorage,userName:userNameStorage}
            }else{
                return state;
            }
            
    }
}

export default signIn;


export const login=(data)=>{
    return {
        type:"LOGIN",
        payload:data
    };
};

export const logout=(data)=>{
    return {
        type:"LOGOUT",
        payload:data
    };
};