import {
  VENDOR_REQUEST,
  VENDOR_SUCCESS,
  VENDOR_FAIL,
  VENDOR_FILTER_REQUEST,
  VENDOR_FILTER_SUCCESS,
  VENDOR_FILTER_FAIL,
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
import axios from "axios";

// this api is used for get vendor data
export const vendorData = () => {
  return (dispatch) => {
    dispatch({
      type: VENDOR_REQUEST,
      payload: {},
    });
    return axios
      .get(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all`)
      .then((res) => {
        dispatch({
          type: VENDOR_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: VENDOR_FAIL,
          payload: err,
        });
      });
  };
};

// this api is used for get vendor data city and locality wise
export const filterVendorData = (city, locality) => {
  return (dispatch) => {
    dispatch({
      type: VENDOR_FILTER_REQUEST,
      payload: {},
    });
   
    let link = ``;
    if (locality == "All Locality")
    {
      link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}`;
    }
    else if (locality)
    {
      link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&locality=${locality}`;
    }
    
    return axios
    
      .get(link)

    
      .then((res) => {
        dispatch({
          type: VENDOR_FILTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: VENDOR_FILTER_FAIL,
          payload: err,
        });
      });
  };
};

export const getCategoryList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_CATEGORY_LIST_REQUEST,
      payload: {},
    });
    return axios
      .get(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/categories`)
      .then((res) => {
        dispatch({
          type: GET_CATEGORY_LIST_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_CATEGORY_LIST_FAIL,
          payload: err,
        });
      });
  };
};

export const getSubCategoryList = (selectedCategory) => {
  if (selectedCategory != "Category") {
    return (dispatch) => {
      dispatch({
        type: GET_SUB_CATEGORY_LIST_REQUEST,
        payload: {},
      });
      return axios
        .get(
          `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/subcategories?categories_Name=` +
          selectedCategory
        )
        .then((res) => {
          dispatch({
            type: GET_SUB_CATEGORY_LIST_SUCCESS,
            payload: res.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: GET_SUB_CATEGORY_LIST_FAIL,
            payload: err,
          });
        });
    };
  }
};

export const getFavoriteVendor = (favVendorList) => {
  return (dispatch) => {
    dispatch({
      type: GET_FAVORITE_VENDOR_REQUEST,
      payload: {},
    });
    
    return axios.post('https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/user/fav',{favVendorList: favVendorList})
      .then((res) => {
        dispatch({
          type: GET_FAVORITE_VENDOR_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_FAVORITE_VENDOR_FAIL,
          payload: err,
        });
      });
  };
};


export const reviewRequest = (storeId, comment, rating, email) => {
  return (dispatch) => {
    dispatch({
      type: VENDOR_REVIEW_REQUEST,
      payload: {},
    });
    return axios
      .put(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/review/new`, {
        storeId: storeId,
        comment: comment,
        rating: rating,
        email: email,
      })
      .then((res) => {
        dispatch({
          type: VENDOR_REVIEW_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: VENDOR_REVIEW_FAIL,
          payload: err,
        });
      });
  };
};

//get reviews
export const getReviewRequest = (perticularVendorId) => {
  return (dispatch) => {
    dispatch({
      type: GET_VENDOR_REVIEW_REQUEST,
      payload: {},
    });
    return axios
      .get(
        `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?_id=` +
        perticularVendorId
      )
      .then((res) => {
        dispatch({
          type: GET_VENDOR_REVIEW_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_VENDOR_REVIEW_FAIL,
          payload: err,
        });
      });
  };
};

export const SelectedVendorDetail = (data) => {
  return (dispatch) => {
    dispatch({
      type: SELECTED_VENDOR_DETAIL,
      payload: data,
    });
  };
};



export const likeVendor = (user, vendor) => {
  return (dispatch) => {
    axios
      .put(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/user/like`, {
        user: user,
        store: vendor,
      })
      .then((res) => {
        dispatch({
          type: VENDOR_LIKE,
          payload: res,
        });
      })
      .catch((err) => {
        console.log("-------- err ---------", err);
      });
  };
};
export const unLikeVendor = (user, vendor) => {
  return (dispatch) => {
    axios
      .put(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/user/unlike`, {
        user: user,
        store: vendor,
      })
      .then((res) => {
        debugger
        dispatch({
          type: VENDOR_UNLIKE,
          payload: res,
        });
      })
      .catch((err) => {
        console.log("-------- err ---------", err);
      });
  };
};

// Search field
export const searchList = (keyword, city, locality) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_REQUEST,
      payload: {},
    });
    console.log("searchLocality", locality);
    return axios
      .get(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?keyword=${keyword}`,{
        params: {
          city: city,
          locality: locality == 'All Locality' ? null: locality,
        },
      })
      .then((res) => {
        dispatch({
          type: SEARCH_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SEARCH_FAIL,
          payload: err,
        });
      });
  };
};