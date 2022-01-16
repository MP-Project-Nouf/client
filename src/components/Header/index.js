import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
  useColorMode,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";
import {  useDispatch,useSelector } from "react-redux";
import {logout} from "./../../reducer/login"
import logo from "./logohommp.png";

import './style.css';
function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const dispatch = useDispatch();
  const state = useSelector((state) => {
   
    return state;
  });
  const navigate = useNavigate();

   const goProfile=()=>{
    navigate(`/`);
    navigate(`/profile/${state.signIn.userId}`);
   }
   const out=()=>{
    dispatch(logout({ role: "", token: "",userId:"",useName:"",image:"" ,point:0,level:1}));
    navigate(`/`);
   }
   const gosignin=()=>{
    navigate(`/signin`);
   }
   const goregister=()=>{
    navigate(`/register`);
   }

    
  return (
      
    <div className="header">
        <div className="header-right">
        <img src={logo} alt="logo" className=" logo"/>  
            
      <Link to="/" className="header-item">الرئيسية</Link>
      <Link to="/leaderbord" className="header-item" >المتصدرون</Link>
      {state.signIn.role==="admin"&&
      <>
      <Link to="/challenges" className="header-item">التحديات</Link>
      <Link to="/Users" className="header-item">المستخدمين</Link>
      </>
      }
      
      {state.signIn.token ? 
        <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}   className="profile" >
          <><span>مرحبا</span>{" "}<span>{state.signIn.userName}</span></>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={goProfile}>الملف الشخصي</MenuItem>
          <MenuItem onClick={out}>تسجيل خروج</MenuItem>
        
        </MenuList>
        
      </Menu> : 
      <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}className="profile" >
        الحساب
      </MenuButton>
      <MenuList>
        <MenuItem onClick={gosignin}> تسجيل دخول</MenuItem>
        <MenuItem onClick={goregister}> إنشاء حساب</MenuItem>
      
      </MenuList>
      
    </Menu>}
   
  
 
   
      <Button onClick={toggleColorMode} className="profile">
        تبديل {colorMode === 'light' ? 'ليلي' : 'نهاري'}
      </Button>
 

    
      
      </div>
    </div>
    
  );
}

export default Header;
