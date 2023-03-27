import React, { useEffect } from "react";
import "./Login.css";
import "../../layout/header/Header.css";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';

import { connect, useDispatch } from "react-redux";
import { screenToggle } from "../../../Service/Actions/Action";
import { logInUser } from "../../../Service/Actions/User";

const phoneRegExp = /^((\+91?)|\+)?[7-9][0-9]{9}$/;

const Login = (props) => {
  const user = JSON.parse(localStorage.getItem("kube-user"));
  const username = user?.user?.username;
  console.log(username,"username")
  
  const dispatch = useDispatch();

  const GotoRegister = () => {
    dispatch(screenToggle("Register"));
  };

  useEffect(() => {
    if (props.userDetail.loginDetails?.hash) {
      dispatch(screenToggle("OTP"));
    }
  }, [props.userDetail.loginDetails]);

  useEffect(() => {
    toast(props?.loginDetails?.error?.response?.data?.message);
  }, [props?.loginDetails?.error?.response?.data?.message]);

  const GotoOTP = (mobileNo,username) => {
    props.logInUser(mobileNo,username);
  };

  return (
    <div className="login_loginSection">
      <button
        type="button"
        className="ab_close_menu"
        onClick={() => props.closeModal()}
      >
        <span className="closebtn">&times;</span>
      </button>

      <div className="login_ab_left_image">
        <img src={require("../../../assets/left-side.png")} alt="" />
      </div>
      <div className="login_ab_right_image">
        <img src={require("../../../assets/right-side.png")} alt="" />
      </div>

      <div className="container">
        <div className="inner-loginSection text-center">
          <h1 className="login_title_header">Login</h1>
        </div>

        <Formik
          initialValues={{
            mobileNumber: "+91",
          }}
          validationSchema={Yup.object().shape({
            mobileNumber: Yup.string()
              .required("+91 Add or Phone number is not valid")
              .matches(phoneRegExp, "+91 Add or Phone number is not valid")
              .min(13, "to short")
              .max(13, "to long"),
          })}
          onSubmit={(fields) => {
            GotoOTP(fields.mobileNumber,username);
          }}
          render={({ errors, status, touched }) => (
            <Form>
              <div className="login_headerSearchbar cus_login_search mt-md-4 mt-4">
                <Field
                  name="mobileNumber"
                  class="headerSearch"
                  type="text"
                  className={
                    "headerSearch form-control" +
                    (errors.mobileNumber && touched.mobileNumber
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="mobileNumber"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="login_loginNextbutton text-center">
                <button type="submit" class="localityLogoButton mt-md-5 mt-3">
                  Next
                </button>
              </div>
            </Form>
          )}
        />

        <div className="col-12 mt-md-4 mb-md-4 mt-4 mb-4 login_registerSection">
          <div className="row text-center justify-content-center">
            <div className="col-md-7 text-end">
              <p>Haven’t Registered With Us?</p>
            </div>
            <div className="col-md-5 text-middle">
              <span onClick={() => GotoRegister()} className="login_registerNow">
                Register Now
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="login_orange_line col-12"></div>
      <div className="login_light_grey_line col-12 mt-2"></div>

      <div className="container-fluid">
        <img
          className="login_bottomimage mt-3"
          src={require("../../../assets/building.png")}
          alt=""
        />
      </div>
    </div>
  );
};

Login.propTypes = {};
Login.defaultProps = {};

const actionCreators = {
  logInUser,
};

export default connect(
  ({ userDetail }) => ({
    userDetail,
    loginDetails: userDetail.loginDetails,
  }),
  actionCreators
)(Login);
