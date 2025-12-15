import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'> 

            {/*left*/}


        <div className='footer-brand' data-aos='fade-up'>
            <h3>ABC Pharmacy</h3>
            <p>Your trusted neighborhood pharmacy</p>
            </div>  

           {/*middle*/}

           <div className='footer-links' data-aos='fade-up'>
            <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#categories">Categories</a>
          <a href="#prescription">Prescription</a>
          <a href="#contact">Contact</a>
            </div> 

            {/*right*/}
            <div className='footer-disclaimer' data-aos='fade-up'>
                <h4>Disclaimer</h4>
          <p>
            Medicines will be dispensed only against a valid prescription.
            This website is for informational purposes only.
          </p>
         </div>  
        </div>

        <div className='footer-bottom' data-aos='fade-up'>
            <p>© {new Date().getFullYear()} ABC Pharmacy. All rights reserved.</p>

        </div>
    </footer>
  )
}

export default Footer
