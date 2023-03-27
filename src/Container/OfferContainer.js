import Offer from "../components/layout/offer/offer"
import { connect } from "react-redux";

const mapStateToProps=state=>({
    Location:state.Headerdata
})
const mapDispatchToProps=dipatch=>({
    
})
export default connect(mapStateToProps,mapDispatchToProps)(Offer)