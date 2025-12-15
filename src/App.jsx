import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";



import React from 'react'
import Navbar from './components/navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/about.jsx'
import Categories from './components/Categories.jsx'
import Prescription from './components/Prescription.jsx' 
import Contact from './components/Contact.jsx'   
import Footer from './components/Footer.jsx'
import CustomCursor from "./components/CustomCursor.jsx";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);


  
  
  
  
  
  return (
  
        <>
        <Navbar />
        <Hero />
        <About />
        <Categories />
        <Prescription/>
        <Contact/>
        <Footer/>
        <CustomCursor />
        
       
       
       
       
       </>
      
      


    
  )
}

export default App
