import React from "react";
import SlideCard from '../../../components/Product/Product'
// import  product from '../../../assets/data/data'  

const Accueil = () => {
   
    return (
        <>
            <section className='homeSlide contentWidth'>
                <div className="container">
                    <SlideCard /> 
                </div>
            </section>
        </>
    )
}

export default Accueil