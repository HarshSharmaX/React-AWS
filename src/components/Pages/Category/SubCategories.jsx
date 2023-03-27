import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getCat} from "../../../Service/Actions/HomeActions"
// import { getCat } from '../../../Service/Actions/HomeActions';
import { Link } from "react-router-dom";

import "./SubCategories.css"


const SubCategories = (props) => {


const dropdownRef = useRef(null);
const [SubCategory, setSubCategory] = useState(false)



useEffect(() => {
  const pageClickEvent = (e) => {
    if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
      
      document.body.classList.remove('catpagebackground');
      setSubCategory(!SubCategory);
    }
    console.log(e);
  };

  // If the item is active (ie open) then listen for clicks
  if (SubCategory) {
    document.body.classList.add('catpagebackground');
    window.addEventListener('click', pageClickEvent);
  }

  else {
    document.body.classList.remove('catpagebackground');
  }

  

  

  return () => {
    
    window.removeEventListener('click', pageClickEvent);
  }

}, [SubCategory]);

const onSubCatClick = () => {
    setSubCategory(!SubCategory);
  
}


    return(
        <>
            <div className="categorysection"  >
                <div onClick={onSubCatClick} className={`subcat-trigger ${SubCategory ? "active" : "inactive"}`}>
                  <div className="catimgsection">
                      <img className={`catimg ${SubCategory ? "active" : "inactive"}`} src={props.img} alt="avatar_img" />
                  </div>
                  <h2 className="catname">{props.name}</h2>
                </div>
                <div className={`subcatindicator ${SubCategory ? "active" : "inactive"}`}><img className="subcatindicatorimg" src="https://www.kubeshop.in/wp-content/uploads/2022/05/Down-Button-1.webp"></img></div>
                <nav
                ref={dropdownRef}
                className={`subcat ${SubCategory ? "active" : "inactive"}`}
                >
                  
                    <ul >
                    {props.subcat?.map((val) => {
                      return(
                         <li>
                          <Link to={`/Offers?cat=${props.name}&Subcat=${val.subcat_Name}`}>{val.subcat_Name}</Link>
                         </li>
                
                      )
                      })}
                    </ul>
                </nav>
            </div>
        
        </>
    )
}

export default SubCategories;