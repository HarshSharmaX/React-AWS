import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getCat} from "../../../Service/Actions/HomeActions"
import SubCategories from './SubCategories';
import "./Categories.css";


const Categories = () =>{

    const dispatch = useDispatch();

    useEffect(() => {
           dispatch(getCat());
      }, [dispatch]);
  
      const catData = useSelector(
          (state) => state.catReducer?.cats
      );
  
      

    return(
        <>
            <div >
            <h2 className="catheading">All Category</h2>
            {catData?.map((val) => {
                return(
                <SubCategories key={val.categories_Name} name={val.categories_Name} img={val.url} subcat={val.sub_cat}  />
                
                )
            })}
            </div>
        </>
    )
}

export default Categories;