import {
    CLEAR_ERROR,
 
    ALL_CAT_FAIL,
    ALL_CAT_REQUEST,
    ALL_CAT_SUCCESS,
    DAY_OFFER_FAIL,
    DAY_OFFER_REQUEST,
    DAY_OFFER_SUCCESS,
    HOME_BRANDEDSTORE_FAIL,
    HOME_BRANDEDSTORE_REQUEST,
    HOME_BRANDEDSTORE_SUCCESS,
    BANNERS_REQUEST ,
    BANNERS_SUCCESS ,
    BANNERS_FAIL,
    WEDDINGS_REQUEST ,
    WEDDINGS_SUCCESS ,
    WEDDINGS_FAIL,
} from "../Constants/HomeConstant";


// Home NewStore Reducers

export const storeHBrandedReducer =
(state = { brandedstores: [] }, action) => {
    switch (action.type) {
        case HOME_BRANDEDSTORE_REQUEST:
            return {
                loading: true,
                brandedstores: [],
            };
        case HOME_BRANDEDSTORE_SUCCESS:
            return {
                loading: false,
                brandedstores: action.payload.brandStore,

            };
        case HOME_BRANDEDSTORE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;

    }

};

//Category Fetching
export const catReducer =
    (state = { cats: [] }, action) => {
        switch (action.type) {
            case ALL_CAT_REQUEST:
                return {
                    loading: true,
                    cats: [],
                };
            case ALL_CAT_SUCCESS:
                return {
                    loading: false,
                    cats: action.payload.products,

                };
            case ALL_CAT_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERROR:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };



    //Fashion Store
    export const storeReducerSection1 =
    (state = { FOffer: [] }, action) => {
        switch (action.type) {
            case "FREQUEST":
                return {
                    loading: true,
                    FOffer: [],
                };
            case "FSUCCESS":
                return {
                    loading: false,
                    FOffer: action.payload.sortPackagedata,

                };
            case "FFAIL":
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERROR:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };

    //Food and bevrages
    export const storeReducerSection2 =
    (state = { FoodOffer: [] }, action) => {
        switch (action.type) {
            case "FoodREQUEST":
                return {
                    loading: true,
                    FoodOffer: [],
                };
            case "FoodSUCCESS":
                return {
                    loading: false,
                    FoodOffer: action.payload.sortPackagedata,

                };
            case "FoodFAIL":
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERROR:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };

//Pets
export const storeReducerSection3 =
(state = { PetsOffer: [] }, action) => {
    switch (action.type) {
        case "PetsREQUEST":
            return {
                loading: true,
                PetsOffer: [],
            };
        case "PetsSUCCESS":
            return {
                loading: false,
                PetsOffer: action.payload.sortPackagedata,

            };
        case "PetsFAIL":
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;

    }
};

//Art
export const storeReducerSection4 =
(state = { ArtOffer: [] }, action) => {
    switch (action.type) {
        case "ArtREQUEST":
            return {
                loading: true,
                ArtOffer: [],
            };
        case "ArtSUCCESS":
            return {
                loading: false,
                ArtOffer: action.payload.sortPackagedata,

            };
        case "ArtFAIL":
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;

    }

};


//rahi
export const rahiOneReducer =
(state = { RahiOffer: [] }, action) => {
    switch (action.type) {
        case "RahiOneREQUEST":
            return {
                loading: true,
                RahiOffer: [],
            };
        case "RahiOneSUCCESS":
            return {
                loading: false,
                RahiOffer: action.payload.products,

            };
        case "RahiOneFAIL":
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;

    }

};

export const rahiSecondReducer =
(state = { RahiOffer: [] }, action) => {
    switch (action.type) {
        case "RahiSecondREQUEST":
            return {
                loading: true,
                RahiOffer: [],
            };
        case "RahiSecondSUCCESS":
            return {
                loading: false,
                RahiOffer: action.payload.products,

            };
        case "RahiSecondFAIL":
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;

    }

};

export const rahiThirdReducer =
(state = { RahiOffer: [] }, action) => {
    switch (action.type) {
        case "RahiThirdREQUEST":
            return {
                loading: true,
                RahiOffer: [],
            };
        case "RahiThirdSUCCESS":
            return {
                loading: false,
                RahiOffer: action.payload.products,

            };
        case "RahiThirdFAIL":
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;

    }

};

export const rahiFourReducer =
(state = { RahiOffer: [] }, action) => {
    switch (action.type) {
        case "RahiFourREQUEST":
            return {
                loading: true,
                RahiOffer: [],
            };
        case "RahiFourSUCCESS":
            return {
                loading: false,
                RahiOffer: action.payload.products,

            };
        case "RahiFourFAIL":
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;

    }

};

export const TopBannersReducer =
(state = { kubedealsbanner: [] }, action) => {
    switch (action.type) {
        case "TOP_REQUEST":
            return {
                loading: true,
                kubedealsbanner: [],
            };
        case "TOP_SUCCESS":
            return {
                loading: false,
                kubedealsbanner: action.payload.products,

            };
        case "TOP_FAIL":
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;

    }

};

export const MainBannersReducer =
(state = { kubebanner: [] }, action) => {
    switch (action.type) {
        case BANNERS_REQUEST:
            return {
                loading: true,
                kubebanner: [],
            };
        case BANNERS_SUCCESS:
            return {
                loading: false,
                kubebanner: action.payload.webBannerArray,

            };
        case BANNERS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;

    }

};


export const getAmazingofferReducer =
    (state = { offers: [] }, action) => {
        switch (action.type) {
            case DAY_OFFER_REQUEST:
                return {
                    loading: true,
                    offers: [],
                };
            case DAY_OFFER_SUCCESS:
                return {
                    loading: false,
                    offers: action.payload.final,

                };
            case DAY_OFFER_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERROR:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };

    export const get10offerReducer =
    (state = { offers: [] }, action) => {
        switch (action.type) {
            case "10_OFFER_REQUEST":
                return {
                    loading: true,
                    offers: [],
                };
            case "10_OFFER_SUCCESS":
                return {
                    loading: false,
                    offers: action.payload.final,

                };
            case "10_OFFER_FAIL":
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERROR:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };

    export const get20offerReducer =
    (state = { offers: [] }, action) => {
        switch (action.type) {
            case "20_OFFER_REQUEST":
                return {
                    loading: true,
                    offers: [],
                };
            case "20_OFFER_SUCCESS":
                return {
                    loading: false,
                    offers: action.payload.final,

                };
            case "20_OFFER_FAIL":
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERROR:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };


    export const get30offerReducer =
    (state = { offers: [] }, action) => {
        switch (action.type) {
            case "30_OFFER_REQUEST":
                return {
                    loading: true,
                    offers: [],
                };
            case "30_OFFER_SUCCESS":
                return {
                    loading: false,
                    offers: action.payload.final,

                };
            case "30_OFFER_FAIL":
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERROR:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };


    export const get40offerReducer =
    (state = { offers: [] }, action) => {
        switch (action.type) {
            case "40_OFFER_REQUEST":
                return {
                    loading: true,
                    offers: [],
                };
            case "40_OFFER_SUCCESS":
                return {
                    loading: false,
                    offers: action.payload.final,

                };
            case "40_OFFER_FAIL":
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERROR:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };


    export const get50offerReducer =
    (state = { offers: [] }, action) => {
        switch (action.type) {
            case "50_OFFER_REQUEST":
                return {
                    loading: true,
                    offers: [],
                };
            case "50_OFFER_SUCCESS":
                return {
                    loading: false,
                    offers: action.payload.final,

                };
            case "50_OFFER_FAIL":
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERROR:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };


    export const getPlatinumofferReducer =
    (state = { offers: [] }, action) => {
        switch (action.type) {
            case "PLATINUM_OFFER_REQUEST":
                return {
                    loading: true,
                    offers: [],
                };
            case "PLATINUM_OFFER_SUCCESS":
                return {
                    loading: false,
                    offers: action.payload.final,

                };
            case "PLATINUM_OFFER_FAIL":
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERROR:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };


    export const weddingsReducer =
    (state = { festivaldeal: [] }, action) => {
    switch (action.type) {
        case WEDDINGS_REQUEST:
            return {
                loading: true,
                festivaldeal: [],
            };
        case WEDDINGS_SUCCESS:
            return {
                loading: false,
                festivaldeal: action.payload.festivaldeal,

            };
        case WEDDINGS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;

    }

};


    
