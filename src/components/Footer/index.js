import React from 'react'
import {FaTwitter} from 'react-icons/fa';
import {ImYoutube2} from 'react-icons/im';
import {MdOutgoingMail} from 'react-icons/md';
import {BsSnapchat} from 'react-icons/bs'
import logo from "./logohommp.png";
import './style.css'


function Footer() {
    return (
        <div className="footer-info">
                <div className="footer-logo">
                <img className="footer-logo" src={logo} alt="logo" />
                </div>
                <div className="accounts">
                    <div className="title-account">
                         <h1>Our accounts</h1>
                    </div>
                    <div className="logo-account">
                        <FaTwitter className="acc tw" />
                        <ImYoutube2 className="acc yo"/>
                        <MdOutgoingMail className="acc ma"/>
                        <BsSnapchat className="acc sn"/>
                        
                    </div>
                </div>
                
            </div>
      
    )
}

export default Footer
