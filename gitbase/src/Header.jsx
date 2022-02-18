import React from "react";
import './Header.css';
import {SiGithub} from 'react-icons/si';

function Header() {

    return (
        <div className="HeaderDiv">
        
    <header className="Header">
    <SiGithub className="gitLogo" size={50}/>
     <p className="heading">G I T B A S E </p>
     </header>
        
    </div>);

}


export default Header;