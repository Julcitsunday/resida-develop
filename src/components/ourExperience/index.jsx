import React from 'react'
import "./ourExperienceStyles.css"
import oe_1 from "../../assets/oe_1.jpg"
import oe_2 from "../../assets/oe_2.jpg"
import oe_3 from "../../assets/oe_3.jpg"
const OurExperience = () => {
  return (
    <div className="our_experience_container">
        <div className="box_container ">
          <div className='overflow flex'>
          <div className='box1'>
          <img src={oe_1} alt="info-picture" className="image1" />
        </div>
        <div className='box2'>
        <img src={oe_2} alt="info-picture" className="image2" />
        </div>
        <div className='box3'>
        <img src={oe_3} alt="info-picture" className="image3" />
        </div>
        </div>
          </div>
       
        <div className="text flex">Our Experience guarantees unmatched proficiency and excellence.</div>
    </div>
  )
}

export default OurExperience;