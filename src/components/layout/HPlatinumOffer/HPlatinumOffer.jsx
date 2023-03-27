import React, {useEffect} from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { getOffer } from "../../../Service/Actions/HomeActions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component'
import './HPlatinumOffer.css'

const HPlatinumOffer =({offers,title,link,status}) =>{

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

      let newOffer = offers.sort(()=> (Math.random() > 0.5 ) ? 1 : -1);
      

    return(
        <>
        <div className="hPlatinumOfferSec">
            <h1 className="hPlatinumOfferHeading">{title}</h1>
            <div className="hPlatinumOfferCardSec">
            <Slider {...BOsettings}>

            {newOffer?.map((val)=>{
                return(
                <Link to={`/OfferDetails/${val.id}?i=${val.index}`}>
                <div>
                {val.image && <div className="hPlatinumOfferImgSec">
                                        <img className="hPlatinumOfferImg" src={val.image}></img>
                                </div>}
                </div>
                <div className="hPlatinumOfferAvailButtonSec"><button className="hPlatinumOfferAvailButton">Click to Avail</button></div>
                </Link>
                
                );
            })}  
            <div className='NRhPlatinumOffer'>
            </div>    
            
        </Slider>
            </div>


            
            {(title=="Best")? 
            <Link to={`/${link}`}>
            <div className="hPlatinumOfferViewAllButtonSec"><button className="hPlatinumOfferViewAllButton">View All</button></div>
            </Link> :
            status ?
            <Link to={`/${link}?cat=${title}`}>
            <div className="hPlatinumOfferViewAllButtonSec"><button className="hPlatinumOfferViewAllButton visible">View All</button></div>

            </Link>
            :
            <Link to={`/${link}?cat=${title}`}>
            <div className="hPlatinumOfferViewAllButtonSec"><button className="hPlatinumOfferViewAllButton">View All</button></div>

            </Link>
            }
        </div>
        </>
    )
}

export default HPlatinumOffer;
