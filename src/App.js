import React, {useState} from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dropdown from './components/Dropdown';
import {SliderData, SliderDataTwo} from './data/SliderData';
import InfoSection from './components/InfoSection';

function App() {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
   setIsOpen(!isOpen)
}

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection />
    </>
  );
}

export default App;
