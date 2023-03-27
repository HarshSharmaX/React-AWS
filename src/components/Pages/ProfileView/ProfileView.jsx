import React, { useEffect, useState } from "react";
import "./ProfileView.css";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  profileUpload,
  getUser,
  updateUserData,
} from "../../../Service/Actions/User";
import { getFavoriteVendor } from "../../../Service/Actions/Vendor";
import FavoriteVendor from "../FavoriteVendor/FavoriteVendor";

const ProfileView = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();
  const [uploadProfile, setUploadProfile] = useState(false);

  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    if (Object.keys(props.user).length !== 0) {
      const imageURL = props?.user?.data?.image || "";
      if (imageURL) {
        setProfile(props.user.data.image);
      }
    }
  }, [props.user]);

  useEffect(() => {
    dispatch(getFavoriteVendor(props?.user?.data?.favouriteStores));
  }, [props?.user?.data?.favouriteStores]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("kube-user"));
    setUser(userData);
    if (props.uploadProfileData.file) {
      setProfile(props.uploadProfileData.file);
    } else {
      setProfile(userData?.user?.image);
    }
  }, [props?.uploadProfileData?.file]);

  const changeImage = () => {
    setUploadProfile(true);
  };

  useEffect(() => {
    getUSerdata();
  }, [props.updateUserList, props.uploadProfileData]);

  const getUSerdata = () => {
    if (
      localStorage.getItem("kube-user") !== null &&
      Object.keys(props.user).length === 0
    ) {
      const user = JSON.parse(localStorage.getItem("kube-user"));
      dispatch(getUser(user.user.phone.slice(1)));
    } else if (Object.keys(props.user).length !== 0) {
      const phone = props?.user?.data?.phone.slice(1);
      if (phone) {
        dispatch(getUser(phone));
      }
    }
  };
  const notifyUserUpdate = () => toast(props?.updateUserList?.message ? props?.updateUserList?.message: 'User Update successfully');

  const updateUser = () => {
    if (localStorage.getItem("kube-user") !== null) {
      const userId = user?.user?._id;
      if (userId) {
        dispatch(updateUserData(userId, userName, email));
        notifyUserUpdate();
      } else {
        alert("Some Network Issue Can you please Login Again And Try");
      }
    } else {
      alert("Some Network Issue Can you please Login Again And Try");
    }
  };

  const uploadProfilePicture = () => {
    const user = JSON.parse(localStorage.getItem("kube-user"));
    const formData = new FormData();
    formData.append("userId", user.user._id);
    formData.append("file", profile);
    dispatch(profileUpload(formData));
    setUploadProfile(false);
  };

  const closeProfileDialogue = () => {
    setUploadProfile(false);
  };

  const closeProfile = () => {
    navigate("/");
    localStorage.setItem("kube-user", null);
    localStorage.setItem("selectedVendorDetail", null);
    localStorage.setItem("isUserVerify", false);
    setUploadProfile(false);
    window.location.reload();
  };

  return (
    <div>
      <div className="edit-profile-section">
        <div className="container p-50">
          <div className="col-12">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="common_header">Profile</h1>
                <div className="out_box_profile_wrap">
                  <p>
                    <span>Name :</span>
                    <input
                      className="cus_input"
                      defaultValue={user?.user?.username}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <img src={require("../../../assets/pen-edit.png")} alt="" />
                  </p>
                  <p>
                    <span>Mobile no. :</span>
                    <input className="cus_input" value={user?.user?.phone} />
                  </p>
                  <p>
                    <span>E-mail :</span>
                    <input
                      className="cus_input"
                      defaultValue={user?.user?.email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <img src={require("../../../assets/pen-edit.png")} alt="" />
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="col-12">
                  <div className="main-img">
                    {profile && (
                      <img
                      onClick={() => changeImage()}
                        style={{ height: 100, width: 100 }}
                        src={props?.user?.data?.image ? props?.user?.data?.image: profile}
                        alt=""
                      />
                    )}
                    <div className="ab_camera_icon">
                      <img
                        onClick={() => changeImage()}
                        src={require("../../../assets/edit-photo-icn.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => updateUser()}
            type="submit"
            class="localityLogoButton mt-5"
          >
            Save
          </button>
          <div className="light_grey_line col-12 divGreyColorLine">
            <span className="favVendorTitle common_header">FAV.Vendor</span>
          </div>

          <div className="p-20">
            <FavoriteVendor />
          </div>
          <br />
          <div className="light_grey_line col-12 divGreyColorLineForSignOut">
            <span
              className="signOutBtnCls common_header"
              onClick={() => closeProfile()}
            >
              Sign Out
            </span>
          </div>
        </div>
        <div className="container">
          <div className="orange_line col-12"></div>
          <div className="light_grey_line col-12 mt-2"></div>
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
      </div>
    </div>
  );
};

export default connect(
  ({ userDetail, vendorDetail }) => ({
    uploadProfileData: userDetail.uploadProfile,
    user: userDetail.user,
    updateUserList: userDetail.updateUserData,
    getFavoriteVendorLoading: vendorDetail.getFavoriteVendorLoading,
  }),
  { profileUpload }
)(ProfileView);
