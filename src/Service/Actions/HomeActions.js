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
import axios from "axios"


export const getCat = () => async (dispatch) => {

    try {
        dispatch({ type: ALL_CAT_REQUEST });

        const { data } = await axios.get(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/subcategories`);
        const getuserverify= localStorage.getItem("isUserVerify", JSON.stringify());
        if(getuserverify==="true"){
            localStorage.setItem("isUserVerify", JSON.stringify(true));
        }else{
            localStorage.setItem("isUserVerify", JSON.stringify(false));
        }

        dispatch({
            type: ALL_CAT_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: ALL_CAT_FAIL,
            payload: error.response.data.message,
        });

    }
};

//Featured Offer
// export const getOffer =(city,locality)=>async(dispatch)=>{

//     try {
//         dispatch({type: DAY_OFFER_REQUEST});

//         let link = ``;
//         if(city && locality == "All Locality")
//         {
//             link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}`;
//         }
//         else if(city && locality)
//         {
//             link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&locality=${locality}`;
//         }

    
//         const {data} =await axios.get(link);
    
        
//         dispatch({
//             type:DAY_OFFER_SUCCESS,
//             payload:data,
//         })
        
//     } catch (error) {
//         dispatch({
//             type: DAY_OFFER_FAIL,
//             payload: error.response.data.message,
//         });
        
//     }
//     };


    //Featured  category store Fashion
export const getStoreSection1 =(city,locality,category)=>async(dispatch)=>{

    try {
        dispatch({type: "FREQUEST"});

        let link = ``;
        if(city && locality == "All Locality")
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/package/view?city=${city}&category=${category}`;
        }
        else if(city && locality)
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/package/view?city=${city}&locality=${locality}&category=${category}`;
        }

  
        const {data} =await axios.get(link);
   
        dispatch({
            type:"FSUCCESS",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: "FFAILL",
            payload: error.response.data.message,
        });
        
    }
    };

//Food and Beverages
    export const getStoreSection2 =(city,locality,category)=>async(dispatch)=>{

        try {
            dispatch({type: "FoodREQUEST"});
    
            let link = ``;
            if(city && locality == "All Locality")
            {
                link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/package/view?city=${city}&category=${category}`;
            }
            else if(city && locality)
            {
                link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/package/view?city=${city}&locality=${locality}&category=${category}`;
            }
    
        
            const {data} =await axios.get(link);
        
            dispatch({
                type:"FoodSUCCESS",
                payload:data,
            })
            
        } catch (error) {
            dispatch({
                type: "FoodFAILL",
                payload: error.response.data.message,
            });
            
        }
        };

//Pets
export const getStoreSection3 =(city,locality,category)=>async(dispatch)=>{

    try {
        dispatch({type: "PetsREQUEST"});

        let link = ``;
        if(city && locality == "All Locality")
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/package/view?city=${city}&category=${category}`;
        }
        else if(city && locality)
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/package/view?city=${city}&locality=${locality}&category=${category}`;
        }

    
        const {data} =await axios.get(link);
        dispatch({
            type:"PetsSUCCESS",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: "PetsFAILL",
            payload: error.response.data.message,
        });
        
    }
    };

//Art
export const getStoreSection4 =(city,locality,category)=>async(dispatch)=>{

    try {
        dispatch({type: "ArtREQUEST"});

        let link = ``;
        if(city && locality == "All Locality")
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/package/view?city=${city}&category=${category}`;
        }
        else if(city && locality)
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/package/view?city=${city}&locality=${locality}&category=${category}`;
        }

    
        const {data} =await axios.get(link);
        dispatch({
            type:"ArtSUCCESS",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: "ArtFAILL",
            payload: error.response.data.message,
        });
        
    }
    };

