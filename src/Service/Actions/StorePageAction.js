import axios from "axios";
import { STOREPAGE_FAIL,
    STOREPAGE_REQUEST,
    STOREPAGE_SUCCESS,
    STOREPAGEOFFER_FAIL,
        STOREPAGEOFFER_REQUEST,
        STOREPAGEOFFER_SUCCESS,
        STOREPAGEABOUT_FAIL,
        STOREPAGEABOUT_REQUEST,
        STOREPAGEABOUT_SUCCESS,
        STOREPAGEPRODUCT_FAIL,
        STOREPAGEPRODUCT_REQUEST,
        STOREPAGEPRODUCT_SUCCESS,
        CLEAR_ERRORS } from "../Constants/StorePageConstant.js";

export const getStore =(_id)=>async(dispatch)=>{       
    try {
        dispatch({type: STOREPAGE_REQUEST}); 
           const link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?_id=${_id}`;
        
        const {data} =await axios.get(link);
    
        dispatch({
            type: STOREPAGE_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: STOREPAGE_FAIL,
            payload: error.response.data.message,
        });
        
    }
}

export const getOffers =(_id)=>async(dispatch)=>{       
    try {
        dispatch({type: STOREPAGEOFFER_REQUEST});
        
        
           const link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?_id=${_id}`;
        
        const {data} =await axios.get(link);
    
        dispatch({
            type: STOREPAGEOFFER_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: STOREPAGEOFFER_FAIL,
            payload: error.response.data.message,
        });
        
    }
}

export const getProducts =(_id)=>async(dispatch)=>{

        
    try {
        dispatch({type: STOREPAGEPRODUCT_REQUEST});
        
        
           const link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?_id=${_id}`;
        
        const {data} =await axios.get(link);
        
    
        dispatch({
            type: STOREPAGEPRODUCT_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: STOREPAGEPRODUCT_FAIL,
            payload: error.response.data.message,
        });
        
    }
}

export const getAbout =(_id)=>async(dispatch)=>{

        
    try {
        dispatch({type: STOREPAGEABOUT_REQUEST});
        
        
           const link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?_id=${_id}`;
        
        const {data} =await axios.get(link);
        
    
        dispatch({
            type: STOREPAGEABOUT_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
   
        dispatch({
            type: STOREPAGEABOUT_FAIL,
            payload: error.response.data.message,
        });
        
    }
}



export const clearErrors= ()=> async (dispatch)=>{
    dispatch({type:CLEAR_ERRORS});
    }
