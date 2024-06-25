import React from 'react'
import Contactme from './ContactMeComponent/Contactme';
import Mywork from './Mywork/Mywork';
import Navbar from './NavbarComponent/Navbar';
import Skills from './SkillsComponent/Skills';
import { Element } from 'react-scroll';
import About from './AboutComponent/About';

function Mainpage() {
  return (
    <div>
        <Navbar/> 
         <Element name="about" className="element" >
        <About/>
      </Element>
         <Element name="skills" className="element" > 
       <Skills/>
      </Element>
          <Element name="mywork" className="element" > 
      <Mywork/>
     </Element>
          <Element name="contactme" className="element" >
     <Contactme/>
      </Element>
    </div>
  )
}

export default Mainpage
