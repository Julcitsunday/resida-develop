import React from 'react'
// import FeaturedCard from 'shared/featuredCard';
// import lekki from "assets/lekki.png";
// import agege from "assets/agege.png";
// import gbagada from "assets/gbagada.jpg";
// import obalende from "assets/obalende.jpg";
// import yaba from "assets/yaba.jpg";

import places from "assets/5.png";
const FindHomes = () => {
  return (
    <main>
        <section className='find_text'>
         <div>
            <h2>Find homes in popular neighbourhooods</h2>
            <p>Apartments in Lekki, Obalende, Agege & Yaba </p>
         </div>
        </section>

        <section className='all_card'>
        <img src={places} alt="info-image" className='image_5'/>
            {/* <FeaturedCard 
            image={lekki}
            />
            <FeaturedCard 
            image={agege}
            />
            <FeaturedCard
             image={gbagada}
            />
            <FeaturedCard
             image={obalende}
            />
            <FeaturedCard
             image={yaba}
            /> */}
        </section>
    </main>
  )
}

export default FindHomes;