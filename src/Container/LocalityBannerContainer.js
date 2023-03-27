import LocalityBanner from "../components/layout/Banners/home_banner"
import Offer from "../components/layout/offer/offer"
import { connect } from "react-redux";
import {selectedCity} from "../Service/Actions/Action"


const mapStateToProps=state=>({
    Location:state.Headerdata, Banner:state.localityBannerReducer.banner
})

const mapDispatchToProps=dipatch=>({
    
})


export default connect(mapStateToProps,mapDispatchToProps)(LocalityBanner)
