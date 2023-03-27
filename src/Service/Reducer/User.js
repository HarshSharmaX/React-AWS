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
  USERDETAIL_CHANGE,
  UPLOAD_PROFILE_REQUEST,
  UPLOAD_PROFILE_SUCCESS,
  UPLOAD_PROFILE_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  VERIFIED_USER,
  UPDATE_USER_DATA_REQUEST,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_FAIL,
} from "../Constants/UserConstant";

const INITIAL_STATE = {
  loginDetails: {},
  userDetail: {},
  otpData: {},
  loading: false,

  uploadProfile: {},
  uploadProfileLoading: false,
  uploadProfileErr: null,

  updateUserData: {},
  updateUserDataLoading: false,
  updateUserDataErr: null,

  user: {},
  userLoading: false,
  userErr: null,

  userLoginStatus: false,
};

const userDetail = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginDetails: {},
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        otpData: "",
        loginDetails: action.payload,
        userDetail: action.payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        loginDetails: { error: action.payload },
      };

    case REGISTRATION_REQUEST:
      return {
        ...state,
        otpData: "",
        loginDetails: {},
        loading: true,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        otpData: "",
        loginDetails: action.payload,
        userDetail: action.payload.user,
      };
    case REGISTRATION_FAIL:
      return {
        ...state,
        loading: false,
        loginDetails: { error: action.payload },
      };

    case USERDETAIL_CHANGE:
      return {
        ...state,
        loading: false,
        otpData: "",
        userDetail: action.payload,
      };

    case OTPVERIFY_REQUEST:
      return {
        ...state,
        loading: false,
        otpData: "",
      };
    case OTPVERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        loginDetails: {},
        otpData: action.payload,
      };

    case OTPVERIFY_FAIL:
      return {
        ...state,
        loading: false,
        otpData: action.payload,
      };

    case UPLOAD_PROFILE_REQUEST:
      return {
        ...state,
        uploadProfile: {},
        uploadProfileLoading: true,
      };
    case UPLOAD_PROFILE_SUCCESS:
      return {
        ...state,
        uploadProfile: action.payload,
        uploadProfileLoading: false,
      };
    case UPLOAD_PROFILE_FAIL:
      return {
        ...state,
        uploadProfile: action.payload,
        uploadProfileLoading: true,
      };
    case GET_USER_REQUEST:
      return {
        ...state,
        user: {},
        userLoading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userLoading: false,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        user: action.payload,
        userLoading: true,
      };
    case VERIFIED_USER:
      return {
        ...state,
        userLoginStatus: action.payload,
      };
    case UPDATE_USER_DATA_REQUEST:
      return {
        ...state,
        updateUserData: action.payload,
        updateUserDataLoading: true,
      };
    case UPDATE_USER_DATA_SUCCESS: {
      return {
        ...state,
        updateUserData: action.payload,
        updateUserDataLoading: false,
      };
    }
    case UPDATE_USER_DATA_FAIL:
      return {
        ...state,
        updateUserDataErr: action.payload,
        updateUserDataLoading: false,
      };

    default:
      return state;
  }
};

export default userDetail;
