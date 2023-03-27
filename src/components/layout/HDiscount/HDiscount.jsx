import React, {useEffect} from "react";
import './HDiscount.css';
import { Link } from "react-router-dom";

const HDiscount = () =>{
    return(
        <>
        <div className="hDiscountSec">
            <Link to={"/discount/Gold"}>
            <img src="https://www.kubeshop.in/wp-content/uploads/2022/07/Coupons-01.webp" className="hDiscountImg"></img>
            </Link>
            <Link to={"/discount/Platinum"}>
            <img src="https://www.kubeshop.in/wp-content/uploads/2022/07/Coupons-02.webp" className="hDiscountImg"></img>
            </Link>
        </div>
        </>
    )
}

export default HDiscount;