import React, {useEffect, useState, useRef} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import { getOfferCategory,getOfferSubCategory , getOffers,getFestiveOffers} from "../../../Service/Actions/OfferPageActions";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

import DownloadButton from "../VendarDetails/VendorOffers/DownloadButton/DownloadButton"

import { useNavigate } from "react-router-dom";
import { screenToggle } from "../../../Service/Actions/Action";
import { Modal } from "react-bootstrap";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import OtpScreen from "../OtpScreen/OtpScreen";
import "./FestiveOffers.css"


const BestOffer = (props) =>{

    const navigate = useNavigate();

    const [loginStatus, setLoginStatus] = useState();
    const [showLogin, setSetLoginFlag] = useState(false);

    let [searchParams, setSearchParams] = useSearchParams();

    
    const dispatch= useDispatch();
    const cityData = localStorage.getItem("selectedCity")
    const localityData = localStorage.getItem("setLocality")
    console.log(searchParams.get('cat'));

    
    //BestOffers
    useEffect(()=>{
        window.scrollTo(0, 0);
        dispatch(getFestiveOffers(searchParams.get("cat")));
    },[dispatch,searchParams.get("cat")]);

    const festiveOffers = useSelector(
        (state)=> state.festiveOffersReducer.festiveoffers
    );
    console.log(festiveOffers, "offerimage");

        
    return(
        <>
            <div>
                {searchParams.get('cat') == "xmus" ? 
                <h2 className='fOfferheading'>New Year Offers</h2> :
                searchParams.get('cat') == "wedding" ?
                <h2 className='fOfferheading'>Wedding Offers</h2> :
                <h2 className='fOfferheading'>Kisan Divas Offers</h2>}
                <div className='fOffersSec'>
                    {festiveOffers?.map((val) => {
                    
                    return(
                        val.offer?.map((index,i) =>{
                            
                            return(
                            
                            <div className='fOffersimgsec'>
                                <Link to={`/OfferDetails/${val._id}?i=${i}`}>
                                    <img className='fOffersimg' src={index.image}></img>
                                </Link>
                                <div className="offerDownloadBtnSec">
                                    <DownloadButton Id={val._id} Image={index.image} counter={index.offerCounter}/>
                                </div>
                            </div>
                            
                            
                            )
                        })
                    )
                    })}
                    
                </div>
            </div>
        </>
    )
}

export default connect(({toggleScreens }) => ({
    screenToggle: toggleScreens.screenToggle,
}))(BestOffer);
