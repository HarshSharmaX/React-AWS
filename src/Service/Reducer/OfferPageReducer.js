import axios from "axios";
import {
    ALL_OFFER_REQUEST,
    ALL_OFFER_SUCCESS,
    ALL_OFFER_FAIL,

    LISTING_CAT_REQUEST,
    LISTING_CAT_SUCCESS,
    LISTING_CAT_FAIL,

    LISTING_SUBCAT_REQUEST,
    LISTING_SUBCAT_SUCCESS,
    LISTING_SUBCAT_FAIL,
    
    OFFER_DETAIL_FAIL,
    OFFER_DETAIL_REQUEST,
    OFFER_DETAIL_SUCCESS,

    FESTIVE_OFFER_REQUEST,
    FESTIVE_OFFER_SUCCESS,
    FESTIVE_OFFER_FAIL,

    FIFTYOFF_OFFER_REQUEST,
    FIFTYOFF_OFFER_SUCCESS,
    FIFTYOFF_OFFER_FAIL,
    
    CLEAR_ERRORS
} from "../Constants/OfferPageConstants";

export const offersReducer =
    (state = { offers: [] }, action) => {
        switch (action.type) {
            case ALL_OFFER_REQUEST:
                return {
                    loading: true,
                    offers: [],
                };
            case ALL_OFFER_SUCCESS:
                return {
                    loading: false,
                    offers: action.payload.products,
                };
                
            case ALL_OFFER_FAIL:
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

export const getOfferCategoryReducer =
    (state = { cate: [] }, action) => {
        switch (action.type) {
            case LISTING_CAT_REQUEST:
                return {
                    loading: true,
                    cate: [],
                };
            case LISTING_CAT_SUCCESS:

                return {
                    loading: false,
                    cate: action.payload,
                };
            case LISTING_CAT_FAIL:
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

export const getOfferSubCategoryReducer =
    (state = { subcat: [] }, action) => {
        switch (action.type) {
            case LISTING_SUBCAT_REQUEST:
                return {
                    loading: true,
                    subcat: [],
                };
            case LISTING_SUBCAT_SUCCESS:
                return {
                    loading: false,
                    subcat: action.payload.products,

                };
            case LISTING_SUBCAT_FAIL:
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

export const offerDetailReducer =
    (state = { offers: [] }, action) => {
        switch (action.type) {
            case OFFER_DETAIL_REQUEST:
                return {
                    loading: true,
                    offers: [],
                };
            case OFFER_DETAIL_SUCCESS:
                
                return {
                    loading: false,
                    offers: action.payload.products,
                };
                
            case OFFER_DETAIL_FAIL:
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

export const festiveOffersReducer =
    (state = { festiveoffers: [] }, action) => {
        switch (action.type) {
            case FESTIVE_OFFER_REQUEST:
                return {
                    loading: true,
                    festiveoffers: [],
                };
            case FESTIVE_OFFER_SUCCESS:
                return {
                    loading: false,
                    festiveoffers: action.payload.products,
                };
                
            case FESTIVE_OFFER_FAIL:
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

export const fiftyOFFOffersReducer =
    (state = { offers: [] }, action) => {
        switch (action.type) {
            case FIFTYOFF_OFFER_REQUEST:
                return {
                    loading: true,
                    offers: [],
                };
            case FIFTYOFF_OFFER_SUCCESS:
                return {
                    loading: false,
                    offers: action.payload.products,
                };
                
            case FIFTYOFF_OFFER_FAIL:
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