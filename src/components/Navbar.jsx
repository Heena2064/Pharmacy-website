import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
     <header className="navbar" > 

     <div className='logo-container'>
      <img src={Logo} alt="" className="logo-image" data-aos="fade-down"/>
       <span className="logo-text" >Shiv Medicos</span>

     </div>
     
        
       
     

        {/*navigation links*/}
    <nav className="nav-links" data-aos="fade-down">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#categories">Categories</a>
        <a href="#prescription">Prescription</a>
        <a href="#contact">Contact</a>
    </nav>

    <a href="tel:+916284641102" className="call-btn" data-aos="fade-down">
        Call Now
      </a>





         </header>

   
  )
}

export default Navbar
