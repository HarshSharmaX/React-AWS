


import React, { useState, useEffect } from "react";
import "./NewHeader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
import {
  getCity,
  getLocality,
  menuToggle,
} from "../../../Service/Actions/Action";
import { FaCaretDown } from "react-icons/fa";
import { screenToggle } from "../../../Service/Actions/Action";
import { searchList } from "../../../Service/Actions/Vendor";

import CityModel from "../Modal/Modal";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import OtpScreen from "../../Pages/OtpScreen/OtpScreen";
import Menu from "../Menu/Menu";
import { Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import {
  clearverifyOTP,
  profileUpload,
  getUser,
} from "../../../Service/Actions/User";
import { Link, useLocation } from "react-router-dom";
import PopUpOne from "../Modal/PopUpOne/PopUpOne";
import PopUpTwo from "../Modal/PopUpTwo/PopUpTwo";

function Header(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isUserVerify = JSON.parse(localStorage.getItem("isUserVerify"));
  const [show, setShow] = useState(false);
  const [currentCity, setCurrentCity] = useState();
  const [locality, setLocality] = useState();
  const [cityLocalityToggle, setCityLocalityToggle] = useState(false);
  const [showLogin, setSetLoginFlag] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginUserName, setLoginUserName] = useState();
  const [uploadProfile, setUploadProfile] = useState(false);
  const [profile, setProfile] = useState(null);
  const [profileImage, setProfileImage] = useState();
  const [isProfileView, setProfileViewImage] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isOpenSuggetion, setIsOpenSuggetion] = useState(false);
  const [value, setvalue] = useState();
  // const [popUpOne,setPopUpOne] = useState(true);
  // const [popUpTwo,setPopUpTwo] = useState(false);
  // const [popUpNumber,setPopUpNumber] = useState(1);

  const handleClose = () => {
    // dispatch(screenToggle("Login"));
    GotoLogin();
    setSetLoginFlag(false);
  };

  console.log("IIII",show)

  useEffect(() => {
    if (props?.user?.data?.phone) {
      dispatch(getUser(props?.user?.data?.phone?.slice(1)));
    }
    else {
      const phone = JSON.parse(localStorage.getItem("kube-user"));
      dispatch(getUser(phone?.data?.phone.slice(1)));
    }
  }, [props?.updateUserList]);

  useEffect(() => {
    const city = localStorage.getItem("selectedCity");
    const cityModel = localStorage.getItem('showCityModel');
    if (city?.length <= 0 || city == undefined || cityModel == 'true' ) {
      setShow(true);
    }
  }, []); 


//   useEffect(() => {
//     if(popUpNumber == 1 && !popUpOne) {
//       let PopUp = setTimeout(() => {
//        setPopUpOne(true);
//       }, 20000);

//       return () => clearTimeout(PopUp);
//     }
//     if(popUpNumber == 2 && !popUpTwo) {
//       let PopUp = setTimeout(() => {
//        setPopUpTwo(true);
//       }, 20000);

//       return () => clearTimeout(PopUp);
//     }

