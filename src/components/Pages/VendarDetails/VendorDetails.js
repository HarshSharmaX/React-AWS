import React, { useEffect, useState } from "react";
import "./VendorDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import StarRatings from "react-star-ratings";
import { connect, useDispatch } from "react-redux";
import VendorOffers from "./VendorOffers/VendorOffers";
import AboutUS from "./AboutUs/Aboutus";
import VendorProduct from "./Products/VendorProduct";
import { likeVendor, unLikeVendor, getReviewRequest } from "../../../Service/Actions/Vendor";
import { getUser } from "../../../Service/Actions/User";

import { useNavigate } from "react-router-dom";
import { screenToggle } from "../../../Service/Actions/Action";
import { Modal } from "react-bootstrap";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import OtpScreen from "../OtpScreen/OtpScreen";

function VendorDetails(props) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  console.log("{{}}",props)
  const [loginStatus, setLoginStatus] = useState();
  const [showLogin, setSetLoginFlag] = useState(false);

  const [shareLink, setShareLink] = useState('');
  const [tabActivity, setTabActivity] = useState({
    offers: true,
    products: false,
    aboutUs: false,
  });
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(getReviewRequest(id));
  }, [id])

  useEffect(() => {
    window.scrollTo(0,0);
    if (localStorage.getItem("selectedVendorDetail") !== null) {
      setShareLink(window.location)
    } else {
      setShareLink(window.location)
    }
  }, [props]);

  useEffect(() => {
    if(props?.user?.data?.phone){
      dispatch(getUser(props?.user?.data?.phone?.slice(1)));
    }else {
      const phone = JSON.parse(localStorage.getItem('kube-user'));
      dispatch(getUser(phone?.data?.phone.slice(1)));
    }
  }, [props.unLike, props.like]);

  function onTabChange(tabName) {
    let tabsAry = {
      offers: false,
      products: false,
      aboutUs: false,
    };
    tabsAry[tabName] = true;
    setTabActivity(tabsAry);
  }

  const StoreLike = (vendor) => {
    dispatch(likeVendor(props?.user?.data?._id, vendor));
  };
  const StoreUnLike = (vendor) => {
    dispatch(unLikeVendor(props?.user?.data?._id, vendor));
  };

  const copyText = (text) => {
    var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    alert("Copyed text");
  }
