import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
  OTPVERIFY_REQUEST,
  OTPVERIFY_SUCCESS,
  OTPVERIFY_FAIL,
  UPLOAD_PROFILE_REQUEST,
  UPLOAD_PROFILE_SUCCESS,
  UPLOAD_PROFILE_FAIL,

  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,

  VERIFIED_USER,

  UPDATE_USER_DATA_REQUEST,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_FAIL
} from "../Constants/UserConstant";
import axios from "axios";

// this api is use for user login
export const logInUser = (phone,username) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });
    return axios
      .post(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/login`, { phone: phone, username:username })
      .then((res) => {
        localStorage.setItem("kube-user", JSON.stringify(res.data));
        if (res && res.data && res.data.data) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAIL,
          payload: error,
        });
      });
  };
};

// this api is use for user registration
export const registrationData = (registrationData) => {
  return (dispatch) => {
    dispatch({
      type: REGISTRATION_REQUEST,
    });
    return axios
      .post(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/signup`, registrationData)
      .then((res) => {
      localStorage.setItem("kube-user", JSON.stringify(res.data));
        if (res && res.data && res.data.data) {
          dispatch({
            type: REGISTRATION_SUCCESS,
            payload: res.data.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: REGISTRATION_FAIL,
          payload: error.response.data,
        });
      });
  };
};

// this api is use for clear verify
export const clearverifyOTP = () => {
  return (dispatch) => {
    dispatch({
      type: OTPVERIFY_SUCCESS,
      payload: "",
    });
    dispatch({
      type: REGISTRATION_SUCCESS,
      payload: {},
    });
  };
};

// this api is use for verify otp
export const verifyOTP = (otpData) => {
  return (dispatch) => {
    dispatch({
      type: OTPVERIFY_REQUEST,
    });
    return axios
      .post(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/verifyOTP`, otpData)
      .then((res) => {
        localStorage.setItem("isUserVerify", true);
        dispatch({
          type: OTPVERIFY_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: OTPVERIFY_FAIL,
          payload: error.response.data,
        });
      });
  };
};

// this api is use for upload profile
export const profileUpload = (formData) => {
  return (dispatch) => {
    dispatch({
      type: UPLOAD_PROFILE_REQUEST,
      payload: {},
    })
    return axios.post(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/upload`, formData).then((res) => {
      dispatch({
        type: UPLOAD_PROFILE_SUCCESS,
        payload: res
      });
    }).catch((err) => {
      dispatch({
        type: UPLOAD_PROFILE_FAIL,
        payload: err
      })
    })
  }
}

// this api is use for get user details
export const getUser = (phone) => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_REQUEST,
      payload: {},
    })
    return axios.get(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/user`, {
      params: {
        phone: phone
      }
    }).then((res) => {
      dispatch({
        type: GET_USER_SUCCESS,
        payload: res.data
      });
    }).catch((err) => {
      dispatch({
        type: GET_USER_FAIL,
        payload: err
      })
    })
  }
}

export const updateUserData = (id, username, email) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_USER_DATA_REQUEST,
      payload: {}
    })
    let userDetails = {
      id: id,
      username: username,
      email: email
    }
    return axios.put(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/user`, userDetails).then((res) => {
      localStorage.setItem("kube-user", JSON.stringify({ user: res.data.data }))
      dispatch({
        type: UPDATE_USER_DATA_SUCCESS,
        payload: res.data
      })
    }).catch((err) => {
      dispatch({
        type: UPDATE_USER_DATA_FAIL,
        payload: err
      })
    })
  }
}

// not not used 
export const verifiedUser = (status) => {
  return (dispatch) => {
    dispatch({
      type: VERIFIED_USER,
      payload: status
    })
  }
}
