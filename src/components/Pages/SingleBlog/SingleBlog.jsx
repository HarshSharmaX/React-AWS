import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link , useParams} from "react-router-dom";
import RecentBlogCard from './RecentBlogCard';

import { getBlog,getBlogcategory,getSingleBlog,getRelatedBlog } from '../../../Service/Actions/BlogActions';
import "./SingleBlog.css";
import { useSearchParams } from "react-router-dom";


const SingleBlog = (props) => {
  const {title} = useParams()
  let [searchParams, setSearchParams] = useSearchParams();

  function instaShare(){
      
    let postUrl = encodeURI(document.location.href);
    let url= `https://www.instagram.com/sharer.php?u=${postUrl}`

    let win=window.open(url,"url");
    win.focus();
  
}
    
   function facebookShare(){
      
        let postUrl = encodeURI(document.location.href);
        let url= `https://www.facebook.com/sharer.php?u=${postUrl}`;

        let win=window.open(url,"url");
        win.focus();
      
    }


    function twitterShare(){
      
      let postUrl = encodeURI(document.location.href);
      let url= `https://twitter.com/share?url=${postUrl}`;

      let win=window.open(url,"url");
      win.focus();
    
  }

  function pinterestShare(){
      
    let postUrl = encodeURI(document.location.href);
    let url= `https://pinterest.com/pin/create/bookmarklet/?&url=${postUrl}`;

    let win=window.open(url,"url");
    win.focus();
  
}
  
    const dispatch = useDispatch();
    
    useEffect(() => {
      window.scrollTo(0, 0);
        dispatch(getSingleBlog(title));
   }, [dispatch,title]);
  
   const singleBlogData = useSelector(
       (state) => state.SingleBlogReducer.post
   );

  
   useEffect(() => {
    dispatch(getRelatedBlog(searchParams.get("cate")));
}, [dispatch,searchParams.get("cate")]);

  const relatedBlogData = useSelector(
   (state) => state.RelatedBlogReducer.post
  );

  
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });

 


   return (
      <>

        <div className='SBmainsections'>
        { singleBlogData?.map((val) => {
              
                return(

                <div className='SBblogsection'>
                  <h2 className='SBheading'>{val.title}</h2>
                  <h3 className='SBauthor'>{val.author}</h3>
                  <div className='SBtimestamp'>
                    <img className='SBplanner' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Planner.webp'></img>
                    <p className='SBdate'>{dateFormatter.format(Date.parse(val.createdAt))}</p>
                  </div>
                  <div className='SBcontentsec'>
                    <img className='SBimg' src={val.featuredImage}></img> 
                    <div className='SBcontenttext' dangerouslySetInnerHTML={{ __html: val.desc}} />
                  </div>
                 
                 
                </div>
                )
          })}

          <div className='SBRelatedBlogSec'>
            <h2 className='SBRelatedBlogHeading'>Related Blog</h2>
          { relatedBlogData?.map((val) => {
          
              return(
                  
                    <RecentBlogCard key={val._id} thumbnailImage={val.thumbnailImage} date={val.createdAt} title={val.title} slugtitle={val.slugtitle} desc={val.desc} fImage={val.featuredImage} category={val.category}/>    
                    )
          })}
          </div>
          
        </div>
  
        <div className='SBShareSection'>
          <h2 className='SBShareHeading'>Share</h2>
          
          <img  className='SBShareButtons' src='https://www.kubeshop.in/wp-content/uploads/2022/05/facebook-_1_.webp' onClick={facebookShare}></img>
          <img className='SBShareButtons' src='https://www.kubeshop.in/wp-content/uploads/2022/05/twitter.webp' onClick={twitterShare}></img>
          <img className='SBShareButtons' src='https://www.kubeshop.in/wp-content/uploads/2022/05/pinterest.webp' onClick={pinterestShare}></img>
        </div>
  
        {/* <div className='SBNextBlogSec'>
          <h2 className='SBNextBlogHeading'>Read Next Blog</h2>
          <div className='SBNextBlogCard'>
            <img className='SBNextBlogimg' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Rectangle-4557.webp'></img>
            <h2 className='SBNextBlogTitle'>Morbi consequat arcu non dolor interdum</h2>
          </div>
          <div className='SBNextBlogCard'>
            <img className='SBNextBlogimg' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Rectangle-4557.webp'></img>
            <h2 className='SBNextBlogTitle'>Morbi consequat arcu non dolor interdum</h2>
          </div>
          <div className='SBNextBlogCard'>
            <img className='SBNextBlogimg' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Rectangle-4557.webp'></img>
            <h2 className='SBNextBlogTitle'>Morbi consequat arcu non dolor interdum</h2>
          </div>
        </div> */}
      </>
    )
  }
  
  export default SingleBlog;