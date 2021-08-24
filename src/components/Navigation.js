import React, {useState} from 'react'
import {
    Link
} from "react-router-dom";
import {Link as Scroll} from 'react-scroll'



import { ReactComponent as CloseMenu } from "../style/assets/x.svg";
import { ReactComponent as MenuIcon } from "../style/assets/menu.svg";
import { ReactComponent as Logo } from "../style/assets/logo.svg";


function Navigation() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (

        <div className="header">
       
          <div className="logo-container">
          <Scroll activeClass="home" to="home" spy={true} smooth={true}>
          <button className="button-link"><Logo className="logo" /></button>
            </Scroll>
          </div>
          <div className="links-nav">
          <ul className={click ? "nav-options active" : "nav-options"}>

          <Scroll to="about" spy={true} smooth={true} offset={-40}>
            <li className="option" onClick={closeMobileMenu}>
              <button className="button-link">About</button>
            </li> 
            </Scroll>

          <Scroll to="skills-component" spy={true} smooth={true} offset={-70}>
            <li className="option" onClick={closeMobileMenu}>
              <button className="button-link">Languages</button>
            </li>
            </Scroll>

            <Scroll to="projects-container" spy={true} smooth={true} offset={-70}> 
            <li className="option" onClick={closeMobileMenu}>
              <button className="button-link">Projects</button>
            </li>
            </Scroll>

          <Link to="/Contact">
            <li className="option" onClick={closeMobileMenu}>
              <button className="button-link">Contact</button>
            </li>
            </Link>
  
          </ul>
       
     
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
        </div>
      </div>
     
    )
}

export default Navigation

