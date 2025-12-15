import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='contact section' data-aos='fade-up'>
        <h2>Contact Us</h2>

        <div className='contact-container'>
            <div className="contact-info">
          <p><strong>📞 Phone:</strong> <a href="tel:+916284641102">+91 6284641102
            </a></p>
          <p><strong>💬 WhatsApp:</strong> <a href="https://wa.me/916284641102" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
          <p><strong>📍 Address:</strong> Mamoon,Pathankot, India</p>
          <p><strong>🕘 Timings:</strong> Mon – Sat: 9:00 AM – 9:00 PM</p>
        </div>

        
            <div className="contact-map">
          <iframe
            title="Pharmacy Location"
            src="https://www.google.com/maps?q=Mamoon+Pathankot+India&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        

        </div>

    </section>
  )
}

export default Contact
