import React from 'react'


const categoriesData=[
   {
    title: "Prescription Medicines",
    icon: "💊",
    desc: "Medicines dispensed only against a valid prescription."
   },
   {
    title: "OTC Medicines",
    icon: "🩹",
    desc: "Common medicines available without prescription."
   },
   {
    title: "Baby Care",
    icon: "👶",
    desc: "Baby food, diapers, and healthcare essentials."
   },
   {
    title: "Diabetes Care",
    icon: "🩸",
    desc: "Diabetes medicines, strips, and monitoring devices."
   },
   {
    title: "Vitamins & Supplements",
    icon: "🍊",
    desc: "Daily nutrition and health supplements."
   },
   {
    title: "Medical Devices",
    icon: "🩺",
    desc: "BP monitors, thermometers, and other devices."
   }
]

const Categories = () => {
  return (
    <section id='categories' className='categories section' data-aos='zoom-in'>
        <h2> Our Categories</h2>
        <div className='categories-grid'>
            {categoriesData.map((item, index) => (
                <div className='category-card' key={index}>
                    <span className='category-icon'> {item.icon} </span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>

                </div> 
            
            ))}

        </div>

    </section>
    
  )
}

export default Categories
