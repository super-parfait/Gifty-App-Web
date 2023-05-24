import React from 'react';
import'./product.css';
// import ProductCard from './ProductCart'
import  product from '../../assets/data/data'
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as jQuery from 'jquery';

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SlideCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {product.map((slide, i) => {
            const detail = slide.produits

            // console.log(detail)
          return (
            <>
                <div className='box d_flex top' key={i}>
                    <div className="container-fluid ">
                        <div className="row justify-content-center">
                            <div className='row align-items-center col-8 col-sm-3	col-md-6	col-lg-6	col-xl-6 left'>
                                <div className="d-flex flex-col">
                                    <img src={slide.image} alt={slide.name} />
                                </div>
                                
                            </div>

                            <div className='row align-items-center col-12 col-sm-3	col-md-6	col-lg-6	col-xl-6 right'>
                                <div className="d-flex flex-col">
                                    <div className="detail">
                                        {/* <div className="container"> */}
                                            {detail.map((item, i)=>{
                                                return (
                                                    <div className="container" key={i}>
                                                        <div className="row">
                                                            <div className="col-4">
                                                                <img src={item.image} alt={item.name} />
                                                            </div>
                                                            <div className="col-8">
                                                                <p className='description'> {item.desc} </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        {/* </div> */}
                                        
                                        
                                        {/* <div className="flex-wrap align-content-around">
                                            <div className="p-3">
                                                <h2>{slide.name}</h2>
                                                <p>{slide.desc}</p>
                                            </div>
                                            <div className="p-3">
                                                <button className='btn-primary'>Choisir ce cadeau</button>
                                            </div>
                                            <div className="container p-3 detail">

                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                
                                
                            </div>
                            
                        </div>
                        <div className="row justify-content-center">
                            <div className="col- choice">
                                <button className='btn-primary'>Ajouter au panier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
          )
        })}
      </Slider>
            
    </>
  )
}

export default SlideCard