// Rahi
    // export const rahiOne =(city,locality,category)=>async(dispatch)=>{

    //     try {
    //         dispatch({type: "RahiOneREQUEST"});
    
    //         let link = ``;  
    //         if(city && locality == "All Locality")
    //         {
    //             link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&seasonkey=${category}`;
    //         }
    //         else if(city && locality)
    //         {
    //             link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&locality=${locality}&seasonkey=${category}`;
    //         }
    
        
    //         const {data} =await axios.get(link);
    //         dispatch({
    //             type:"RahiOneSUCCESS",
    //             payload:data,
    //         })

    //         {console.log("RahiData",locality)}
            
    //     } catch (error) {
    //         dispatch({
    //             type: "RahiOneFAIL",
    //             payload: error.response.data.message,
    //         });
            
    //     }
    // };

    // export const rahiOne =(city,category)=>async(dispatch)=>{

    //     try {
    //         dispatch({type: "RahiOneREQUEST"});
    
    //          let link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&seasonkey=${category}`;  
            
    //         const {data} =await axios.get(link);
    //         dispatch({
    //             type:"RahiOneSUCCESS",
    //             payload:data,
    //         })

    //         {console.log("RahiData",data)}
            
    //     } catch (error) {
    //         dispatch({
    //             type: "RahiOneFAIL",
    //             payload: error.response.data.message,
    //         });
            
    //     }
    // };

    // export const rahiSecond =(city,category)=>async(dispatch)=>{

    //     try {
    //         dispatch({type: "RahiSecondREQUEST"});
    
    //         let link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&seasonkey=${category}`;  
            
    
        
    //         const {data} =await axios.get(link);
    //         dispatch({
    //             type:"RahiSecondSUCCESS",
    //             payload:data,
    //         })

            
            
    //     } catch (error) {
    //         dispatch({
    //             type: "RahiSecondFAIL",
    //             payload: error.response.data.message,
    //         });
            
    //     }
    // };

    // export const rahiThird =(city,category)=>async(dispatch)=>{

    //     try {
    //         dispatch({type: "RahiThirdREQUEST"});
    
    //         let link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&seasonkey=${category}`;  
            
    
        
    //         const {data} =await axios.get(link);
    //         dispatch({
    //             type:"RahiThirdSUCCESS",
    //             payload:data,
    //         })

            
            
    //     } catch (error) {
    //         dispatch({
    //             type: "RahiThirdFAIL",
    //             payload: error.response.data.message,
    //         });
            
    //     }
    // };

    // export const rahiFour =(city,category)=>async(dispatch)=>{

    //     try {
    //         dispatch({type: "RahiFourREQUEST"});
    
    //         let link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&seasonkey=${category}`;  
            
    
        
    //         const {data} =await axios.get(link);
    //         dispatch({
    //             type:"RahiFourSUCCESS",
    //             payload:data,
    //         })

            
            
    //     } catch (error) {
    //         dispatch({
    //             type: "RahiFourFAIL",
    //             payload: error.response.data.message,
    //         });
            
    //     }
    // };
    


    //branded
export const getHBrandedStore = () => async (dispatch) => {


    try {
        dispatch({ type: HOME_BRANDEDSTORE_REQUEST });

        let link = "https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/brand/all";
        
    
        const { data } = await axios.get(link);

        dispatch({
            type: HOME_BRANDEDSTORE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: HOME_BRANDEDSTORE_FAIL,
            payload: error.response.data.message,
        });

    }
};



//clearings error
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERROR,
    })
}


// export const getTopBanners = (city,locality,season,time) => async (dispatch) => {


//     try {
//         dispatch({ type: "TOP_REQUEST" });
//         console.log("action time",time);

//         let link = ``;
//         if(time < 13)
//     {
//         if(city && locality == "All Locality" && season)
//         {
//             link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&season=${season}&slot=1`;
//         }
//         else if(city && locality && season)
//         {
//             link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&locality=${locality}&season=${season}&slot=1`;
//         }
//     }

//     if(time >= 13 && time < 17)
//     {
//         if(city && locality == "All Locality" && season)
//         {
//             link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&season=${season}&slot=2`;
//         }
//         else if(city && locality && season)
//         {
//             link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&locality=${locality}&season=${season}&slot=2`;
//         }
//     }
//     if(time >= 17 && time < 21)
//     {
//         if(city && locality == "All Locality" && season)
//         {
//             link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&season=${season}&slot=3`;
//         }
//         else if(city && locality && season)
//         {
//             link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&locality=${locality}&season=${season}&slot=3`;
//         }
//     }


    
        
    
//         const { data } = await axios.get(link);

//         dispatch({
//             type: "TOP_SUCCESS",
//             payload: data,
//         })

//     } catch (error) {
//         dispatch({
//             type: "TOP_FAIL",
//             payload: error.response.data.message,
//         });

//     }
// };

