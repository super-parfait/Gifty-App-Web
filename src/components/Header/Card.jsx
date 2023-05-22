import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import product from '../../assets/data/data'; 
import CartItems from "../headerLog/CartItems";

const Card = () => {

    const [ cardOpen, setCardOpen ] = useState(false)
    const closeCard = () => {
        setCardOpen(null)
    }

    return (
        <>
            <div className="card" onClick={() => setCardOpen(!cardOpen)}>
                <BiShoppingBag className="cardIcon" />
                <span className="flexCenter text-red-500">2</span>
            </div>
            <div className={cardOpen ? "overlay" : "nonovelay" }></div>

            <div className={cardOpen ? "cartItem" : "cardhide"}>
                <div className="title flex">
                    <h2>Mon Panier</h2>
                    <button onClick={closeCard}>
                        <AiOutlineClose className="icon" />
                    </button>
                </div>
                

                {product.map((item) => (
                    <CartItems 
                        id={item.id} 
                        cover={item.cover}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        totalPrice={item.totalPrice}
                    />
                ))}
                

                <div className="checkOut">
                    <button>
                        <span>Montant à Régler</span>
                        <label htmlFor=''>50.000 Fcfa</label>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card