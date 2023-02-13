import React from 'react';


//Components
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Sochial from './components/Sochial/Sochial';
import About from './components/About/About';
import ProtfoiLio from './components/ProtfoiLio/ProtfoiLio';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Home/>
      <About/>
      <ProtfoiLio/>
      <Skills/>
      <Contact/>
      <Sochial/>
    </div>
  );
};

export default App;