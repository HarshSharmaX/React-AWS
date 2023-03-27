import React, {useEffect, useState, useRef} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import { getOfferCategory,getOfferSubCategory , getOffers} from "../../../Service/Actions/OfferPageActions";
import {getWeddings} from "../../../Service/Actions/HomeActions";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./WeddingCategories.css";

import Wedding1 from "../../../assets/wedding1.jpeg"
import Wedding2 from "../../../assets/wedding2.jpeg"
import Wedding3 from "../../../assets/wedding3.jpeg"
import Wedding4 from "../../../assets/wedding4.jpeg"


const WeddingCategories = (props) =>{

    const dispatch = useDispatch();

    let [searchParams, setSearchParams] = useSearchParams();

    var weddingType = searchParams.get("title")

    useEffect(()=>{
        dispatch(getWeddings(weddingType));
    },[dispatch,searchParams.get("cate")]);

    const getWeddingData = useSelector((state) => state?.weddingsReducer?.festivaldeal);

    console.log("harshiii",getWeddingData);

    const[weddingCategory, setWeddingCategory] = useState("Hindu");
        
    return(
        <>
            <div>
                <h2 className='weddingPageheading'>Plan Your Wedding With KUBE</h2>
                
                <div className='weddingPageSec'>
                    <div className='weddingPageTypeSec'>
                    <Link to={`/Weddings?title=Hindu Wedding`}>
                        <button className={`weddingTypeButton ${weddingType=="Hindu Wedding" ? "active" : ""}`}>
                            <strong>Hindu Wedding</strong>
                        </button>
                    </Link>
                    <Link to={`/Weddings?title=Muslim Wedding`}>
                        <button className={`weddingTypeButton ${weddingType=="Muslim Wedding" ? "active" : ""}`}>
                            <strong>Muslim Wedding</strong>
                        </button>
                    </Link>
                    <Link to={`/Weddings?title=Sikh Wedding`}>
                        <button className={`weddingTypeButton ${weddingType=="Sikh Wedding" ? "active" : ""}`}>
                            <strong>Sikh Wedding</strong>
                        </button>
                    </Link>
                    <Link to={`/Weddings?title=Christian Wedding`}>
                        <button className={`weddingTypeButton ${weddingType=="Christian Wedding" ? "active" : ""}`}>
                            <strong>Christian Wedding</strong>
                        </button>
                    </Link>
                    <Link to={`/Weddings?title=Parsi Wedding`}>
                        <button className={`weddingTypeButton ${weddingType=="Parsi Wedding" ? "active" : ""}`}>
                            <strong>Parsi Wedding</strong>
                        </button>
                    </Link>
                    </div>
                    <div className='weddingPageCategoriesSec'>
                            <Link to={`/WeddingSeason?ocassion=Haldi`}>
                                <div className='weddingCategoriesImgSec'>
                                    <img className='weddingCategoriesImg' src={Wedding1}></img>
                                    <p>Haldi</p>
                                </div>
                            </Link>
                            <Link to={`/WeddingSeason?ocassion=Haldi`}>
                                <div className='weddingCategoriesImgSec'>
                                    <img className='weddingCategoriesImg' src={Wedding2}></img>
                                    <p>Haldi</p>
                                </div>
                            </Link>
                            <Link to={`/WeddingSeason?ocassion=Haldi`}>
                                <div className='weddingCategoriesImgSec'>
                                    <img className='weddingCategoriesImg' src={Wedding3}></img>
                                    <p>Haldi</p>
                                </div>
                            </Link>
                            <Link to={`/WeddingSeason?ocassion=Haldi`}>
                                <div className='weddingCategoriesImgSec'>
                                    <img className='weddingCategoriesImg' src={Wedding4}></img>
                                    <p>Haldi</p>
                                </div>
                            </Link>
                            <Link to={`/WeddingSeason?ocassion=Haldi`}>
                                <div className='weddingCategoriesImgSec'>
                                    <img className='weddingCategoriesImg' src={Wedding1}></img>
                                    <p>Haldi</p>
                                </div>
                            </Link>
                
                    </div>
                </div>
            </div>
       
        </>
    )
}

export default connect(({toggleScreens }) => ({
    screenToggle: toggleScreens.screenToggle,
}))(WeddingCategories);