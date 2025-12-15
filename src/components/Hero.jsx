import React from 'react'

const Hero = () => {
  return (
    <section id='home' className='hero' data-aos='fade-up'>
        <div className='hero-content'>
            <h1>Your Trusted Neighbourhood Pharmacy</h1>
            <p> 
                Genuine medicines • Fast service • Affordable prices
            </p>

            <div className='hero-buttons'>
                <a 
                href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20upload%20a%20prescription" 
                target='_blank'
                rel='noopener noreferrer'
                className='btn primary'
                 >
                   Order on Whatsapp
                 </a>

              <a href="tel:+916284641102" className="btn secondary">
            Call Now
          </a>   

            </div>

        </div>

</section>

    




  )
}

export default Hero
