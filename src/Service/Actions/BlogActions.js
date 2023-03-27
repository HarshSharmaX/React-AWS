import axios from "axios";
import {
    BLOG_FAIL,
    BLOG_REQUEST,
    BLOG_SUCCESS,

    BLOG_CAT_FAIL,
    BLOG_CAT_REQUEST,
    BLOG_CAT_SUCCESS,

    SINGLE_BLOG_FAIL,
    SINGLE_BLOG_REQUEST,
    SINGLE_BLOG_SUCCESS,

    RELATED_BLOG_FAIL,
    RELATED_BLOG_REQUEST,
    RELATED_BLOG_SUCCESS,
    
    CLEAR_ERRORS
} from "../Constants/BlogConstants";
import React, { useState, useEffect } from 'react';

export const getBlog = (category) => async (dispatch) => {


    try {
        dispatch({ type: BLOG_REQUEST });

        let link = "";
        if(!category){
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/blog/all`;
        }
        else if(category){
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/blog/all?category=${category}`
        }
        
        
        

        const { data } = await axios.get(link);
        
    
        dispatch({
            type: BLOG_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: BLOG_FAIL,
            payload: error.response.data.message,
        });

    }
};


export const getBlogcategory = () => async (dispatch) => {


    try {
        dispatch({ type: BLOG_CAT_REQUEST });

        let link = "https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/blog/category";
        
        
        

        const { data } = await axios.get(link);
        
        dispatch({
            type: BLOG_CAT_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: BLOG_CAT_FAIL,
            payload: error.response.data.message,
        });

    }
};


export const getSingleBlog = (title) => async (dispatch) => {


    try {
        dispatch({ type: SINGLE_BLOG_REQUEST });

        const link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/blog/all?slugtitle=${title}`;
        const { data } = await axios.get(link);
        
    
        dispatch({
            type: SINGLE_BLOG_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: SINGLE_BLOG_FAIL,
            payload: error.response.data.message,
        });

    }
};


export const getRelatedBlog = (category) => async (dispatch) => {


    try {
        dispatch({ type: RELATED_BLOG_REQUEST });

        const link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/blog/all?category=${category}`;
        const { data } = await axios.get(link);
        
    
        dispatch({
            type: RELATED_BLOG_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: RELATED_BLOG_FAIL,
            payload: error.response.data.message,
        });

    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};