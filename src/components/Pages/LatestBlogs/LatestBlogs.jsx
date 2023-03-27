import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { getBlog,getBlogcategory } from '../../../Service/Actions/BlogActions';
import SingleBlog from '../SingleBlog/SingleBlog';
import BlogCard from "./BlogCard"
import "./LatestBlogs.css";



const LatestBlogs = () =>{

   const [ blogCategory, setBlogCategory ]=useState("")

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBlog(blogCategory));
   }, [dispatch,blogCategory]);
  
   const blogData = useSelector(
       (state) => state.blogReducer.post
   );

   

   useEffect(() => {
    dispatch(getBlogcategory());
}, [dispatch]);

const postCatData = useSelector(
   (state) => state.blogCategoryReducer.postCat
);


    return(
        <>
            <div>
                <h2 className='Lblogsheading'>Latest Blogs</h2>
                <select className="Lbsortcategory" name="sortcategory" id='category' onChange= {(e)=>{
                    setBlogCategory(e.target.value);
                }}>
                    <option value="">Sort by Category</option>
                    {postCatData?.map((val) => {
                        return (
                           <option key={val.id} >{val}</option>
                        )
                    })}
                </select>
                <select className="LbsortsubCategory" name="sortcategory" >
                    <option value="Greater Noida">Sort by Date</option>
                    <option value="Greater Noida">Oldest to Latest</option>
                    <option value="Noida">Latest to Oldest</option>
                </select>


                { blogData?.map((val) => {
                
                return(
                    <BlogCard key={val._id} tImage={val.thumbnailImage} date={val.createdAt} title={val.title} slugtitle={val.slugtitle} desc={val.desc} fImage={val.featuredImage} category={val.category}/>
                )
                })}
                

                
            </div>
        </>
    )
}

export default LatestBlogs;
