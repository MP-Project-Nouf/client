const instialState ={
    role:"",
    token:"",
    userId:"",
    userName:"",
    image:"",
    point:0,
    level:1
};
const signIn=(state=instialState,action)=>{
    const { type,payload}=action;
    switch (type){
        case "LOGIN":
            const {role,token,userId,userName,image,point,level}=payload;
            localStorage.setItem("Token",token);
            localStorage.setItem("Role",role);
            localStorage.setItem("UserId",userId);
            localStorage.setItem("UserName",userName);
            localStorage.setItem("Image",image);
            localStorage.setItem("Point",point);
            localStorage.setItem("Level",level);
            return{role,token,userId,userName,image,point,level};
        case "LOGOUT":
            localStorage.clear();
            return{role:"",token:"",userId:"",userName:"",image:"",point:0,level:1};
        case "UPDATE":
            const {pointt,levell}=payload;
            const tokenStorag=localStorage.getItem("Token");
            const roleStorag=localStorage.getItem("Role");
            const userIdStorag=localStorage.getItem("UserId");
            const userNameStorag=localStorage.getItem("UserName");
            const imageStorag=localStorage.getItem("Image");
            localStorage.setItem("Point",pointt);
            localStorage.setItem("Level",levell);
            return{token:tokenStorag,role:roleStorag,userId:userIdStorag,userName:userNameStorag,image:imageStorag,point:pointt,level:levell};
        default:
            const tokenStorage=localStorage.getItem("Token");
            const roleStorage=localStorage.getItem("Role");
            const userIdStorage=localStorage.getItem("UserId");
            const userNameStorage=localStorage.getItem("UserName");
            const imageStorage=localStorage.getItem("Image");
            const pointStorage=localStorage.getItem("Point");
            const levelStorage=localStorage.getItem("Level");
            if(tokenStorage){
                return {token:tokenStorage,role:roleStorage,userId:userIdStorage,userName:userNameStorage,image:imageStorage,point:pointStorage,level:levelStorage}
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

export const update=(data)=>{
    return {
        type:"UPDATE",
        payload:data
    };
};