import { STOREPAGE_FAIL,
        STOREPAGE_REQUEST,
        STOREPAGE_SUCCESS,
        STOREPAGEOFFER_FAIL,
        STOREPAGEOFFER_REQUEST,
        STOREPAGEOFFER_SUCCESS,
        STOREPAGEPRODUCT_FAIL,
        STOREPAGEPRODUCT_REQUEST,
        STOREPAGEPRODUCT_SUCCESS,
        STOREPAGEABOUT_FAIL,
        STOREPAGEABOUT_REQUEST,
        STOREPAGEABOUT_SUCCESS,

        CLEAR_ERRORS } from "../Constants/StorePageConstant";


export const storePageReducer =
(state ={storepage :[]} ,action)=>{
    switch (action.type) {
        case STOREPAGE_REQUEST:
            return {
                loading: true,
                storepage: [],
            };
        case STOREPAGE_SUCCESS:
            return {
                loading: false,
                storepage: action.payload.products,
                
            };
        case STOREPAGE_FAIL:
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

export const storePageOfferReducer =
(state ={offers :[]} ,action)=>{
    switch (action.type) {
        case STOREPAGEOFFER_REQUEST:
            return {
                loading: true,
                offers: [],
            };
        case STOREPAGEOFFER_SUCCESS:
            return {
                loading: false,
                offers: action.payload.products[0].offer,
                
            };
        case STOREPAGEOFFER_FAIL:
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

export const storePageProductReducer =
(state ={products :[]} ,action)=>{
    switch (action.type) {
        case STOREPAGEPRODUCT_REQUEST:
            return {
                loading: true,
                Products: [],
            };
        case STOREPAGEPRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.products[0].products,
                
            };
        case STOREPAGEPRODUCT_FAIL:
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

export const storePageAboutReducer =
(state ={About :[]} ,action)=>{
    switch (action.type) {
        case STOREPAGEABOUT_REQUEST:
            return {
                loading: true,
                About: [],
            };
        case STOREPAGEABOUT_SUCCESS:
            return {
                loading: false,
                About: action.payload,
                
            };
        case STOREPAGEABOUT_FAIL:
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