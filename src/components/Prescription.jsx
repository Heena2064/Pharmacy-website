import React from 'react'

const Prescription = () => {
  return (
    <section className='prescription section' id='prescription'> 
    <div className='prescription-container'>
        <h2>Upload Prescription</h2>
        <p>
          Have a doctor’s prescription? Send it to us and we’ll prepare your
          medicines for quick pickup.  
        </p>

        <div className='prescription-actions'>
            <a href='https://wa.me/91XXXXXXXXXX'
            target='_blank'
            rel='noopener noreferrer'
            className='btn primary'
            >
                Send on Whatsapp
            </a>

        

        </div>

        <p className="prescription-disclaimer">
          ⚠️ Medicines will be dispensed only against a valid prescription as
          per government regulations.
        </p>  

    </div>




    </section>
  )
}

export default Prescription
