import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getFavoriteVendor } from "../../../Service/Actions/Vendor";
import { likeVendor, unLikeVendor } from "../../../Service/Actions/Vendor";
import { getUser } from "../../../Service/Actions/User";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component'
import './HFavoriteVendors.css'

const HFavoriteVendors =(props) =>{
    const NVsettings = {
        dots: false,
        infinite: false,
        speed: 500,
        rows:1,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                dots: false,
                infinite: false,
                speed: 500,
                rows:1,
                slidesToShow: 2.7,
                swipeToSlide: true,
              }
            }
        ]
      };
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getFavoriteVendor(props?.user?.data?.favouriteStores));
      }, [props?.user?.data?.favouriteStores]);
    
      useEffect(() => {
        const phone = JSON.parse(localStorage.getItem("kube-user"));
        if (
          localStorage.getItem("kube-user") !== null &&
          Object.keys(props?.user).length === 0
        ) {
          dispatch(getUser(phone?.data?.phone?.slice(1)));
        } else if (props?.user?.data) {
          dispatch(getUser(props?.user?.data?.phone?.slice(1)));
        } 
      },[props.unLike]);

    return(
        <>
        <div className="hFavoriteVendorsSec">
            <h1 className="hFavoriteVendorsHeading">Favorite Vendors</h1>
            <div className="hFavoriteVendorsCardSec">
            <Slider {...NVsettings}>
            {props?.getFavoriteVendorList?.data?.favList?.map((val, index) => {
              return(
              <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src={val.images[1].url}></img>
                <p className="hFavoriteVendorsName">{val.storename}</p>
                </div>
                )
            })}
                
                


                <div className='NRhBestOffer'>
                </div>
            </Slider>
            </div>
            {/* <div className="hFavoriteVendorsViewAllButtonSec"><button className="hFavoriteVendorsViewAllButton">View All</button></div> */}
        </div>
        </>
    )
}

export default connect(({ userDetail, vendorDetail }) => ({
  user: userDetail.user,
  getFavoriteVendorList: vendorDetail.getFavoriteVendorList,
  like: vendorDetail.like,
  unLike: vendorDetail.unLike,
  updateUserList: userDetail.updateUserData,
}))(HFavoriteVendors);