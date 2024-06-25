import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Mainpage from './Mainpage';
import Resume from './Resume/Resume';

function App() {
  return (
    <div className="App">
          
        <Router>
   <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/resume" element={<Resume/>} />
   </Routes>


        </Router>
      
          
        
    </div>
  );
}

export default App;