// export const getMainBanners = () => async (dispatch) => {


//     try {
//         dispatch({ type: BANNERS_REQUEST });

        
//         let link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/festivedeals/all`;
        
        
    
//         const { data } = await axios.get(link);


//         dispatch({
//             type: BANNERS_SUCCESS,
//             payload: data,
//         })

//     } catch (error) {
//         dispatch({
//             type: BANNERS_FAIL,
//             payload: error.response.data.message,
//         });

//     }
// };

export const getAmazingOffer =(discount,city,locality)=>async(dispatch)=>{

    try {
        dispatch({type: DAY_OFFER_REQUEST});

        const {data} =await axios.post(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/offerbydiscount`,{city : city ,locality : locality, dis: discount});
    
        
        
        dispatch({
            type:DAY_OFFER_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: DAY_OFFER_FAIL,
            payload: error.response.data.message,
        });
        
    }
};

export const get10PercentOffer =(discount,city,locality)=>async(dispatch)=>{

    try {
        dispatch({type: "10_OFFER_REQUEST"});

        const {data} =await axios.post(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/offerbydiscount`,{city : city ,locality : locality, dis: discount});
    
        
        
        dispatch({
            type: "10_OFFER_SUCCESS",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: "10_OFFER_FAIL",
            payload: error.response.data.message,
        });
        
    }
};

export const get20PercentOffer =(discount,city,locality)=>async(dispatch)=>{

    try {
        dispatch({type: "20_OFFER_REQUEST"});

        const {data} =await axios.post(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/offerbydiscount`,{city : city ,locality : locality, dis: discount});
    
        
        
        dispatch({
            type:"20_OFFER_SUCCESS",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: "20_OFFER_FAIL",
            payload: error.response.data.message,
        });
        
    }
};

export const get30PercentOffer =(discount,city,locality)=>async(dispatch)=>{

    try {
        dispatch({type: "30_OFFER_REQUEST"});

        const {data} =await axios.post(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/offerbydiscount`,{city : city ,locality : locality, dis: discount});
    
        
        
        dispatch({
            type:"30_OFFER_SUCCESS",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: "30_OFFER_FAIL",
            payload: error.response.data.message,
        });
        
    }
};

export const get40PercentOffer =(discount,city,locality)=>async(dispatch)=>{

    try {
        dispatch({type: "40_OFFER_REQUEST"});

        const {data} =await axios.post(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/offerbydiscount`,{city : city ,locality : locality, dis: discount});
    
        
        
        dispatch({
            type:"40_OFFER_SUCCESS",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: "40_OFFER_FAIL",
            payload: error.response.data.message,
        });
        
    }
};

export const get50PercentOffer =(discount,city,locality)=>async(dispatch)=>{

    try {
        dispatch({type: "50_OFFER_REQUEST"});

        const {data} =await axios.post(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/offerbydiscount`,{city : city ,locality : locality, dis: discount});
    
        
        
        dispatch({
            type:"50_OFFER_SUCCESS",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: "50_OFFER_FAIL",
            payload: error.response.data.message,
        });
        
    }
};

export const getPlatinumOffer =(discount,city,locality)=>async(dispatch)=>{

    try {
        dispatch({type: "PLATINUM_OFFER_REQUEST"});

        const {data} =await axios.post(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/offerbydiscount`,{city : city ,locality : locality, dis: discount});
    
        
        
        dispatch({
            type:"PLATINUM_OFFER_SUCCESS",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: "PLATINUM_OFFER_FAIL",
            payload: error.response.data.message,
        });
        
    }
};

export const getWeddings = (weddingType) => async (dispatch) => {


    try {
        dispatch({ type: WEDDINGS_REQUEST });

        let link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/festivedeals/all?title=${weddingType}`;
        
    
        const { data } = await axios.get(link);

        console.log("id",data);

        dispatch({
            type: WEDDINGS_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: WEDDINGS_FAIL,
            payload: error.response.data.message,
        });

    }
};

export const getMainBanners = () => async (dispatch) => {


    try {
        dispatch({ type: BANNERS_REQUEST });

        
        let link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/home/banner/web`;
        
        
    
        const { data } = await axios.get(link);


        dispatch({
            type: BANNERS_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: BANNERS_FAIL,
            payload: error.response.data.message,
        });

    }
};