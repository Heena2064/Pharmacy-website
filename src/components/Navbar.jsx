import React, { useState } from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
     <header className="navbar" > 

     <div className='logo-container'>
      <img src={Logo} alt="" className="logo-image" data-aos="fade-down"/>
       <span className="logo-text" >Shiv Medicos</span>

     </div>
     
     <button
      className={`menu-toggle ${open ? 'open' : ''}`}
      aria-label="Toggle navigation"
      aria-expanded={open}
      onClick={() => setOpen(prev => !prev)}
     >
       <span />
       <span />
       <span />
     </button>
     
        
       
     

        {/*navigation links*/}
    <nav className={`nav-links ${open ? 'open' : ''}`} data-aos="fade-down">
      <a href="#home" onClick={() => setOpen(false)}>Home</a>
      <a href="#about" onClick={() => setOpen(false)}>About</a>
      <a href="#categories" onClick={() => setOpen(false)}>Categories</a>
      <a href="#prescription" onClick={() => setOpen(false)}>Prescription</a>
      <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      <a href="tel:+916284641102" className="call-btn-mobile" onClick={() => setOpen(false)}>Call Now</a>
    </nav>

    <a href="tel:+916284641102" className="call-btn" data-aos="fade-down">
        Call Now
      </a>





         </header>

   
  )
}

export default Navbar
