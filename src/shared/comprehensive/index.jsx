import React from 'react'
import "./comprehensiveStyles.css";
import guide from "assets/guide_map.jpg"
import Button from 'shared/button';
export const Comprehensive = () => {
  return (
    <div className='comp_container'>
        <div className='map'>
        <img src={guide} alt="info" className="image_guide" />
        </div>
        <div className='text_area'>
            <div className='main_text'>
             <h2 className='title'>Comprehensive</h2>
             <h3 className='subtitle'>Neighborhood Guides</h3>
             <p className='body'>The 'Neighborhood Guides' in Resida are like your friendly local experts, giving you the inside scoop on the vibe, hotspots, and quirks of each area so you can find your perfect match effortlessly! 🏡✨{" "} 
             </p>
             <div>
          <Button style={{
            backgroundColor:'#DBA94D',
            color:'#1F4B43',
            padding: "10px 12px",
            width: "256px",
            height: "52px",
            }}
            btnName={"Download our app"}
            rightIcon={<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M0.961428 6.3975H12.9721L8.37301 2.01825C8.13219 1.78893 8.12285 1.40795 8.35223 1.1672C8.58131 0.926748 8.96241 0.917118 9.20353 1.14643L14.4559 6.14802C14.6831 6.37552 14.8087 6.67766 14.8087 6.99937C14.8087 7.32077 14.6831 7.62321 14.4453 7.86065L9.20323 12.852C9.08674 12.963 8.93743 13.0181 8.78812 13.0181C8.62918 13.0181 8.47023 12.9555 8.35193 12.8313C8.12255 12.5905 8.13189 12.2098 8.37271 11.9805L12.991 7.60125H0.961428C0.629095 7.60125 0.359375 7.33161 0.359375 6.99937C0.359375 6.66714 0.629095 6.3975 0.961428 6.3975Z" fill="#1F4B43"/>
            </svg>
             }
         />
            </div>
            </div>

           
        </div>
    </div>
  )
}
 export default Comprehensive;
