import './App.css';
import React from 'react'
import About from './AboutComponent/About';
import Skills from './SkillsComponent/Skills';
import Mywork from './Mywork/Mywork';
import Contactme from './ContactMeComponent/Contactme';
import { Element } from 'react-scroll';
import Navbar from './NavbarComponent/Navbar';

function App() {
  return (
    <div className="App">
          
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
  );
}

export default App;
