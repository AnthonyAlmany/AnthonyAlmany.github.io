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
          <Link to="/">  <button className="button-link"><Logo className="logo" /></button></Link>
            </Scroll>
          </div>
          <div className="links-nav">
          <ul className={click ? "nav-options active" : "nav-options"}>

          <Scroll to="about" spy={true} smooth={true}>
          <Link to="/">
            <li className="option" onClick={closeMobileMenu}>
              <button className="button-link">About</button>
            </li>
            </Link>
            </Scroll>
            <Scroll to="languages" spy={true} smooth={true}>
          <Link to="/">
            <li className="option" onClick={closeMobileMenu}>
              <button className="button-link">Languages</button>
            </li>
            </Link>
            </Scroll>
            <Scroll to="projects" spy={true} smooth={true}>
          <Link to="/">
            <li className="option" onClick={closeMobileMenu}>
              <button className="button-link">Projects</button>
            </li>
            </Link>
            </Scroll>
          <Link to="/api/sendmail">
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

