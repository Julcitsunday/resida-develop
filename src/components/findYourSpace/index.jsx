import React from 'react';
import "./findYourSpace.css";
import space from "assets/fyp_bg_ifyp_bg_image.png";
import Button from 'shared/button';
const FindYourSpace = () => {
  return (
    <div className='fyp_container '>
        <section className='fyp_image_section'>
        <img src={space} alt="info" className="image" />
        </section>
        <section fyp_text_section>
          <div className='text_container'>
          <div>
                <p className='paragraph'>Your dream home is only a few clicks away</p>
            </div>
            <div>
            <span className='span'>- Find your space now!</span>
            </div>
          </div>
           
            <div className='fyp_button'>
            <Button style={{
                borderRadius: "10px",
                backgroundColor: "white",
                color:"#1b2056",
                padding:"12px 34px",
                width: "33",
            }} btnName={"Download app"}/>
            </div>
           
        </section>
    </div>
  )
}

export default FindYourSpace;