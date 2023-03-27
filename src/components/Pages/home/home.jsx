import React, { useEffect, useState, useRef, Suspense, lazy } from "react";
import { useSelector, connect , useDispatch } from "react-redux";
import { get30PercentOffer,get40PercentOffer,get10PercentOffer,getAmazingOffer,get20PercentOffer,get50PercentOffer,getPlatinumOffer, getStoreSection1, getStoreSection2, getStoreSection3, getStoreSection4, rahiOne, rahiSecond, rahiThird, rahiFour, getMainBanners} from "../../../Service/Actions/HomeActions";
import StoreListing from "../../layout/StoreListing/StoreListing";
import HAdvertiseTwo from "../../layout/HAdvertiseTwo/HAdvertiseTwo";
import HAdvertiseThird from "../../layout/HAdvertiseThird/HAdvertiseThird";
import HAdvertiseFour from "../../layout/HAdvertiseFour/HAdvertiseFour";
import HNewVendors from "../../layout/HNewVendors/HNewVendors";
import HBrandedVendors from "../../layout/HBrandedVendors/HBrandedVendors";

import { Helmet } from "react-helmet";
import HDiscount from "../../layout/HDiscount/HDiscount";
import TopBanner from "../../layout/TopBanner/TopBanner";
import HContest from "../../layout/HContest/HContest";
import HBestOfferTest from "../../layout/HBestOfferTesting/HBestOfferTest";
const HCategory = lazy (()=> import ( "../../layout/HCategory/HCategory" ));
const HBestOffer = lazy (()=> import ( "../../layout/HBestOffer/HBestOffer" ));
const HLatestBlog = lazy (()=> import ( "../../layout/HLatestBlog/HLatestBlog" ));
const HAdvertiseOne = lazy (()=> import ( "../../layout/HAdvertiseOne/HAdvertiseOne" ));
const HFavoriteVendors = lazy  (()=> import ( "../../layout/HFavoriteVendors/HFavoriteVendors" ));
const HPlatinumOffer = lazy (()=> import ( "../../layout/HPlatinumOffer/HPlatinumOffer" ));
const HCategoryOffers = lazy (()=> import ( "../../layout/HCategoryOffers/HCategoryOffers" ));



