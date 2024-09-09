import React from 'react'
import  styles from './Navbar.module.css'
import { Link, animateScroll as scroll } from 'react-scroll';
import { IoMdMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { useState } from 'react';
import Pdf from '../ContactMeComponent/Sreenidhi D Frontend ReactJS Developer (1).pdf';


function Navbar() {
  const [togglemenu, setTogglemneu] = useState(false)
  const handleToggle = () => {
      setTogglemneu(!togglemenu)
  }

  
  return (
    <div className={styles.NavbarContainer}>
      <div className={styles.NavbarPart}>
            <div className={styles.Title}>
                  <p onClick={() => scroll.scrollToTop()}>SREENIDHI D</p>
            </div>
            <div className={styles.NavbarContent}>
                <p>
                    <Link to="about" smooth={true} duration={1000}>About</Link>
       
               </p>
                <p>
                    <Link to="skills" smooth={true} duration={1000}>Skills</Link> 
                </p>
                <p>
                    <Link to="mywork" smooth={true} duration={1000}>My Project</Link>   
                </p>
                <p>
          
                    <Link to="contactme" smooth={true} duration={1000}>Contact me</Link>  
                </p>
               
                <IoMdMenu className={styles.Menuicon} onClick={handleToggle} size='40'/>
          </div>
      </div>
      <div className= {styles.MenuBarContent} style={togglemenu?{transform:"translateY(0)"}:{transform:"translateY(-100%)"}} >

          <MdCancel className={styles.Cancelicon} size='40' onClick={handleToggle}/>
          <p>
              <Link to="about" smooth={true} duration={1000}>About</Link>
          </p>
          <p>
              <Link to="skills" smooth={true} duration={1000}>Skills</Link> 
          </p>
          <p>
              <Link to="mywork" smooth={true} duration={1000}>My Project</Link>   
          </p>
          <p>
              <Link to="contactme" smooth={true} duration={1000}>Contact me</Link>  
          </p>    
          <p>
          <a  style={{textDecoration:"none",color:"inherit"}} href={Pdf} download="../assets/Sreenidhi D Frontend ReactJS Developer.pdf">Download Resume</a>
            </p>   
      </div>
    </div>
  )
}

export default Navbar
