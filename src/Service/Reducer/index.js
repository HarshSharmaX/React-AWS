// import { combineReducers } from "redux";
// import Headerdata from "./Reducer";
// import {getCityReducer,getLocalityReducer} from "../Reducer/Reducer"
// import { localityBannerReducer,catReducer, offerReducer  } from "../Reducer/HomeReducers";
// import { getCatReducer, getSubcatReducer, storeReducer } from "../Reducer/StoreListReducers";
// import { storePageReducer , storePageOfferReducer,storePageProductReducer , storePageAboutReducer } from "./StorePageReducer";
// import {blogReducer,blogCategoryReducer,SingleBlogReducer,RelatedBlogReducer} from "./BlogReducer"


// export default combineReducers({
//     Headerdata , localityBannerReducer ,catReducer , offerReducer ,getCatReducer,getSubcatReducer,
//     storeReducer,storePageReducer,storePageOfferReducer,storePageProductReducer,storePageAboutReducer,
//     getCityReducer,getLocalityReducer,blogReducer,blogCategoryReducer,SingleBlogReducer,RelatedBlogReducer
// })

import { combineReducers } from "redux";
import Headerdata from "./Reducer";
import {
  getCityReducer,
  getLocalityReducer,
  selectedCityName,
  toggleModel,
  toggleScreens,
} from "../Reducer/Reducer";
import vendorDetail from '../Reducer/Vendor';
import userDetail from "./User";
import {catReducer,storeReducerSection1,storeReducerSection2,storeHBrandedReducer,
  storeReducerSection3,storeReducerSection4,rahiOneReducer,rahiSecondReducer, rahiThirdReducer, rahiFourReducer,TopBannersReducer,MainBannersReducer,
  getAmazingofferReducer,get10offerReducer,get20offerReducer,get30offerReducer,get40offerReducer,get50offerReducer,getPlatinumofferReducer, weddingsReducer } from "../Reducer/HomeReducers";
import { getCatReducer, getSubcatReducer, storeReducer } from "../Reducer/StoreListReducers";
import { storePageReducer , storePageOfferReducer,storePageProductReducer , storePageAboutReducer } from "./StorePageReducer";
import {blogReducer,blogCategoryReducer,SingleBlogReducer,RelatedBlogReducer} from "./BlogReducer";
import {offersReducer,getOfferCategoryReducer,getOfferSubCategoryReducer,offerDetailReducer,festiveOffersReducer,fiftyOFFOffersReducer} from "./OfferPageReducer";
import {eventReducer} from "../Reducer/EventReducer"


export default combineReducers({
  Headerdata,
  getCityReducer,
  getLocalityReducer,
  selectedCityName,
  toggleModel,
  toggleScreens,
  userDetail,
  vendorDetail,
  catReducer ,getCatReducer,getSubcatReducer,
  storeReducer,storePageReducer,storePageOfferReducer,storePageProductReducer,storePageAboutReducer,
  getCityReducer,getLocalityReducer,blogReducer,blogCategoryReducer,SingleBlogReducer,RelatedBlogReducer,offersReducer,getOfferCategoryReducer,getOfferSubCategoryReducer,offerDetailReducer,storeReducerSection1,
  storeHBrandedReducer,storeReducerSection2,storeReducerSection3,storeReducerSection4,rahiOneReducer,rahiSecondReducer,rahiThirdReducer,rahiFourReducer,TopBannersReducer,
  MainBannersReducer,eventReducer,getAmazingofferReducer,get10offerReducer,get20offerReducer,get30offerReducer,get40offerReducer,get50offerReducer,getPlatinumofferReducer,weddingsReducer,festiveOffersReducer,
  fiftyOFFOffersReducer

});
