// import React, { useState } from "react";
import React from "react";
// import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BiPlus } from 'react-icons/bi';
import { HiOutlineMinusSm } from 'react-icons/hi';

const CartItems = ({id, cover, name, price, quantity, totalPrice  }) => {


    return (
        <>
            <div className="cardList" key={id}>
                <div className="cartContent">
                    <div className="img">
                        <img src={cover} alt="" />
                        <button className="remove flexCenter">
                            <AiOutlineClose />
                        </button>
                    </div>
                    <div className="details">
                        <p>{name}</p>
                        <label htmlFor="">Prix Unitaire: {price} Fcfa</label>

                        <div className="price">
                            <div className="qty flexCenter">
                                <button className="minus">
                                    <BiPlus />
                                </button>
                                
                                <button className="num">
                                    1{quantity}
                                </button>
                                
                                <button className="minus">
                                    <HiOutlineMinusSm />
                                </button>
                            </div>
                            <div className="priceTitle">{totalPrice} Fcfa</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems