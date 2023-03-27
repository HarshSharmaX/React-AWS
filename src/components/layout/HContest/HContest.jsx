import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component'
import './HContest.css'

const HContest =({image}) =>{
    const Csettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
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
        <div className="hContestsSec">
            <h1 className="hContestsHeading">Plan Your Wedding With KUBE</h1>
            <div className="hContestsCardSec">
            <Slider {...Csettings}>
            
            <Link to={`/Weddings?title=Hindu Wedding`}>
                  <div className="hContestsImgSec">
                  <img className="hContestsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/09/Contest-Banner-01-1.jpg"></img>
                  </div>
             </Link>   

             <Link to={`/Weddings?title=Muslim Wedding`}>
                <div className="hContestsImgSec">
                <img className="hContestsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/09/Contest-Banner-02-1.jpg"></img>
                </div>
                </Link>

                <Link to={`/Weddings?title=Sikh Wedding`}>
                <div className="hContestsImgSec">
                <img className="hContestsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/09/Contest-Banner-03-1.jpg"></img>
                </div>
                </Link>

                <Link to={`/Weddings?title=Christian Wedding`}>
                <div className="hContestsImgSec">
                <img className="hContestsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/09/Contest-Banner-04-1.jpg"></img>
                </div>
                </Link>

                <Link to={`/Weddings?title=Parsi Wedding`}>
                <div className="hContestsImgSec">
                <img className="hContestsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/09/Contest-Banner-05-1.jpg"></img>
                </div>
                </Link>

                <Link to={`/Weddings?title=Hindu Wedding`}>
                <div className="hContestsImgSec">
                <img className="hContestsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/09/Contest-Banner-06-1.jpg"></img>
                </div>
                </Link>
                
            
            
            </Slider>
            </div>
        </div>
        <hr className="bottomBorder"/>
        </>
    )
}

export default HContest;