// }, [popUpOne, popUpTwo]);

  // const closePopUpOne = () => {
  //   setPopUpOne(false);
  //   setPopUpNumber(2);
  // };

  // const closePopUpTwo = () => {
  //   setPopUpTwo(false);
  //   setPopUpNumber(1);
  // };

  const closeProfileDialogue = () => {
    setUploadProfile(false);
  };

  const opencity = () => {
    setShow(true);
    setCityLocalityToggle(false);
  };
  const openLocality = () => {
    setShow(true);
    setCityLocalityToggle(true);
  };

  const Toggle = () => {
    dispatch(menuToggle(true));
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
     if (props?.user?.data?.phone) {
      dispatch(getUser(props?.user?.data?.phone?.slice(1)));
    } else {
      const phone = JSON.parse(localStorage.getItem("kube-user"));
      dispatch(getUser(phone?.data?.phone.slice(1)));
    }
    setProfileViewImage(localStorage.getItem("isUserVerify"));
  }, [uploadProfile, props?.otpData?.msg]);

  useEffect(() => {
    if (props?.selectedCityData && props?.selectedCityData?.length >= 10) {
      var reducedCityText = props?.selectedCityData?.substring(0, 7);
      setCurrentCity(reducedCityText + "...");
    } else {
      setCurrentCity(props?.selectedCityData);
    }

    const localityData = localStorage.getItem("setLocality");
    if (localityData?.length >= 12) {
      var reducedLocalityText = localityData.substring(0, 7);
      setLocality(reducedLocalityText + "...");
    } else {
      setLocality(localityData);
    }
  }, [currentCity, locality]);
  

  useEffect(() => {
    dispatch(getCity());
    dispatch(getLocality(props?.selectedCityData));
  }, [props?.selectedCityData]);


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("kube-user"));
    const isUserVerify = JSON.parse(localStorage.getItem("isUserVerify"));
    if (user && isUserVerify) {
      const loginname = user?.user?.username;
      if (loginname?.length >= 12) {
        var reducedLoginText = loginname.substring(0, 6);
        setLoginUserName(reducedLoginText + "...");
      } else {
        setLoginUserName(loginname);
      }
      if (isUserVerify == false) {
        setLoginUserName("");
      }
    }
  }, [loginUserName, showLogin, isUserVerify, props.updateUserList]);

  useEffect(() => {
    const profileUrl = props.uploadProfile.file;
    setProfileImage(
      profileUrl
        ? profileUrl?.replace("localhost", "192.168.0.110")
        : props?.user?.data?.image?.replace("localhost", "192.168.0.110")
    );
  }, [props?.uploadProfile?.file, props?.user?.data?.image]);

  useEffect(() => {
    if (props.searchList.products !== undefined) {
      setSearchData(props.searchList.products);
    }
  });

  const uploadProfilePicture = () => {
    const user = JSON.parse(localStorage.getItem("kube-user"));
    const formData = new FormData();
    formData.append("userId", user.user._id);
    formData.append("file", profile);
    dispatch(profileUpload(formData));
    setUploadProfile(false);
  };

  const GotoLogin = () => {
    if (loginUserName) {
      navigate("/ProfileView");
    } else {
      setSetLoginFlag(true);
    }
    dispatch(screenToggle("Login"));
    props.clearverifyOTP();
    setProfileViewImage(localStorage.getItem("isUserVerify"));
  };

  const showToast = (msg) => {
    toast(msg);
  };

  const searchHandler = (keyword) => {
    const city = localStorage.getItem("selectedCity");
    const locality = localStorage.getItem("setLocality");
    dispatch(searchList(keyword, city, locality));
    setSearchValue(keyword);
    if (searchValue.length > 0) {
      setIsOpenSuggetion(true);
    } else {
      setIsOpenSuggetion(false);
    }
  };

  const goToStore = () => {
    setIsOpenSuggetion(false);
    if (location.pathname !== "/StoreList") {
      navigate("/StoreList");
    }
  };

  const searchShop = (keyword) => {
    setSearchData(keyword);
    setIsOpenSuggetion(false);
  };

  const defaultImage = require("../../../assets/defaultUser.png");

  return (
    <>
      <div className="mainheader">
        {props?.modelOpenCloseToggle ? (
          <div className="menuHead">
            <Menu />
          </div>
        ) : (
          <div className="FlexBox">
            
              <Link to="/" className="headerLogo">
                <img
                  className="headerlogoicon"
                  src="https://www.kubeshop.in/wp-content/uploads/2023/02/LOGO.png"
                  alt="logo icon"
                />
              </Link>
              <span onClick={() => Toggle()} className="headerMenu">
                <img
                  className="headerMenuicon"
                  src="https://www.kubeshop.in/wp-content/uploads/2023/02/MENU.png"
                  alt="menu icon"
                />
              </span>
              <span onClick={() => GotoLogin()} className="headerloginsection">
                <div className="headerLoginContentSec">
                  {/* <div className="headerloginimgsection">
                    <div className="headerloginimgsection"> */}
                      {isProfileView === "false" ? (
                        <img
                          className="headerloginicon"
                          src={defaultImage}
                        />
                      ) : (
                        <img
                          className="headerloginicon"
                          src={
                            profileImage
                              ? profileImage
                              : defaultImage
                              // : props?.user?.data?.image
                          }
                          alt="login icon"
                        />
                      )}
                    {/* </div>
                  </div> */}
                  <h1 className="headerlogintext">
                    {loginUserName ? loginUserName : "Login / Register"}
                  </h1>
                </div>
              </span>
            
            
              <div className="headerCityLocality">
                <div className="headerLocationSec">
                  <img
                    className="headerlocationicon"
                    src="https://www.kubeshop.in/wp-content/uploads/2023/02/Location.png"
                    alt="location icon"
                  />
                  <div className="headerCityLocalitySec">
                    <span className="cityLabel" onClick={() => opencity()}>
                      {currentCity ? currentCity : "Select City"}
                      <FaCaretDown size={25} />
                    </span>
                    <span className="localityLabel" onClick={() => openLocality()}>
                      {locality ? locality : "Select Locality"}
                      <FaCaretDown size={25} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="headerSearchbarSec">
                <div className="headerSearchbar">
                  <div className="headerSearchiconsec">
                    <img
                      className="headersearchicon"
                      src="https://www.kubeshop.in/wp-content/uploads/2022/05/Search.webp"
                      alt="Search"
                    />
                  </div>
                  <input
                    className="headerSearch"
                    type="text"
                    autoComplete="off"
                    placeholder="Search For Service"
                    name="search"
                    list = "store"
                    onClick={() => navigate("/StoreList")}
                    onChange={(e) => {
                      searchHandler(e.target.value)}}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") goToStore();
                    }}
                  ></input>
                  {/* <button className="headermicbtn">
                    <img
                      className="headermicicon"
                      src="https://www.kubeshop.in/wp-content/uploads/2022/05/Microphone.webp"
                      alt="Search"
                    />
                  </button> */}
                  {searchData.length > 0 && isOpenSuggetion && (
                    
                      <datalist id="store">
                      {searchData?.map((element, index) => {
                        return (
                          <option
                            key={index}
                            value={element.storename}
                            onClick={() => {searchShop(element.storename);
                            setvalue(element.storename);
                            setIsOpenSuggetion(false);
                            }}
                            className="searchItem"
                          >
                            {element.storename}
                          </option>
                        );
                      })}
                      </datalist>
                    
                  )}
                </div>
              </div>
            
            <CityModel
              show={show}
              setShow={setShow}
              city={props.cityList}
              locality={props.locality}
              cityLocalityToggle={cityLocalityToggle}
            />
          </div>
          
        )}
      </div>

      <Modal
        className="new_modal"
        show={uploadProfile}
        onHide={closeProfileDialogue}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="container box_pop_up">
          <div className="row">
            <div className="col-6">
              <form>
                <h1 className="common_header">Select Profile photo</h1>
                <input
                  type="file"
                  className="input_file_wrap"
                  onChange={(e) => setProfile(e.target.files[0])}
                />
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12 bottom_logout_wrap">
              <Button onClick={() => uploadProfilePicture()}>Upload</Button>
              
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        className="new_modal"
        show={showLogin}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        
      >
        <Modal.Body>
          {props?.screenToggle === "Register" && (
            <Registration closeModal={handleClose} showToast={showToast} />
          )}
          {props?.screenToggle === "Login" && (
            <Login closeModal={handleClose} showToast={showToast} />
          )}
          {props?.screenToggle === "OTP" && (
            <OtpScreen closeModal={handleClose}  notUser={handleClose} showToast={showToast} />
          )}
        </Modal.Body>
      </Modal>

      {/* <Modal
        className="PopUp-Modal"
        show={popUpOne}
        onHide={closePopUpOne}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        
      >
        <PopUpOne
              closePopUp={closePopUpOne}
        />
      </Modal>

      <Modal
        className="PopUp-Modal"
        show={popUpTwo}
        onHide={closePopUpTwo}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        
      >
        <PopUpTwo
              closePopUp={closePopUpTwo}
        />
      </Modal> */}
      <ToastContainer />
    </>
  );
}

export default connect(
  ({
    getCityReducer,
    getLocalityReducer,
    selectedCityName,
    toggleModel,
    toggleScreens,
    userDetail,
    vendorDetail,
  }) => ({
    cityList: getCityReducer.cityList,
    locality: getLocalityReducer.locality,
    selectedCityData: selectedCityName.selectedCityData,
    modelOpenCloseToggle: toggleModel.modelOpenCloseToggle,
    screenToggle: toggleScreens.screenToggle,
    userDetail: userDetail.userDetail,
    otpData: userDetail.otpData,
    uploadProfile: userDetail.uploadProfile,
    uploadProfile: userDetail.uploadProfile,
    user: userDetail.user,
    city: userDetail.city,
    searchList: vendorDetail.searchList,
    updateUserList: userDetail.updateUserData,
  }),
  { clearverifyOTP, profileUpload }
)(Header);
