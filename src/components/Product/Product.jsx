import React from 'react';
import'./product.css';
import ProductCard from './ProductCart'
import  product from '../../assets/data/data' 

// La liste des produits
 const Product = (props) => {
    const {data} = props

    console.log(data)
    return (
        <>
            <section className='product'>
                <div className="container grid3">
                    {data.map(item => (
                        <ProductCard item={item}/>
                    ))}
                </div>
            </section>
        </>
    )
} 

export default Product