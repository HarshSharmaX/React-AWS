import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component'
import './HAdvertise.css'

const HAdvertise =() =>{
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
                
                <div className="hAdvertiseImgSec">
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/09/Dandiya1.png"></img>
                </div>
                <div className="hAdvertiseImgSec">
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/09/Dandiya2.png"></img>
                </div>
                <div className="hAdvertiseImgSec">
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/09/Dandiya3.png"></img>
                </div>
                <div className="hAdvertiseImgSec">
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/09/Dandiya4.png"></img>
                </div>
                <div className="hAdvertiseImgSec">
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/09/Dandiya5.png"></img>
                </div>
                <div className="hAdvertiseImgSec">
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/09/Dandiya6.png"></img>
                </div>
                <div className="hAdvertiseImgSec">
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/09/Dandiya7.png"></img>
                </div>
                <div className="hAdvertiseImgSec">
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/09/Dandiya8.png"></img>
                </div>
                
                   
            </Slider>
            </div>
        </div>
        </>
    )
}

export default HAdvertise;