import React from "react";
import './Header.css';
import {SiGithub} from 'react-icons/si';

function Header() {

    return (
        <div className="HeaderDiv">
        
    <header className="Header">
    <SiGithub className="gitLogo" size={70}/>
     <p className="heading">Gitbase </p>
     </header>
     <span className="vertical"></span>
        
    </div>);

}


export default Header;