const Home = (props) => {
  const dispatch = useDispatch();
  var today = new Date;
  var time = today.getHours();

  const [favouriteStores,setFavouriteStores] = useState(props?.user?.data?.favouriteStores);

  useEffect(() => {
    setFavouriteStores(props?.user?.data?.favouriteStores);
  }, []);


  

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAmazingOffer("amazing",localStorage.getItem("selectedCity"),localStorage.getItem("setLocality")));
    dispatch(get10PercentOffer("10",localStorage.getItem("selectedCity"),localStorage.getItem("setLocality")));
    dispatch(get20PercentOffer("20",localStorage.getItem("selectedCity"),localStorage.getItem("setLocality")));
    dispatch(get30PercentOffer("30",localStorage.getItem("selectedCity"),localStorage.getItem("setLocality")));
    dispatch(get40PercentOffer("40",localStorage.getItem("selectedCity"),localStorage.getItem("setLocality")));
    dispatch(get50PercentOffer("50",localStorage.getItem("selectedCity"),localStorage.getItem("setLocality")));
    dispatch(getPlatinumOffer("platinum",localStorage.getItem("selectedCity"),localStorage.getItem("setLocality")));
    // dispatch(getStoreSection1(localStorage.getItem("selectedCity"),localStorage.getItem("setLocality"),"Fashion"))
    // dispatch(getStoreSection2(localStorage.getItem("selectedCity"),localStorage.getItem("setLocality"),"Food and Beverages"))
    // dispatch(getStoreSection3(localStorage.getItem("selectedCity"),localStorage.getItem("setLocality"),"Pets"))
    // dispatch(getStoreSection4(localStorage.getItem("selectedCity"),localStorage.getItem("setLocality"),"Art and Craft"))

    // dispatch(rahiOne(localStorage.getItem("selectedCity"),"navratri"));
    // dispatch(rahiSecond(localStorage.getItem("selectedCity"),"durgapuja"));
    // dispatch(rahiThird(localStorage.getItem("selectedCity"),"dandiya"));
    // dispatch(rahiFour(localStorage.getItem("selectedCity"),"ramleela"));
    
  
    // dispatch(getTopBanners(localStorage.getItem("selectedCity"),localStorage.getItem("setLocality"),"FestivalDeal",time));

    // dispatch(getMainBanners());
  }, [dispatch]);

  const getAmazingoffer = useSelector((state) => state?.getAmazingofferReducer?.offers);
  const get10offer = useSelector((state) => state?.get10offerReducer?.offers);
  const get20offer = useSelector((state) => state?.get20offerReducer?.offers);
  const get30offer = useSelector((state) => state?.get30offerReducer?.offers);
  const get40offer = useSelector((state) => state?.get40offerReducer?.offers);
  const get50offer = useSelector((state) => state?.get50offerReducer?.offers);
  const getPlatinumoffer = useSelector((state) => state?.getPlatinumofferReducer?.offers);
  // const FirstRaahi = useSelector((state) => state?.rahiOneReducer?.RahiOffer);
  // const SecondRaahi = useSelector((state) => state?.rahiSecondReducer?.RahiOffer);
  // const ThirdRaahi = useSelector((state) => state?.rahiThirdReducer?.RahiOffer);
  // const FourRaahi = useSelector((state) => state?.rahiFourReducer?.RahiOffer);
  // const fashionStore = useSelector((state) => state?.storeReducerSection1?.FOffer);
  // const foodStore = useSelector((state) => state?.storeReducerSection2?.FoodOffer);
  // const petsStore = useSelector((state) => state?.storeReducerSection3?.PetsOffer);
  // const artStore = useSelector((state) => state?.storeReducerSection4?.ArtOffer);
  // const bannersData = useSelector((state) => state?.TopBannersReducer?.kubedealsbanner);
  // const mainBannerData = useSelector((state) => state?.MainBannersReducer?.kubebanner);

  
  return (
    <>
      <Helmet>
        <title>Kube City</title>
        <meta name="Description" content="Kube City"/>
      </Helmet>
      
      <Suspense fallback={<div> Loading.. </div>}>
      <HAdvertiseOne />  
      </Suspense>
      
      <Suspense fallback={<div> Loading.. </div>}>
      <HCategoryOffers />
      </Suspense>
      <Suspense fallback={<div> Loading.. </div>}>
      {get50offer.length != 0 && <HBestOffer offers={get50offer} title = {"50% to 40% OFF"} link= {"Offers"} status="disabled"/>}
      {/* {mainBannerData.length != 0 && <TopBanner banner={mainBannerData} />} */}
      </Suspense>
      
      <Suspense fallback={<div> Loading.. </div>}>
      <HCategory />
      </Suspense>
      
      {/* <HContest /> */}
      {/* {FirstRaahi.length != 0  &&<StoreListing store={FirstRaahi}  title={"Navratri"} link= {"StoreList"} status="disabled"/>}
      
      <HAdvertiseOne />
      {FirstRaahi.length != 0  &&<HBestOffer offers={FirstRaahi}  title={"Navratri"} link= {"Offers"} status="disabled"/>}

      {SecondRaahi.length != 0  &&<StoreListing store={SecondRaahi}  title={"Durga Puja"} link= {"StoreList"} status="disabled"/>}
      <HAdvertiseTwo />
      {SecondRaahi.length != 0  &&<HBestOffer offers={SecondRaahi}  title={"Durga Puja"} link= {"Offers"} status="disabled"/>}

      {ThirdRaahi.length != 0  &&<StoreListing store={ThirdRaahi}  title={"Dandiya"} link= {"StoreList"} status="disabled"/>}
      <HAdvertiseThird />
      {ThirdRaahi.length != 0  &&<HBestOffer offers={ThirdRaahi}  title={"Dandiya"} link= {"Offers"} status="disabled"/>}

      {FourRaahi.length != 0  &&<StoreListing store={FourRaahi}  title={"Dusshera"} link= {"StoreList"} status="disabled"/>}
      <HAdvertiseFour />

      {FourRaahi.length != 0  &&<HBestOffer offers={FourRaahi}  title={"Ramleela"} link= {"Offers"} status="disabled"/>} */}


      {/* <HBestOffer offers={offer} title = {"Best"} link= {"Offers"}/>
      <StoreListing store={offer}  title={"Top"} link= {"StoreList"} />
      <HBestOffer offers={fashionStore} title={"Fashion"} link= {"Offers"}  />
      <HNewVendors image = {offer} />
      <StoreListing store={fashionStore}  title={"Fashion"} link= {"StoreList"}  />
      <HBestOffer offers={foodStore} title={"Food & Beverages"} link= {"Offers"} />
      <StoreListing store={foodStore}  title={"Food and Beverages"} link= {"StoreList"}  />
      <HBestOffer offers={petsStore} title={"Pets"} link= {"Offers"} />
      <StoreListing store={petsStore}  title={"Pets"} link= {"StoreList"}  />
      <HBestOffer offers={artStore} title={"Art & Craft"} link= {"Offers"} />
      <StoreListing store={artStore}  title={"Art & Craft"} link= {"StoreList"}  /> */}
      <Suspense fallback={<div> Loading.. </div>}>
      {getPlatinumoffer.length != 0 && <HPlatinumOffer offers={getPlatinumoffer} title = {"Platinum Offers"} link= {"Offers"} status="disabled"/>}
      </Suspense>
      <Suspense fallback={<div> Loading.. </div>}>
      {get40offer.length != 0 && <HBestOffer offers={get40offer} title = {"40% to 30% OFF"} link= {"Offers"} status="disabled"/>}
      </Suspense>
      <Suspense fallback={<div> Loading.. </div>}>
      {get30offer.length != 0 && <HBestOffer offers={get30offer} title = {"30% to 20% OFF"} link= {"Offers"} status="disabled"/>}
      </Suspense>
      <Suspense fallback={<div> Loading.. </div>}>
      {get20offer.length != 0 && <HBestOffer offers={get20offer} title = {"20% to 10% OFF"} link= {"Offers"} status="disabled"/>}
      </Suspense>
      <Suspense fallback={<div> Loading.. </div>}>
      {get10offer.length != 0 && <HBestOffer offers={get10offer} title = {"Upto 10% OFF"} link= {"Offers"} status="disabled"/>}
      </Suspense>
      <Suspense fallback={<div> Loading.. </div>}>
      {getAmazingoffer.length != 0 && <HBestOffer offers={getAmazingoffer} title = {"Exciting Offers"} link= {"Offers"} status="disabled"/>}
      </Suspense>
      <Suspense fallback={<div> Loading.. </div>}>
      {localStorage.getItem("isUserVerify") == "true" && ((favouriteStores != undefined) && (favouriteStores.length != 0)) && <HFavoriteVendors />}
      </Suspense>
      <Suspense fallback={<div> Loading.. </div>}>
      <HLatestBlog />
      </Suspense>
      


    </>
  );
};

export default connect(({ userDetail, vendorDetail }) => ({
  user: userDetail.user,
  getFavoriteVendorList: vendorDetail.getFavoriteVendorList,
}))(Home);
