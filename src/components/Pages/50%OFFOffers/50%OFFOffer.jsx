import React, {useEffect, useState, useRef} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import { getOfferCategory,getOfferSubCategory , get50OFFOffers} from "../../../Service/Actions/OfferPageActions";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DownloadButton from "../VendarDetails/VendorOffers/DownloadButton/DownloadButton"

import { useNavigate } from "react-router-dom";
import { screenToggle } from "../../../Service/Actions/Action";



const BestOffer = (props) =>{

    const navigate = useNavigate();

    const [loginStatus, setLoginStatus] = useState();
    const [showLogin, setSetLoginFlag] = useState(false);

    let [searchParams, setSearchParams] = useSearchParams();
    const [ offersCategory, setOffersCategory ]=useState(searchParams.get("cat"))
    const [ offersSubCategory, setoffersSubCategory] = useState(searchParams.get("Subcat"));
    

    useEffect(()=>{
        setOffersCategory(searchParams.get("cat"));
        setoffersSubCategory(searchParams.get("Subcat"));
    },[searchParams.get("cat"),searchParams.get("Subcat")])
    
    const dispatch= useDispatch();
    const cityData = localStorage.getItem("selectedCity")
    const localityData = localStorage.getItem("setLocality")

    
    //BestOffers
    useEffect(()=>{
        window.scrollTo(0, 0);
        dispatch(get50OFFOffers(cityData,offersCategory));
    },[dispatch,cityData,localityData,offersCategory]);

    const FiftyOFFoffers = useSelector(
        (state)=> state.fiftyOFFOffersReducer.offers
    );
        
    return(
        <>
            <div>
                {offersCategory == "Wellness" ? 
                <h2 className='Bofferheading'>Upto 50% OFF on Supplements</h2> :
                <h2 className='Bofferheading'>Upto 50% OFF on {offersCategory}</h2> }
                
                
                <div className='BOffersSec'>
                    {FiftyOFFoffers?.map((val) => {
                    
                    return(
                        val.offer?.map((index,i) =>{
                            
                            return(
                            
                            <div className='Boffersimgsec'>
                                <Link to={`/OfferDetails/${val._id}?i=${i}`}>
                                    <img className='Boffersimg' src={index.image}></img>
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