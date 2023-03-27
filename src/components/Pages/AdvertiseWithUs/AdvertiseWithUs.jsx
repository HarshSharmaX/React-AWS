import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./AdvertiseWithUs.css";
import Axios from 'axios';
import { getCat } from '../../../Service/Actions/HomeActions';
import { getCity } from "../../../Service/Actions/Action";


const AWU = ()=>{


  const dispatch = useDispatch();

  //Categories From Home Action
    useEffect(() => {
         dispatch(getCat());
    }, [dispatch]);
    
    const AWUCatData = useSelector(
        (state) => state.catReducer.cats
    );

  // City from Action  
    useEffect(() => {
        dispatch(getCity());
    }, [dispatch]);
    
    const AWUCityData = useSelector(
        (state) => state.getCityReducer.cityList
    );


    const [firstName,setFirstName]= useState(null);
    const [lastName,setLastName]= useState(null);
    const [contact,setContact]= useState(null);
    const [email,setEmail]= useState(null);
    const [city,setCity]= useState(null);
    const [category,setCategory]= useState(null);
    const [showCity,setShowCity]= useState(null);
    const [showCategory,setShowCategory]= useState(null);

    const AWUData = () => {
        const data = {
            firstName: firstName,
            lastName: lastName,
            contactNo: contact,
            email: email,
            city_Name: city,
            categories_Name: category,
        };
        Axios.post("https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/advertiseUs/new", data).then((res) => {
          window.location.reload();
          alert("Submit Successfully");
        });
      };




      const dropdownCityRef = useRef(null);
      const dropdownCategoryRef = useRef(null);
      const [isCity, setIsCity] = useState(false);
      const [isCategory, setIsCategory] = useState(false);
    
      const DropDownCity = () => setIsCity(!isCity);
      const DropDownCategory = () => setIsCategory(!isCategory);

      useEffect(() => {
        const City = city;
        if (City?.length >= 10) {
          var reducedCityText = City.substring(0, 5);
          setShowCity(reducedCityText + "...")
          setCity(City);
        } else {
          setShowCity(City);
          setCity(City);
        }

        const Category = category;
        if (Category?.length >= 10) {
          var reducedCategoryText = Category.substring(0, 6);
          setShowCategory(reducedCategoryText + "...")
          setCategory(Category);
        } else {
          setShowCategory(Category)
          setCategory(Category);
        }
      });

      useEffect(() => {
        const pageClickEvent = (e) => {
          if (dropdownCityRef.current !== null && !dropdownCityRef.current.contains(e.target)) {
            setIsCity(!isCity);
          }
          console.log(e);
        };
      // If the item is active (ie open) then listen for clicks
        if (isCity) {
          window.addEventListener('click', pageClickEvent);
        }
        return () => {
          window.removeEventListener('click', pageClickEvent);
        }
      
      }, [isCity]);


      useEffect(() => {
        const pageClickEvent = (e) => {
          if (dropdownCategoryRef.current !== null && !dropdownCategoryRef.current.contains(e.target)) {
            setIsCategory(!isCategory);
          }
          console.log(e);
        };
      // If the item is active (ie open) then listen for clicks
        if (isCategory) {
          window.addEventListener('click', pageClickEvent);
        }
        return () => {
          window.removeEventListener('click', pageClickEvent);
        }
      
      }, [isCategory]);
    
      const onCatOptionClicked = value => () => {
        setCategory(value)
        setIsCategory(false);
        
      };

      const onCityOptionClicked = value => () => {
        setCity(value)
        setIsCity(false);
      };

    return(
        <>
        <div className='AdvertiseWithUs'>
            <h1>Advertise With Us</h1>
            <div className="AWUMainSec mt-4">
            <div className='contactTeamSec '>
                <h2 className="contactTeamSecHeading">Contact Our Sales Team</h2>
                <div className='contactTeamDetails mt-md-5'>
                    <h3>Mobile No : </h3><span> +91 9910766406</span>
                    <h3 className="mt-2">E-Mail : </h3><span className="mt-2"> contact@kubeonline.in</span>
                </div>
            </div>    
            <h2 className="AWUFormHeading">Your Details</h2>
            <form className='AWUForm'>
            <div className="row">
              <div className="AWUName col-md-5 col-11 ms-md-5 ms-3 mt-md-5 mb-2 ">
                  <label for="AWUStoreName" class="ALabel">First Name</label>
                  <input type="text" class="form-control AInput mt-2" id="AWUStoreName" name="First Name" onChange={(e)=>{setFirstName(e.target.value)}} />
              </div>
              <div className="AWUName col-md-5 col-11 ms-md-5 ms-3 mt-md-5 mb-2 offset-md-1">
                  <label for="AWUStoreName" class="ALabel">Last Name</label>
                  <input type="text" class="form-control AInput mt-2" id="AWUStoreName" name="Last Name" onChange={(e)=>{setLastName(e.target.value)}} />
              </div>
            </div>
            <div className="row">
              <div class="AWUContact col-md-5 col-11 ms-md-5 ms-3 mt-md-5 mb-2 ">
                    <label for="AWUStoreName" class="ALabel">Contact No.</label>
                    <input type="number" class="form-control AInput mt-2" id="AWUStoreName" name="ContactNo" onChange={(e)=>{setContact(e.target.value)}} />
                </div>
              <div class="AWUEmail col-md-5 col-11  ms-md-5 ms-3  mt-md-5 mb-2 offset-md-1">
                  <label for="AWUStoreName" class="ALabel">E-mail</label>
                  <input type="text" class="form-control AInput mt-2" id="AWUStoreName" name="Email" onChange={(e)=>{setEmail(e.target.value)}} />
              </div>
            </div>
            

        <div  className='AWUCategory' for="AWUStoreName">
                    <div  className='AWUDropdownbtn' onClick={DropDownCategory} >
                        {showCategory || "Category"}
                    </div>
                    {isCategory && (
                        <div  ref={dropdownCategoryRef} className='AWUDropdownListMainSec'>
                            <div className="AWUDropdownListSec">
                            <ul className='AWUDropdownList'>
                              {AWUCatData.map((val) =>{
                                return(
                                  <li onClick={onCatOptionClicked(val.categories_Name)}  className='AWUDropdownListItem' key={val.categories_Name}>
                                    {val.categories_Name}
                                  </li>
                                )
                              })}
                                
                            </ul>
                            </div>
                        </div>
                    )}
            </div>
            {/* <input type="text" class="bInput" id="AWUStoreName" onChange={(e)=>{setLocality(e.target.value)}}/> */}
            
            
            <div  className='AWUcity' for="AWUStoreName">
                    <div  className='AWUDropdownbtn' onClick={DropDownCity} >
                        {showCity || "City"}
                    </div>
                    {isCity && (
                        <div  ref={dropdownCityRef} className='AWUDropdownListMainSec'>
                            <div className="AWUDropdownListSec">
                            <ul className='AWUDropdownList'>
                                {AWUCityData.map((val) =>{
                                  return(
                                    <li onClick={onCityOptionClicked(val)}  className='AWUDropdownListItem' key={val}>
                                      {val}
                                    </li>
                                  )
                                })}
                            </ul>
                            </div>
                        </div>
                    )}
                    
            </div>
            {/* <input type="text" class="bInput" id="AWUStoreName" onChange={(e)=>{setCity(e.target.value)}} /> */}
            
            
                
            <button class="AWUSubmitBtn" onClick={() => AWUData()} >Submit</button>
            </form>
            </div>  
            
        </div>
        
        
        </>
    );
}
export default AWU;