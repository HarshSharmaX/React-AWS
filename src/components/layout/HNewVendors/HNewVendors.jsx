import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component'
import './HNewVendors.css'

const HNewVendors =({image}) =>{

  

    const NVsettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5.9,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 4.3,
                swipeToSlide: true,
              }
            }
        ]
      };
      

    return(
        <>
        <div className="hNewVendorsSec">
            <h1 className="hNewVendorsHeading">New Vendors</h1>
            <div className="hNewVendorsCardSec">
            <Slider {...NVsettings}>
            {image?.reverse().map((val)=>{
             return(
                <div className="hNewVendorsImgSec">
                <img className="hNewVendorsImg" src={val.images[1].url}></img>
                </div>
                );
            })}
            <div className='NRhBestOffer'>
                </div>
            </Slider>
            </div>
        </div>
        </>
    )
}

export default HNewVendors;