import {
    SELECTED_CITY,
    SELECTED_LOCALITY,
    HEADER_SEARCH,
    LISTCITY_REQUEST,
    LISTCITY_SUCCESS,
    LISTCITY_FAIL,
    LISTLOCALITY_REQUEST,
    LISTLOCALITY_SUCCESS,
    LISTLOCALITY_FAIL,
    CLEAR_ERRORS,
    OPEN_CLOSE_MENU,
    SCREEN_TOGGLE
} from "../Constants/constants";

export default function cityName(state = { localityData: '', searchData: '' }, action) {

    switch (action.type) {
        case SELECTED_LOCALITY:
            return {
                ...state,
                localityData: action.payload
            }
            break;
        case HEADER_SEARCH:
            return {
                ...state,
                searchData: action.payload
            }

        default:
            return state
            break;
    }
}
export function selectedCityName(state = { selectedCityData: '' }, action) {

    switch (action.type) {
        case SELECTED_CITY:
            return {
                ...state,
                selectedCityData: action.payload
            }
        default:
            return state
    }
}
export function toggleModel(state = { modelOpenCloseToggle: '' }, action) {

    switch (action.type) {
        case OPEN_CLOSE_MENU:
            return {
                ...state,
                modelOpenCloseToggle: action.payload
            }
        default:
            return state
    }
}
export function toggleScreens(state = { screenToggle: '' }, action) {

    switch (action.type) {
        case SCREEN_TOGGLE:
            return {
                ...state,
                screenToggle: action.payload
            }
        default:
            return state
    }
}

//City Fetching

export const getCityReducer =
    (state = { cityList: [] }, action) => {
        switch (action.type) {
            case LISTCITY_REQUEST:
                return {
                    loading: true,
                    cityList: [],
                };
            case LISTCITY_SUCCESS:

                return {
                    loading: false,
                    cityList: action.payload,
                };
            case LISTCITY_FAIL:
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

//Locality
export const getLocalityReducer =
    (state = { locality: [] }, action) => {
        switch (action.type) {
            case LISTLOCALITY_REQUEST:
                return {
                    loading: true,
                    locality: [],
                };
            case LISTLOCALITY_SUCCESS:
                return {
                    loading: false,
                    locality: action.payload.products,

                };
            case LISTLOCALITY_FAIL:
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