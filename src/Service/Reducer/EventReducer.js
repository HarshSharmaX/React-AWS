import {
    EVENT_FAIL,
    EVENT_REQUEST,
    EVENT_SUCCESS,
    
    CLEAR_ERRORS
} from "../Constants/EventConstants";








export const eventReducer =
    (state = { eventpost: [] }, action) => {
        switch (action.type) {
            case EVENT_REQUEST:
                return {
                    loading: true,
                    eventpost: [],
                };
            case EVENT_SUCCESS:
               
                return {
                    loading: false,
                    eventpost: action.payload.event,

                };
            case EVENT_FAIL:
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