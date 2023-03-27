import React, { useEffect, useState } from "react";
import "./store-list.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaRegHeart, FaCaretDown, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import {
  vendorData,
  filterVendorData,
  SelectedVendorDetail,
  likeVendor,
  unLikeVendor,
  getCategoryList,
  getSubCategoryList,
} from "../../../Service/Actions/Vendor";
import { screenToggle } from "../../../Service/Actions/Action";
import { Modal } from "react-bootstrap";

import { getUser } from "../../../Service/Actions/User";
import StarRatings from "react-star-ratings";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import OtpScreen from "../OtpScreen/OtpScreen";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StoreList = (props) => {

  console.log("Storelist Data" , props);
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [city, setCity] = useState();
  const [locality, setLocality] = useState();
  const [loginStatus, setLoginStatus] = useState();
  const [storeData, setStoreData] = useState([]);
  
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("cat")
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState(undefined);
  const [onlineShop, setOnlineShop] = useState(false);
  const [homeDelivery, setHomeDelivery] = useState(false);
  const [callToggle, setCallToggle] = useState(false);
  const [showLogin, setSetLoginFlag] = useState(false);
  const [subcategories, setSubcategories] = useState();

  
  console.log("Login Status", loginStatus)
  useEffect(() => {
    dispatch(vendorData());
    const selectedCity = localStorage.getItem("selectedCity");
    const locality = localStorage.getItem("setLocality");
    setCity(selectedCity);
    setLocality(locality);
    setLoginStatus(localStorage.getItem("isUserVerify"));
    dispatch(filterVendorData(city, locality));
  }, [
    city,
    locality,
    loginStatus,
    props?.userLoginStatus,
    props?.otpData?.msg,
  ]);

  console.log("store", storeData);
  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  const showHomeDeliveryData = () => {
    setHomeDelivery(!homeDelivery);
  };

  useEffect(() => {
    filterCategoryWise();
  }, [
    selectedCategory,
    selectedSubCategory,
    onlineShop,
    homeDelivery,
    props?.vendorFilterList?.products,
  ]);

  useEffect(() => {
    if (props.searchList.products !== undefined) {
      setStoreData(props.searchList.products);
    }
  });

  var categories = [];
  var categoriesOnly = [];
  props?.vendorFilterList?.products?.map((element) => {
    if (
      !categories.filter(
        (x) =>
          x.category == element.category &&
          x.sub_category == element.sub_category
      ).length > 0
    ) {
      categories.push({
        category: element.category,
        sub_category: element.sub_category,
      });
    }
    if (!(categoriesOnly.indexOf(element.category) > -1)) {
      categoriesOnly.push(element.category);
    }
  });
  if (categories.length > 0) {
  }
  const filterCategoryWise = () => {
    let FilterData = [];
    FilterData = props?.vendorFilterList?.products;
    if (FilterData && FilterData.length > 0) {
      if (
        selectedCategory == undefined &&
        selectedSubCategory == undefined &&
        !onlineShop &&
        !homeDelivery
      ) {
        setStoreData(FilterData);
      } else if (
        !(selectedCategory == undefined || selectedCategory == "Category")
      ) {
        FilterData = FilterData.filter((x) => x.category === selectedCategory);
      }
      if (
        !(
          selectedSubCategory == undefined ||
          selectedSubCategory == "Sub-Category"
        )
      ) {
        FilterData = FilterData.filter(
          (x) => x.sub_category == selectedSubCategory
        );
      }
      if (onlineShop) {
        FilterData = FilterData.filter((x) => x.onlineShop == true);
      }
      if (homeDelivery) {
        FilterData = FilterData.filter((x) => x.homeDelivery == true);
      }
    }
    setStoreData(FilterData);
  };

  const getSubcategoryDataList = () => {
    if (props.getSubCategoryListData.products !== undefined) {
      if (selectedCategory == "Category") {
        setSubcategories([]);
      } else {
        setSubcategories(props.getSubCategoryListData.products[0].sub_cat);
      }
    }
  };

  useEffect(() => {
    if(props?.user?.data?.phone){
      dispatch(getUser(props?.user?.data?.phone?.slice(1)));
    }else {
      const phone = JSON.parse(localStorage.getItem('kube-user'));
      dispatch(getUser(phone?.data?.phone.slice(1)));
    }
  }, [props.unLike, props.like]);

  const GoProductDetail = (data) => {
    if (loginStatus === "true") {
      dispatch(SelectedVendorDetail(data));
      localStorage.setItem("selectedVendorDetail", JSON.stringify(data));
      navigate("/vendorDetail/" + data?._id);
    } else {
      setSetLoginFlag(true);
      dispatch(screenToggle("Login"));
  
    }
  };

  console.log("////",loginStatus)

  console.log("||||",props?.userLoginStatus)

  const handleClose = () => {
    setSetLoginFlag(false);
  }
  const showToast = () => {
    setSetLoginFlag('Enter otp');
  }

  const StoreLike = (vendor) => {
    dispatch(likeVendor(props?.user?.data?._id, vendor));
  };
  const StoreUnLike = (vendor) => {
    dispatch(unLikeVendor(props?.user?.data?._id, vendor));
  };



  return (
    <div className="p-10">
      <Helmet>
        <title>StoreList</title>
        <meta name="Description" content="StoreList"/>
      </Helmet>
      <div className="shorting_title_wrap mb-md-4 mb-3">
        <h1 className="common_header">Store List</h1>
      </div>

      {props.searchList.products === undefined && (
        <div className="filtring_section mt-md-3 mt-2 mb-4">
          <div className="filter_list_name">
            <select
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedSubCategory(undefined);
                dispatch(getSubCategoryList(e.target.value));
                getSubcategoryDataList();
              }}
              className=" mt-0"
            >
              <option value={"Category"} selected={true}>
                Category
              </option>
              {props?.getCategoryListData?.products?.map((x) => (
                <option value={x}>{x}</option>
              ))}
            </select>
            <FaCaretDown />
          </div>
          <div className="filter_list_name">
            <select
              onChange={(e) => {
                setSelectedSubCategory(e.target.value);
                if (selectedCategory == "Category") {
                  setSelectedSubCategory(null);
                }
              }}
              className=" mt-0"
            >
              <option selected={true}>Sub-Category</option>
              {props.getSubCategoryListData.products !== undefined &&
                props.getSubCategoryListData.products[0].sub_cat.map(
                  (data, index) => (
                    <option key={index} value={data.subcat_Name}>
                      {data.subcat_Name}
                    </option>
                  )
                )}
            </select>
            <FaCaretDown />
          </div>

          <div className="filter_list_name mt-0">
            Online Shop
            <input
              onChange={() => setOnlineShop(!onlineShop)}
              type="checkbox"
              name=""
              id=""
            />
          </div>
          <div className="filter_list_name mt-0">
            Home Delivery
            <input
              onChange={() => showHomeDeliveryData()}
              type="checkbox"
              name=""
              id=""
            />
          </div>
        </div>
      )}
      <div className="row">
        {props?.vendorLoading && <h1 className="loading">Loading...</h1>}
        {props?.vendorFilterList?.products &&
          storeData?.map((data, index) => (
            <>
              <div
                key={index}
                className="col-lg-4 inner_listing_box text-center mb-md-5 mb-3"
              >
                <div>

                  <div
                    onClick={() => GoProductDetail(data)}
                    className="SLimage_wrap"
                  >
                    {data.images[0].url == "" ? (
                      <img src={require("../../../assets/Noimage.jpg")} />
                      
                    ) : (
                      
                      <img src={data.images[0].url} alt="" />
                    )}
                  </div>

                  <div className="details_overview_wrap mt-md-3 mt-2 text-start">
                    <div className="inner_details_overview_wrap">
                      <div className="ab_heart_icon">
                        {loginStatus == "true" && (
                          <>
                            {props?.user?.data?.favouriteStores?.indexOf(
                              data?._id
                            ) !== -1 ? (
                              <FaHeart
                                onClick={() => StoreUnLike(data?._id)}
                                color="red"
                              />
                            ) : (
                              <FaRegHeart
                                onClick={() => StoreLike(data?._id)}
                              />
                            )}
                          </>
                        )}
                      </div>
                      <div className="ab_gold_silver_tag">
                        {data.package === "Platinum" && (
                          <img
                            src={require("../../../assets/Badges 03.png")}
                            alt=""
                          />
                        )}
                        {data.package === "Free" && (
                          <img
                            src={require("../../../assets/Badges 05.png")}
                            alt=""
                          />
                        )}
                        {data.package === "Bronze" && (
                          <img
                            src={require("../../../assets/Badges 04.png")}
                            alt=""
                          />
                        )}
                        {data.package === "Silver" && (
                          <img
                            src={require("../../../assets/Badges 02.png")}
                            alt=""
                          />
                        )}
                        {data.package === "Gold" && (
                          <img
                            src={require("../../../assets/Badges 01.png")}
                            alt=""
                          />
                        )}
                        {data.package === "Basic" && (
                          <img
                            src={require("../../../assets/Badges 06.png")}
                            alt=""
                          />
                        )}
                      </div>
                      <p className="title_head">{data.storename}</p>

                      <div className="addressbar_wrap">
                        <a href="" className="tag_add">
                          Add.
                        </a>
                        <p className="mb-md-1 mb-0">{data.address}</p>
                      </div>

                      <div className="review_wrap_section">
                        <div className="rieview_list">
                          <div className="starRatingCls">
                            <StarRatings
                              rating={data?.ratings}
                              starRatedColor="#25255c"
                              numberOfStars={5}
                              name="rating"
                              starDimension={"16px"}
                              starSpacing={"1px"}
                            />
                          </div>
                          <p className="review_write_wrap mt-2 mx-1">
                            {"( " + data.numOfReviews + " Reviews )"}
                          </p>
                          {/* {loginStatus === "true" && (
                            <div>
                              {callToggle === false ? (
                                <button
                                  onClick={() => setCallToggle(!callToggle)}
                                  href=""
                                  className="call_now_wrap mx-2 mt-2"
                                >
                                  {" "}
                                  <FaPhoneAlt /> Call now
                                </button>
                              ) : (
                                <span
                                  onClick={() => setCallToggle(!callToggle)}
                                >
                                  <a href="tel:+9571515056">+9571515056</a>
                                </span>
                              )}
                            </div>
                          )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    
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
            <OtpScreen closeModal={handleClose} showToast={showToast} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default connect(({ vendorDetail, userDetail, toggleScreens }) => ({
  vendorList: vendorDetail.vendorList,
  vendorLoading: vendorDetail.vendorLoading,
  vendorFilterList: vendorDetail.vendorFilterList,
  otpData: userDetail.otpData,
  userLoginStatus: userDetail.userLoginStatus,
  user: userDetail.user,
  like: vendorDetail.like,
  unLike: vendorDetail.unLike,
  getCategoryListData: vendorDetail.getCategoryList,
  getSubCategoryListData: vendorDetail.getSubCategoryList,
  searchList: vendorDetail.searchList,
  screenToggle: toggleScreens.screenToggle,
}))(StoreList);
