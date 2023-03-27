import Header from "../components/layout/NewHeader/NewHeader"

import { connect } from "react-redux";
import {selectedCity,selectedLocality,headerSearch} from "../Service/Actions/Action"



const mapStateToProps=state=>({

})

const mapDispatchToProps=dispatch=>({
    selectedCityHandler: city=>dispatch(selectedCity(city)),
    selectedLocalityHandler: locality=>dispatch(selectedLocality(locality)),
    searchHandler: search=>dispatch(headerSearch(search))
})


export default connect(mapStateToProps,mapDispatchToProps)(Header)