import React, {useState, useEffect} from "react";
import { FaLocationArrow, FaRegHeart } from "react-icons/fa";
import { useDispatch, connect } from 'react-redux';
import { reviewRequest, getReviewRequest } from "../../../../Service/Actions/Vendor";
import StarRatings from "react-star-ratings";
import "./Aboutus.css";

function AboutUS(props) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState();
  const [ratingStart, setRatingStar] = useState();
  const lat = props?.aboutData?.location[0]?.latitude;
  const long = props?.aboutData?.location[0]?.longitude;
  // console.log(lat," + " ,long);

  const iFrameData = `https://www.google.com/maps?q=${lat},${long}&hl=es;&output=embed`;


  const goToDestination = () => {
    window.open( iFrameData );
  };
  
  useEffect(() => {
    dispatch(getReviewRequest(props?.aboutData?._id));
  }, [props.vendorReviewList])

  const postReview = () => {
    dispatch(reviewRequest(props?.aboutData?._id, comment, ratingStart, props.user.data.username,props.user.data.image));
    setComment('');
    setRatingStar(0);
  }

  const changeRating = (newRating) => {
    setRatingStar(newRating)
  }

  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });

  
 
  return (
    <>
      <h1 className="VDaboutUS_header">About</h1>
      <p className="VDaboutUs_desc">{props?.aboutData?.description}</p>
      <hr />
      {props?.aboutData?.media[0]?.youtube ? (
        <div>
          <iframe
            className="pop_up_wrap"
            src={
              "https://www.youtube.com/embed/" +
              props?.aboutData?.media[0]?.youtube
            }
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
          <hr />
        </div>
      ) : (
        <p></p>
      )}
      <h1 className="VDaboutUS_header">Openinig Hours </h1>

      <div className="col-11 time_wrap">
        <ul className="list_about_ul">
          {console.log("opening", props?.aboutData?.openinghours[0]?.montofri)}
          <li>
            {props?.aboutData?.openinghours[0]?.titlekey ? (
              <p>{props?.aboutData?.openinghours[0]?.titlekey}</p>
            ) : (
              <p>Monday - Sunday</p>
            )}
            {props?.aboutData?.openinghours[0]?.titlevalue ? (
              <p>{props?.aboutData?.openinghours[0]?.titlevalue}</p>
            ) : (
              <p> Timing Unavailable</p>
            )}
          </li>
          {props?.aboutData?.openinghours[0]?.title2key ? (
            <li>
              <p>{props?.aboutData?.openinghours[0]?.title2key}</p>
              <p>{props?.aboutData?.openinghours[0]?.title2value}</p>
            </li>
          ) : (
            <p></p>
          )}
        </ul>
      </div>

      <div className="address_wrap">
        <h1 className="VDaboutUS_header">Address</h1>
        <div className="row align-items-center">
          <div className="col-md-5 ms-md-5 ms-0 ps-4">
            <p>{props?.aboutData?.address}</p>
            <div className="get_direction_wrap">
              <p onClick={() => goToDestination()}>
                {" "}
                <FaLocationArrow /> Get Directions
              </p>
            </div>
          </div>
          <div className="col-md-6 text-md-end text-center">
            <div className="map">
              <iframe
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src={iFrameData}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="col-12 rate_this_wrap mt-4 pb-3 text-center">
        <h1 className="VDaboutUS_header">Rate This</h1>
        <StarRatings
          rating={
            props?.getVendorReviewList?.data?.products[0]?.ratings
              ? props?.getVendorReviewList?.data?.products[0]?.ratings
              : 0
          }
          starRatedColor="#25255c"
          numberOfStars={5}
          name="rating"
          starDimension={window.innerWidth < 600 ? "25px" : "35px"}
        />
      </div>

      <hr />

      <div className="col-12 write_your_reviews_section">
        <h1 className="VDaboutUS_header pt-md-4 pt-2">Write Your Review</h1>

        {props?.getVendorReviewList?.data?.products?.[0]?.reviews &&
          props?.getVendorReviewList?.data?.products?.[0]?.reviews?.map(
            (data, index) => {
              return (
                <div key={index} className="col-12 out_box_reviewers">
                  <div className="review_image_wrap">
                    <img
                      src={require("../../../../assets/reviewer_1.png")}
                      alt=""
                    />
                  </div>
                  <div className="review_details_wrap">
                    <h1 className="common_header">
                      {data.email}
                      <span>
                        {dateFormatter.format(Date.parse(data.createdAt))}
                      </span>
                    </h1>
                    <div className="col-12 float-start rieview_list">
                      <StarRatings
                        rating={data.rating}
                        starRatedColor="#25255c"
                        numberOfStars={5}
                        name="rating"
                        starDimension={"15px"}
                        starSpacing={"2px"}
                      />
                    </div>
                    <div className="review_write_display">
                      <p>{data.comment}</p>
                    </div>
                    <div className="likes_wrap_section">
                      <p>
                        <FaRegHeart /> Like{" "}
                      </p>
                      <p>{data.rating} Like</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}

        {props?.aboutData?.reviews?.length <= 0 ? (
          <h1 className="VDaboutUS_noReviews">No reviews</h1>
        ) : null}
      </div>

      <div className="col-12 leave_box_comments_wrap">
        <h1 className="VDaboutUS_header">Leave A Comment</h1>

        <div className="ms-2 ps-5">
          <StarRatings
            rating={ratingStart}
            starRatedColor="#25255c"
            numberOfStars={5}
            starDimension={window.innerWidth < 600 ? "30px" : "35px"}
            changeRating={(e) => changeRating(e)}
            name="rating"
          />
        </div>
        <div className="row">
          <div className="col-md-7 mt-3">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              name=""
              id=""
              className="text_wrap"
              rows="3"
            ></textarea>
            <button
              onClick={() => postReview()}
              className="post_button mt-2"
              type="submit"
            >
              Post
            </button>

            <h3 className="VDaboutUS_allReviews mt-3">
              See All Reviews ({props?.aboutData?.reviews?.length})
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(({ userDetail, vendorDetail }) => ({
  user: userDetail.user,
  vendorReviewList: vendorDetail.vendorReviewList,
  getVendorReviewList: vendorDetail.getVendorReviewList,
}))(AboutUS);
