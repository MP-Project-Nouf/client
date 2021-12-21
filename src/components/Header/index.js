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
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";

import './style.css';
function Header() {
  const navigate = useNavigate();

   const goProfile=()=>{
    navigate(`/user/gehe`);
   }
   const out=()=>{
    navigate(`/`);
   }

    
  return (
      
    <div className="header">
        <div className="header-right">
            
      <Link to="/" className="header-item">الرئيسية</Link>
      <Link to="/leaderbord" className="header-item" >المتصدرون</Link>
      <Link to="/challenges" className="header-item">التحديات</Link>
      <Link to="/Users" className="header-item">المستخدمين</Link>
      
      <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}className="profile" >
    مرحبا نوف
  </MenuButton>
  <MenuList>
    <MenuItem onClick={goProfile}>الملف الشخصي</MenuItem>
    <MenuItem onClick={out}>تسجيل خروج</MenuItem>
  
  </MenuList>
</Menu>
      
      </div>
    </div>
    
  );
}

export default Header;
