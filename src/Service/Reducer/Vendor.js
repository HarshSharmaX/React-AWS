import {
  VENDOR_REQUEST,
  VENDOR_SUCCESS,
  VENDOR_FAIL,
  VENDOR_FILTER_REQUEST,
  VENDOR_FILTER_SUCCESS,
  VENDOR_FILTER_FAIL,
  VENDOR_DETAIL,
  SELECTED_VENDOR_DETAIL,
  VENDOR_UNLIKE,
  VENDOR_LIKE,
  VENDOR_REVIEW_REQUEST,
  VENDOR_REVIEW_SUCCESS,
  VENDOR_REVIEW_FAIL,
  GET_VENDOR_REVIEW_REQUEST,
  GET_VENDOR_REVIEW_SUCCESS,
  GET_VENDOR_REVIEW_FAIL,
  GET_CATEGORY_LIST_REQUEST,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_FAIL,

  GET_SUB_CATEGORY_LIST_REQUEST,
  GET_SUB_CATEGORY_LIST_SUCCESS,
  GET_SUB_CATEGORY_LIST_FAIL,

  GET_FAVORITE_VENDOR_REQUEST,
  GET_FAVORITE_VENDOR_SUCCESS,
  GET_FAVORITE_VENDOR_FAIL,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
} from "../Constants/VendorConstant";

const INITIAL_STATE = {
  vendorList: {},
  vendorLoading: false,
  vendorError: null,

  vendorFilterList: {},
  vendorFilterLoading: false,
  vendorFilterError: null,

  vendorReviewList: {},
  vendorReviewLoading: false,
  vendorReviewError: null,

  getVendorReviewList: {},
  getVendorReviewLoading: false,
  getVendorReviewError: null,

  getCategoryList: {},
  getCategoryLoading: false,
  getCategoryError: null,

  getSubCategoryList: {},
  getSubCategoryLoading: false,
  getSubCategoryError: null,

  vendorDetailData: {},
  selectedVendorDetail: {},

  searchList: {},
  searchLoading: false,
  searchError: null,

  like: {},
  unLike: {},
};

const vendorDetail = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case VENDOR_REQUEST: {
      return {
        ...state,
        vendorList: {},
        vendorLoading: true,
      };
    }
    case VENDOR_SUCCESS: {
      return {
        ...state,
        vendorLoading: false,
        vendorList: action.payload,
      };
    }
    case VENDOR_FAIL: {
      return {
        ...state,
        vendorLoading: true,
        vendorList: action.payload,
      };
    }
    case VENDOR_FILTER_REQUEST: {
      return {
        ...state,
        vendorFilterList: {},
        vendorFilterLoading: true,
      };
    }
    case VENDOR_FILTER_SUCCESS: {
      return {
        ...state,
        vendorFilterLoading: false,
        vendorFilterList: action.payload,
      };
    }
    case VENDOR_FILTER_FAIL: {
      return {
        ...state,
        vendorFilterLoading: false,
        vendorFilterList: action.payload,
      };
    }
    case VENDOR_DETAIL: {
      return {
        ...state,
        vendorDetailData: action.payload,
      };
    }

    case SELECTED_VENDOR_DETAIL: {
      return {
        ...state,
        selectedVendorDetail: action.payload,
      };
    }
    case VENDOR_LIKE: {
      return {
        ...state,
        like: action.payload,
      };
    }
    case VENDOR_UNLIKE: {
      return {
        ...state,
        unLike: action.payload,
      };
    }

    case VENDOR_REVIEW_REQUEST: {
      return {
        ...state,
        vendorReviewList: {},
        vendorReviewLoading: true,
      };
    }
    case VENDOR_REVIEW_SUCCESS: {
      return {
        ...state,
        vendorReviewList: action.payload,
        vendorReviewLoading: false,
      };
    }
    case VENDOR_REVIEW_FAIL: {
      return {
        ...state,
        vendorReviewError: action.payload,
        vendorReviewLoading: true,
      };
    }
    case GET_VENDOR_REVIEW_REQUEST: {
      return {
        ...state,
        getVendorReviewList: {},
        getVendorReviewLoading: true,
      };
    }
    case GET_VENDOR_REVIEW_SUCCESS: {
      return {
        ...state,
        getVendorReviewList: action.payload,
        getVendorReviewLoading: false,
      };
    }
    case GET_VENDOR_REVIEW_FAIL: {
      return {
        ...state,
        getVendorReviewError: action.payload,
        getVendorReviewLoading: true,
      };
    }

    case GET_CATEGORY_LIST_REQUEST: {
      return {
        ...state,
        getCategoryList: {},
        getCategoryLoading: true,
      };
    }
    case GET_CATEGORY_LIST_SUCCESS: {
      return {
        ...state,
        getCategoryList: action.payload,
        getCategoryLoading: false,
      };
    }
    case GET_CATEGORY_LIST_FAIL: {
      return {
        ...state,
        getCategoryError: action.payload,
        getCategoryLoading: true,
      };
    }

    case GET_SUB_CATEGORY_LIST_REQUEST: {
      return {
        ...state,
        getSubCategoryList: {},
        getSubCategoryLoading: true,
      };
    }
    case GET_SUB_CATEGORY_LIST_SUCCESS: {
      return {
        ...state,
        getSubCategoryList: action.payload,
        getSubCategoryLoading: false,
      };
    }
    case GET_SUB_CATEGORY_LIST_FAIL: {
      return {
        ...state,
        getSubCategoryError: action.payload,
        getSubCategoryLoading: true,
      };
    }

    case SEARCH_REQUEST: {
      return {
        ...state,
        searchList: {},
        searchLoading: true,
      };
    }
    case SEARCH_SUCCESS: {
      return {
        ...state,
        searchList: action.payload,
        searchLoading: false,
      };
    }
    case SEARCH_FAIL: {
      return {
        ...state,
        searchError: action.payload,
        searchLoading: true,
      };
    }
    case GET_FAVORITE_VENDOR_REQUEST: {
      return {
        ...state,
        getFavoriteVendorList: {},
        getFavoriteVendorLoading: true,
      };
    }
    case GET_FAVORITE_VENDOR_SUCCESS: {
      return {
        ...state,
        getFavoriteVendorList: action.payload,
        getFavoriteVendorLoading: false,
      };
    }
    case GET_FAVORITE_VENDOR_FAIL: {
      return {
        ...state,
        getFavoriteVendorList: action.payload,
        getFavoriteVendorLoading: true,
      };
    }

    default:
      return state;
  }
};

export default vendorDetail;
