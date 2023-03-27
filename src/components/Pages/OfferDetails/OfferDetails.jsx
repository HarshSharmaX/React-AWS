import React, { useEffect, useState } from "react";
import "./OfferDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link , useParams} from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { connect, useSelector,useDispatch } from "react-redux";
import { SelectedOfferDetails , getOffers , getOfferDetails} from "../../../Service/Actions/OfferPageActions"
import { likeVendor, unLikeVendor } from "../../../Service/Actions/Vendor";
import { getUser } from "../../../Service/Actions/User";
import DownloadButton from "../VendarDetails/VendorOffers/DownloadButton/DownloadButton"

import { screenToggle } from "../../../Service/Actions/Action";
import { Modal } from "react-bootstrap";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import OtpScreen from "../OtpScreen/OtpScreen";


const OfferDetails = (props) =>{

  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState();
  const [showLogin, setSetLoginFlag] = useState(false);

  let [searchParams, setSearchParams] = useSearchParams();
    const {_id} = useParams();

    let offerindex = searchParams.get("i");


    const dispatch = useDispatch();

    const [shareLink, setShareLink] = useState('');

  

    useEffect(() => {
        dispatch(getOfferDetails(_id));
   }, [dispatch,_id]);
  
   const offerDetailsData = useSelector(
       (state) => state?.offerDetailReducer?.offers
   );

   useEffect(() => {
    if (localStorage.getItem("selectedVendorDetail") !== null) {
      setShareLink(window.location)
    } else {
      setShareLink(window.location)
    }
  }, [props]);


  const copyText = (text) => {
    var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    alert("Copyed text");
  }

    

    const dateFormatter = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    });

    // Login Authentication

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
        {offerDetailsData?.map((val) => {
          return(
        
        <div className="container vendorDetails_section">
        <div className="row">
          <div className="ms-lg-5 col-lg-11 inner_listing_box text-center mb-md-5 mb-3">
            <div className="row">
              <div className="col-lg-6">
                <div className="OD_image_wrap">
                  <img
                    src={val.images[0].url}
                    alt=""
                  />
                  
                </div>
              </div>

              <div className="col-lg-6 ">
                <div className="details_overview_wrap mt-4 text-start">
                  <div className="inner_details_overview_wrap">
                    

                    <div className="ab_gold_silver_tag">
                    {val.package ===
                        "Platinum" && (
                          <img
                            src={require("../../../assets/Badges 03.png")}
                            alt=""
                          />
                        )}
                      {val.package ===
                        "Free" && (
                          <img
                            src={require("../../../assets/Badges 05.png")}
                            alt=""
                          />
                        )}
                      {val.package ===
                        "Bronze" && (
                          <img
                            src={require("../../../assets/Badges 04.png")}
                            alt=""
                          />
                        )}
                      {val.package ===
                        "Silver" && (
                          <img
                            src={require("../../../assets/Badges 02.png")}
                            alt=""
                          />
                        )}
                      {val.package ===
                        "Golden" && (
                          <img
                            src={require("../../../assets/Badges 01.png")}
                            alt=""
                          />
                        )}
                      {val.package ===
                        "Basic" && (
                          <img
                            src={require("../../../assets/Badges 06.png")}
                            alt=""
                          />
                        )}
                    </div>

                    <Link to={`/vendorDetail/${val._id}`}>
                    <p className="title_head">
                      {val.storename}
                    </p>
                    </Link>
                    { val.vendor && <div className="addressbar_wrap">
                      <a href="" className="tag_add">
                        <b> Owner:</b>
                      </a>
                      <p className="mb-1">
                        
                      {val.vendor.vendor_name}
                        
                      </p>
                    </div>}
                    <div className="addressbar_wrap">
                      <a href="" className="tag_add">
                        <b> Add.</b>
                      </a>
                      <p className="mb-1">
                        {val.address}
                      </p>
                    </div>
                  </div>

                  <div className="addressbar_wrap d-flex justify-content-between">
                    <div className="contact_wrap d-flex">
                      <a href="" className="tag_add">
                        <b> Contact:</b>
                      </a>
                      <p className="mb-1">
                        +91 {val.phone}
                      </p>
                    </div>
                    
                  </div>
                  <div className="icons-wraps">
                    <img src={require("../../../assets/location.png")} />
                    <a href={`https://api.whatsapp.com/send?text=${shareLink}`} target='_blank'>
                      <img src={require("../../../assets/whatsapp_icon.png")} />
                    </a>
                    <img src={require("../../../assets/share-icon.png")} onClick={() => copyText(shareLink)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
      })}

      
    
      {offerDetailsData?.map((val) => {
        return(
          <>
            <div className='offerDetailsSec'>
            <hr />
            <h2 className="h2">Redeem Now</h2>
                  <img className='ODofferImg' src={val.offer[offerindex].image}></img>
                  <div className='offerDetailsContentSec'>
                  
                      {val.offer[offerindex].offerdetail ? 
                      <div>
                        <h2>About Coupon</h2>
                        <p>{val.offer[offerindex].offerdetail}</p>
                      </div> : 
                      <></> }
                      {/* <div className="offerDetailsValidityDownload"> */}
                        {/* <div className="offerDetailsValidity">
                          <h2>About Coupon</h2>
                          {val.offer[offerindex].initiation_date && val.offer[offerindex].expiry_date ?
                          <h3><span className='me-3'>{dateFormatter.format(Date.parse(val.offer[offerindex].initiation_date))}</span>-<span className='ms-3'>{dateFormatter.format(Date.parse(val.offer[offerindex]?.expiry_date))}</span></h3> 
                          :
                          val.offer[offerindex].initiation_date ? 
                          <h3><span className='me-3'>{dateFormatter.format(Date.parse(val.offer[offerindex].initiation_date))}</span>-<span className='ms-3'>{val.offer[offerindex]?.expiry_date}</span></h3> 
                          :
                          <h3><span className='me-3'>Not Available</span></h3> 
                        }
                        </div> */}
                        <div className="offerDetailsDownloadBtnSec">
                          <DownloadButton Id={val._id} Image={val.offer[offerindex].image} counter={val.offer[offerindex].offerCounter}  />
                        </div>
                      {/* </div> */}
                  </div>
            </div>
            {val.offer[offerindex].termsandcondition ? <div className='termsConditionSec'>
            <h1>Terms & Conditions</h1>
            <p>{val.offer[offerindex].termsandcondition}</p>
            </div> 
            : 
            <div></div>
            }
          </>
          )
        })}  
      
        
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
}))(OfferDetails);