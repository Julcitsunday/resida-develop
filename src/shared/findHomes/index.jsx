import React from 'react'
import "./findHomesstyle.css";
import lekki from "assets/lekki.png";
import their from "assets/ao.jpg";
import those from "assets/gy.jpg";


const FindHomes = () => {
  return (
    <main className='container_findhome'>
        <section className='find_text'>
         <div className='finding_text'>
            <h2>Find homes in popular neighbourhooods</h2>
            <p>Apartments in Lekki, Obalende, Agege & Yaba </p>
         </div>
        </section>

        <section className='all_card'>
            <div className='my_place'>
            <img src={lekki} alt="info-image" className='in_1'/>
            <img src={their} alt="info-image" className='in_their'/>
            <img src={those} alt="info-image" className='in_those'/>
           </div>
        </section>
    </main>
  )
}

export default FindHomes;