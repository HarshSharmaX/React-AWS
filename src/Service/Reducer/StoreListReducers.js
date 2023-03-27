import {
    LISTCAT_FAIL,
    LISTCAT_REQUEST,
    LISTCAT_SUCCESS,
    ALL_STORE_FAIL,
    ALL_STORE_REQUEST,
    ALL_STORE_SUCCESS,
    LISTSUBCAT_FAIL,
    LISTSUBCAT_REQUEST,
    LISTSUBCAT_SUCCESS,
    CLEAR_ERRORS
} from "../Constants/StoreListConstant";


export const getCatReducer =
    (state = { cate: [] }, action) => {
        switch (action.type) {
            case LISTCAT_REQUEST:
                return {
                    loading: true,
                    cate: [],
                };
            case LISTCAT_SUCCESS:

                return {
                    loading: false,
                    cate: action.payload,
                };
            case LISTCAT_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };


export const getSubcatReducer =
    (state = { subcat: [] }, action) => {
        switch (action.type) {
            case LISTSUBCAT_REQUEST:
                return {
                    loading: true,
                    subcat: [],
                };
            case LISTSUBCAT_SUCCESS:
                return {
                    loading: false,
                    subcat: action.payload.products,

                };
            case LISTSUBCAT_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };

export const storeReducer =
    (state = { stores: [] }, action) => {
        switch (action.type) {
            case ALL_STORE_REQUEST:
                return {
                    loading: true,
                    stores: [],
                };
            case ALL_STORE_SUCCESS:
                return {
                    loading: false,
                    stores: action.payload.products,

                };
            case ALL_STORE_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };