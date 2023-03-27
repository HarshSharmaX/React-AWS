import axios from "axios";
import {
    EVENT_FAIL,
    EVENT_REQUEST,
    EVENT_SUCCESS,
    
    CLEAR_ERRORS
} from "../Constants/EventConstants";

export const getEvents = () => async (dispatch) => {


    try {
        dispatch({ type: EVENT_REQUEST });

        let link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/event/all`;
        
    
        const { data } = await axios.get(link);

        console.log("eventDataaaa", data);
        dispatch({
            type: EVENT_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: EVENT_FAIL,
            payload: error.response.data.message,
        });

    }
};