// comment out the without login
  /*useEffect(() => {
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
  }, [loginStatus]);  */

  const handleClose = () => {
    setSetLoginFlag(false);
    screenToggle("Login")
  }

  const closeButton = () => {
    navigate("/")
  }

  const showToast = () => {
    setSetLoginFlag('Enter otp');
  }

  return (
    <>
      <div className="container vendorDetails_section">
        <div className="row">
          <div className="col-lg-12 inner_listing_box text-center mb-md-5 mb-3">
            <div className="row">
              <div className="col-lg-6 VDImgBox">
                <div className="VDimage_wrap">
                  {/* <img
                    src={props?.getVendorReviewList?.data?.products[0]?.images[1]?.url}
                    alt=""
                  /> */}
                  <img
                    src={props?.getVendorReviewList?.data?.products[0]?.images[0]?.url}
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-6 ">
                <div className="details_overview_wrap mt-md-4 mt-2 text-start">
                  <div className="inner_details_overview_wrap">
                    <div className="ab_heart_icon">
                      {props?.user?.data?.favouriteStores?.indexOf(
                        props?.getVendorReviewList?.data?.products[0]?._id
                      ) !== -1 ? (
                        <FaHeart
                          onClick={() =>
                            StoreUnLike(props?.getVendorReviewList?.data?.products[0]?._id)
                          }
                          color="red"
                        />
                      ) : (
                        <FaRegHeart
                          onClick={() =>
                            StoreLike(props?.getVendorReviewList?.data?.products[0]?._id)
                          }
                        />
                      )}
                    </div>

                    <div className="VD_ab_gold_silver_tag">
                      {props?.getVendorReviewList?.data?.products[0]?.package ===
                        "Platinum" && (
                          <img
                            src={require("../../../assets/Badges 03.png")}
                            alt=""
                          />
                        )}
                      {props?.getVendorReviewList?.data?.products[0]?.package ===
                        "Free" && (
                          <img
                            src={require("../../../assets/Badges 05.png")}
                            alt=""
                          />
                        )}
                      {props?.getVendorReviewList?.data?.products[0]?.package ===
                        "Bronze" && (
                          <img
                            src={require("../../../assets/Badges 04.png")}
                            alt=""
                          />
                        )}
                      {props?.getVendorReviewList?.data?.products[0]?.package ===
                        "Silver" && (
                          <img
                            src={require("../../../assets/Badges 02.png")}
                            alt=""
                          />
                        )}
                      {props?.getVendorReviewList?.data?.products[0]?.package ===
                        "Golden" && (
                          <img
                            src={require("../../../assets/Badges 01.png")}
                            alt=""
                          />
                        )}
                      {props?.getVendorReviewList?.data?.products[0]?.package ===
                        "Basic" && (
                          <img
                            src={require("../../../assets/Badges 06.png")}
                            alt=""
                          />
                        )}
                    </div>

                    <p className="title_head">
                      {props?.getVendorReviewList?.data?.products[0]?.storename}
                    </p>

                    <div className="addressbar_wrap">
                      <a href="" className="tag_add">
                        <b> Owner :</b>
                      </a>
                      <p className="mb-1">
                        {
                          props?.getVendorReviewList?.data?.products[0]?.vendor
                            ?.vendor_name
                        }
                      </p>
                    </div>
                    <div className="addressbar_wrap">
                      <a href="" className="tag_add">
                        <b> Add.</b>
                      </a>
                      <p className="mb-1">
                        {props?.getVendorReviewList?.data?.products[0]?.address}
                      </p>
                    </div>
                  </div>

                  <div className="contactRatingBar_wrap d-flex justify-content-between">
                    <div className="contact_wrap d-flex">
                      <a href="" className="tag_add">
                        <b> Contact :</b>
                      </a>
                      <p className="mb-1">
                        +91 {props?.getVendorReviewList?.data?.products[0]?.phone}
                      </p>
                    </div>
                    <div className="VP_review_wrap_section">
                      <div className="rieview_list">
                        <StarRatings
                          rating={props?.getVendorReviewList?.data?.products[0].ratings}
                          starRatedColor="#25255c"
                          numberOfStars={5}
                          name="rating"
                          starDimension= {window.innerWidth < 600 ? "18px" : "20px" }
                          starSpacing={"1px"}
                        />
                        <p className="review_write_wrap mx-2 mt-2">
                          {"(" +
                            props?.getVendorReviewList?.data?.products[0]?.numOfReviews +
                            ")"}
                        </p>
                      </div> 
                    </div>
                  </div>
                  <div className="icons-wraps">
                  {props?.getVendorReviewList?.data?.products[0]?.package !==
                        "Free" && (
                          <img
                            src={require("../../../assets/location.png")}
                            alt=""
                          />
                        )}
                    
                    <a href={`https://wa.me/91${props?.getVendorReviewList?.data?.products[0]?.phone}/?text=Hii ${props?.getVendorReviewList?.data?.products[0]?.storename}, I got your contact through kubecity.in  `} target='_blank'>
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
      <div className="col-12 tab-vendor-details">
        <div className="container">
          <div className="col-12 inner-tab-vendor-details">
            <button
              onClick={() => {
                onTabChange("offers");
              }}
              className={
                tabActivity.offers
                  ? "VDLogoButton active"
                  : "VDLogoButton"
              }
            >
              Offers
            </button>
            <button
              onClick={() => {
                onTabChange("products");
              }}
              className={
                tabActivity.products
                  ? "VDLogoButton active"
                  : "VDLogoButton"
              }
            >
              Products
            </button>
            <button
              onClick={() => {
                onTabChange("aboutUs");
              }}
              className={
                tabActivity.aboutUs
                  ? "VDLogoButton active"
                  : "VDLogoButton"
              }
            >
              About Us
            </button>
          </div>
          <div className="list-tab-wrap mt-md-4 mt-2">
            {tabActivity.offers && (
              <VendorOffers
                offers={props?.getVendorReviewList?.data?.products[0]?.offer}
                id = {props?.getVendorReviewList?.data?.products[0]?._id}
              />
            )}

            {tabActivity.products && (
              <VendorProduct
                products={props?.getVendorReviewList?.data?.products[0].products}
                id = {props?.getVendorReviewList?.data?.products[0]?._id}
              />
            )}

            {tabActivity.aboutUs && (
              <AboutUS aboutData={props?.getVendorReviewList?.data?.products[0]} />
            )}
          </div>
        </div>
      </div>
      <Modal
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
      </Modal>   
    </>
  );
}

const actionCreators = {};

export default connect(
  ({ vendorDetail, userDetail, toggleScreens }) => ({
    vendorDetailData: vendorDetail.selectedVendorDetail,
    user: userDetail.user,
    like: vendorDetail.like,
    unLike: vendorDetail.unLike,
    getVendorReviewList: vendorDetail.getVendorReviewList,
    screenToggle: toggleScreens.screenToggle, 
  }),
  actionCreators
)(VendorDetails);
