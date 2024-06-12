import React from 'react'
import "./officeSpaceStyle.css";
import spac from "assets/office.jpg";
const OfficeSpace = () => {
  return (
    <main className='office_container'>
        <section className='the_photo'>
        <div className='main_office'>
        <img src={spac} alt="info-image" className='spac'/>
        </div>
        </section>
        <section className='office_text'>
         <div className='main_office_text'>
          <h2>Need an office space?</h2>
          <p>Seeking office space in Lagos? Look no further! Our accommodations offer tailored solutions to meet your workspace needs, ensuring productivity and comfort in the heart of Lagos</p>
         </div>
        </section>
    </main>
  )
}

export default OfficeSpace;