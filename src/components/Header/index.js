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

import './style.css';
function Header() {

   

    
  return (
      
    <div className="header">
        <div className="header-right">
            
      <Link to="/" className="header-item">الرئيسية</Link>
      <Link to="/leaderbord" className="header-item" >المتصدرون</Link>
      <Link to="/challenges" className="header-item">التحديات</Link>
      <Link to="/Users" className="header-item">المستخدمين</Link>
      <Link to="/User" className="header-item" >مرحبا</Link>
      <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}className="profile">
    مرحبا نوف
  </MenuButton>
  <MenuList>
    <MenuItem>الملف الشخصي</MenuItem>
    <MenuItem>تسجيل خروج</MenuItem>
  
  </MenuList>
</Menu>
      
      </div>
    </div>
    
  );
}

export default Header;
