

import React, {useEffect} from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { getOffer } from "../../../Service/Actions/HomeActions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component'
import './HBestOfferTest.css'

const HBestOffer =({offers,title,link,status}) =>{

    const BOsettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3.1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 2.1,
                swipeToSlide: true,
              }
            }
        ]
      };
      console.log(offers,";;;;")

      useEffect(() => {
        var child = document.getElementsByClassName('hBestOfferImgSec hidden');
        
        for (let i = 0; i < child.length; i++) {
          var child1 = child[i].parentElement
          var child2 = child1.parentElement
          child2.parentElement.style.display = "none"
        }
      });



    return(
        <>
        <div className="hBestOfferSec">
            <h1 className="hBestOfferHeading">{title} Offers</h1>
            <div className="hBestOfferCardSec">
            <Slider {...BOsettings}>

            {offers?.slice(0,25).map((val)=>{
                return(
                <>
                <div>
                <div className={`hBestOfferImgSec ${val.image ? "showing" : "hidden"}`}>
                                        <img className="hBestOfferImg" src={val.image}></img>
                                </div>
                </div>
                <button onClick={""}>click me</button>
               </>
                
                );
            })}  
            <div className='NRhBestOffer'>
            </div>    
            
        </Slider>
            </div>


            
            {(title=="Best")? 
            <Link to={`/${link}`}>
            <div className="hBestOfferViewAllButtonSec"><button className="hBestOfferViewAllButton">View All</button></div>
            </Link> :
            status ?
            <Link to={`/${link}?cat=${title}`}>
            <div className="hBestOfferViewAllButtonSec"><button className="hBestOfferViewAllButton visible">View All</button></div>

            </Link>
            :
            <Link to={`/${link}?cat=${title}`}>
            <div className="hBestOfferViewAllButtonSec"><button className="hBestOfferViewAllButton">View All</button></div>

            </Link>
            }
        </div>

        </>
    )
}

export default HBestOffer;

