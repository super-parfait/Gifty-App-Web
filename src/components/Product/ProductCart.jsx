import React from 'react'
import { Link } from 'react-router-dom';
// import product from '../../assets/data/data'; 
import { AiOutlinePlusCircle } from "react-icons/ai"


// Le cadre pour les produits
const ProductCard = (props) =>{

    const {item} = props

    console.log(item)
    return (

        <>
            <div className='box boxItems' id='product'>
                <div className='img'>
                    <Link>
                        <img src={process.env.PUBLIC_URL + `${item.image}`} alt={item.title}/>
                        {/* <img src={process.env.PUBLIC_URL+ `assets/img/pexels-karolina-grabowska-4397835.jpg`} alt={item.title} /> */}
                    </Link>
                </div> 
                <div className='details'>
                    <h3>{item.price} FCFA</h3>
                    <p>{item.name}</p>
                    <button>
                        <AiOutlinePlusCircle />
                    </button>
                </div>
            </div>
            
        </>
    )
}


export default ProductCard;