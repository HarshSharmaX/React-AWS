import React, { useRef } from "react";
import './HCategory.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { getCat } from '../../../Service/Actions/HomeActions';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const HCategory =() =>{

    const dispatch = useDispatch();

  useEffect(() => {
         dispatch(getCat());
    }, [dispatch]);

    const homeCatData = useSelector(
        (state) => state.catReducer?.cats
    );

    const Csettings = {
        dots: false,
        infinite: false,
        rows:2,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                dots: false,
                infinite: false,
                rows:2,
                speed: 500,
                slidesToShow: 6,
                swipeToSlide: true,
              }
            }
        ]
      };
      return(
          <>
          <div className="hCategorySec">
            <h2 className="hCategoryHeading">Featured Categories</h2>
            <div className="Hcategory-content">
            <Slider {...Csettings}>
            {homeCatData && homeCatData.map((val) => {
            return(
                
                <div className = "Hcategory" key={val.categories_Name}> 
                    <Link to={`Offers?cat=${val.categories_Name}`}>
                        <img className = "homeCategoryImg" src={val.url}/>
                    </Link>
                    <h4 className="hCategoryName">{val.categories_Name}</h4>
                </div>
            )
            })}

                <div className = "uselesscategory"> 
                    <img className = "" src="https://i.imgur.com/hYuqBlT.jpg"/>
                    <h4>Categories</h4>
                </div>
                <div className = "uselesscategory"> 
                    <img className = "" src="https://i.imgur.com/hYuqBlT.jpg"/>
                    <h4>Categories</h4>
                </div>
                
            </Slider>
            </div>
          </div>
          </>
      )
}

export default HCategory