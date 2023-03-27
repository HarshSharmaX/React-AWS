import React, {useEffect, useState, useRef} from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { getTopBanners} from "../../../Service/Actions/HomeActions";
import {useSelector, useDispatch} from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component'
import './TopBanner.css'


const HAdvertise =({banner}) =>{

    
    const BOsettings = {
        className: "center",
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: "16%",
        autoplay: true,
        autoplayspeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                className: "center",
                dots: false,
                infinite: true,
                centerMode: true,
                centerPadding: "0px",
                autoplay: false,
                autoplayspeed: 2000,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      };

    return(
        <>
        <div className="hAdvertiseSec">
            <div className="hAdvertiseCardSec">
            <Slider {...BOsettings}>
            { banner?.map((val) => {
                
                return(
                    val.festivedealsbanner.map((val) => {
                        return(
                        <Link to ={`/FestiveSeason?cat=${val.season}`}>
                            <div className="hAdvertiseImgSec">
                                <img className="hAdvertiseImg" src={val.offerurl}></img>
                            </div>
                        </Link>
                        )
                    })
                    
                )
            })}
            </Slider>
            </div>
        </div>
        </>
    )
}

export default HAdvertise;
