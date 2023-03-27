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
import React, { useState, useEffect } from 'react';

export const getOffers =(city, locality, category, sub_category)=>async(dispatch)=>{

    try {
        dispatch({type: ALL_OFFER_REQUEST});

        let link = ``;
        if(!category && !sub_category && city && locality == 'All Locality')
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}`;
        }
        else if(!category && !sub_category && city && locality)
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&locality=${locality}`;
        } 
        else if(category && !sub_category && city && locality == 'All Locality')
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&city=${city}`;
        }
        else if(category && !sub_category && city && locality)
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&city=${city}&locality=${locality}`;
        }
        else if(category && sub_category && city && locality == 'All Locality')
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&city=${city}`;
        }
        else if(category && sub_category && city && locality)
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&city=${city}&locality=${locality}`;
        }

    
        const {data} =await axios.get(link);

        
        
        dispatch({
            type:ALL_OFFER_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: ALL_OFFER_FAIL,
            payload: error.response.data.message,
        });
        
    }
    };

export const getOfferCategory = () => async (dispatch) => {

        try {
            dispatch({ type: LISTING_CAT_REQUEST });
            let link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/subcategories`;
            const { data } = await axios.get(link);
    
            dispatch({
                type: LISTING_CAT_SUCCESS,
                payload: data.products,
            })
    
        } catch (error) {
            dispatch({
                type: LISTING_CAT_FAIL,
                payload: error.response.data.message,
            });
    
        }
};

export const getOfferSubCategory = (category = "") => async (dispatch) => {

    try {
        dispatch({ type: LISTING_SUBCAT_REQUEST });

        let link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/subcategories?categories_Name=${category}`;
        const { data } = await axios.get(link);

        dispatch({
            type: LISTING_SUBCAT_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: LISTING_SUBCAT_FAIL,
            payload: error.response.data.message,
        });

    }
};

export const getOfferDetails =(id)=>async(dispatch)=>{

    try {
        dispatch({type: OFFER_DETAIL_REQUEST});

        let link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?_id=${id}`;
        
    
        const {data} =await axios.get(link);
        
        
        dispatch({
            type: OFFER_DETAIL_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: OFFER_DETAIL_FAIL,
            payload: error.response.data.message,
        });
        
    }
    };



export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};

export const getFestiveOffers =( season)=>async(dispatch)=>{

    try {
        dispatch({type: FESTIVE_OFFER_REQUEST});

        let link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?season=${season}`;
        // if(city && locality == 'All Locality')
        // {
        //     link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&season=${season}`;
        // }
        // else if(city && locality)
        // {
        //     link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&locality=${locality}&season=${season}`;
        // } 
       
    
        const {data} =await axios.get(link);
        console.log(data, "dataoffers");

        
        
        dispatch({
            type:FESTIVE_OFFER_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: FESTIVE_OFFER_FAIL,
            payload: error.response.data.message,
        });
        
    }
};


export const get50OFFOffers =(city, category)=>async(dispatch)=>{

    try {
        dispatch({type: FIFTYOFF_OFFER_REQUEST});

        let link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&city=${city}`;
    

    
        const {data} =await axios.get(link);

        
        
        dispatch({
            type:FIFTYOFF_OFFER_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: FIFTYOFF_OFFER_FAIL,
            payload: error.response.data.message,
        });
        
    }
    };


