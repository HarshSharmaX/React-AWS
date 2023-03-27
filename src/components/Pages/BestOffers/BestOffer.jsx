import React, {useEffect, useState, useRef} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import { getOfferCategory,getOfferSubCategory , getOffers} from "../../../Service/Actions/OfferPageActions";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./BestOffer.css";
import DownloadButton from "../VendarDetails/VendorOffers/DownloadButton/DownloadButton"

import { useNavigate } from "react-router-dom";
import { screenToggle } from "../../../Service/Actions/Action";
import { Modal } from "react-bootstrap";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import OtpScreen from "../OtpScreen/OtpScreen";


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
        dispatch(getOffers(cityData,localityData,offersCategory,offersSubCategory));
    },[dispatch,cityData,localityData,offersCategory,offersSubCategory]);

    const offers = useSelector(
        (state)=> state.offersReducer.offers
    );

    

    //Categories
    
    useEffect(() => {
        dispatch(getOfferCategory())
    }, [dispatch])

    const offerCategory = useSelector(
        (state) => state.getOfferCategoryReducer.cate
    );

    //SubCategories
    useEffect(() => {
        dispatch(getOfferSubCategory(offersCategory))
    }, [dispatch, offersCategory])

    const offerSubCategory  = useSelector(
        (state) => state.getOfferSubCategoryReducer.subcat
    );

    console.log(",,,,",offersCategory);
    console.log("++++",searchParams.get("cat"));
    

    { /* useEffect(() => {
        setLoginStatus(localStorage.getItem("isUserVerify"));
      }, [  
        loginStatus,
        props?.userLoginStatus
      ]);
      
      useEffect(() => {
        if (loginStatus === "false") {
          setSetLoginFlag(true);
          dispatch(screenToggle("Login"));
        }
      }, [loginStatus]);
    
      const handleClose = () => {
        setSetLoginFlag(false);
        screenToggle("Login")
      }
    
      const closeButton = () => {
        navigate("/");
        window.location.reload();
      }
    
      const showToast = () => {
        setSetLoginFlag('Enter otp');
      }
    */}
        
    return(
        <>
            <div>
                <h2 className='Bofferheading'>Best Offers</h2> 
                <select className="Bsortcategory" name="sortcategory" id='offersCategory' onChange= {(e)=>{
                    setOffersCategory(e.target.value);
                    setoffersSubCategory("")
                }} >
                    <option value="" disabled selected>Categories</option>
                    {offerCategory?.map((val) => {
                        return (
                           <option key={val.id} >{val.categories_Name}</option>
                        )
                    })}
                </select>
                <select className="BsortsubCategory" name="sortcategory" id='offersSubCategory' onChange= {(e)=>{
                    setoffersSubCategory(e.target.value);
                    
                }}>
                    <option value="" selected>Sub-Categories</option>
                    {offerSubCategory?.map((val) => {
                        
                                    return (
                                        val.sub_cat?.map((index) =>{
                                            return(
                                                <option key={val}>{index.subcat_Name}</option>
                                            )
                                        })
                                    )
                    })}
                    
                </select>
                <div className='BOffersSec'>
                    {offers?.map((val) => {
                    
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
        {/* <Modal
                className="new_modal"
                show={showLogin}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop={ 'static' }
                keyboard={ false }
            >
                <Modal.Body>
                {props?.screenToggle === "Register" && (
                    <Registration closeModal={closeButton} showToast={showToast} />
                )}
                {props?.screenToggle === "Login" && (
                    <Login closeModal={closeButton} showToast={showToast} />
                )}
                {props?.screenToggle === "OTP" && (
                    <OtpScreen closeModal={handleClose} notUser={closeButton} showToast={showToast} />
                )}
                </Modal.Body>
            </Modal>    */}
        </>
    )
}

export default connect(({toggleScreens }) => ({
    screenToggle: toggleScreens.screenToggle,
}))(BestOffer);