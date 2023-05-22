import React from "react";
import Product from '../../../components/Product/Product'
import  product from '../../../assets/data/data'  

const Accueil = () => {
   
    return (
        <>
            <Product data={product} /> 
        </>
    )
}

export default Accueil