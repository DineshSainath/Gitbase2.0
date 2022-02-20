import React from "react";
import './Header.css';
import {SiGithub} from 'react-icons/si';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


function Header(props) {

    return (
        <div className="HeaderDiv">
        
    <header className="Header">
    <SiGithub className="gitLogo" size={70}/>
     <p className="heading">Gitbase </p>
     </header>
     <span className="vertical"></span>

    <div className="searchBox" onMouseOver={props.mouse}>
    <form className='search'>
    <input type="search" className="input" placeholder="Search by user " onChange={props.change}/>
    <FontAwesomeIcon className='mGlass' icon={faSearch} />
    </form>
    </div>

    <i className="fas fa-search"></i>

    <span className="vertical2"></span>
        
    </div>);

}


export default Header;