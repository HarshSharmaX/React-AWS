import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Slider from "react-slick";
import {connect, useSelector, useDispatch} from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component'
import { getUser } from "../../../Service/Actions/User";
import { screenToggle } from "../../../Service/Actions/Action";
import { Modal } from "react-bootstrap";
import Registration from '../../Pages/Registration/Registration';
import Login from '../../Pages/Login/Login';
import OtpScreen from '../../Pages/OtpScreen/OtpScreen';
import './HAdvertise.css'
import { getMainBanners} from '../../../Service/Actions/HomeActions'

const HAdvertise =(props) =>{

    const navigate = useNavigate();
    const dispatch= useDispatch();

    const [loginStatus, setLoginStatus] = useState();
    const [showLogin, setSetLoginFlag] = useState(false);
    const bannerData = useSelector(
      (state) => state.MainBannersReducer.kubebanner
  );



    const BOsettings = {
        // className: "center",
        dots: true,
        infinite: true,
        // centerMode: true,
        // centerPadding: "16%",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 2000,
        speed: 500,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                // className: "center",
                dots: false,
                infinite: true,
                // centerMode: true,
                // centerPadding: "0px",
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplayspeed: 2000,
                speed: 500,
              }
            }
        ]
      };

      useEffect(() => {
        dispatch(getMainBanners());
      }, []);

      const BannerClick = (image) => {
        
        const data = {
            image: image,
            
        };
        Axios.put("https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/count/banner/web", data).then((res) => {

        });
        window.open('https://play.google.com/store/apps/details?id=com.kubecity','_blank');

      };


      // useEffect(() => {
      //   setLoginStatus(localStorage.getItem("isUserVerify"));
      // }, [  
      //   loginStatus,
      //   props?.otpData?.msg,
      // ]);

      // const GoRegister = () => {
      //   if (loginStatus === "false") {
      //     setSetLoginFlag(true);
      //     dispatch(screenToggle("Register"));
      //   }
      // };

      // const handleClose = () => {
      //   setSetLoginFlag(false);
      // }
    
      // const closeButton = () => {
      //   navigate("/");
      //   window.location.reload();
      // }
    
      // const showToast = () => {
      //   setSetLoginFlag('Enter otp');
      // }
      

    return(
        <>
        <div className="hAdvertiseSec">
            <div className="hAdvertiseCardSec">
            <Slider {...BOsettings}>
              {bannerData.map((val) => {
                
                return (
                    <div 
                    className="hAdvertiseImgSec"
                    onClick={() => BannerClick(val.image)}
                    >
                      <img className="hAdvertiseImg" src={val.image}></img>
                    </div>
                  
                )
              })}
               
              {/* <a href='https://play.google.com/store/apps/details?id=com.kubecity' target='#'>
                <div 
                className="hAdvertiseImgSec"
                >
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2023/02/Frame-139-1-scaled.webp"></img>
                </div>
              </a>
              <a href='https://play.google.com/store/apps/details?id=com.kubecity' target='#'>
                <div 
                className="hAdvertiseImgSec"
                >
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2023/03/Frame-54-1.png"></img>
                </div>
              </a> */}
              {/* <Link to={"/FestiveOffers?cat=mens"}>
                <div 
                className="hAdvertiseImgSec"
                >
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads-Banner-03-scaled.webp"></img>
                </div>
              </Link>
              <Link to={"/FestiveOffers?cat=mens"}>
                <div 
                className="hAdvertiseImgSec"
                >
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads-Banner-04_1-scaled.webp"></img>
                </div>
              </Link> */}
                   
            </Slider>
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

export default connect(({userDetail, toggleScreens }) => ({
  screenToggle: toggleScreens.screenToggle,
  otpData: userDetail.otpData,
}))(HAdvertise);
