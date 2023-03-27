import React, { useEffect, useState } from "react";
import "./DownloadButton.css";
import { Link } from "react-router-dom";
import { connect, useSelector,useDispatch } from "react-redux";
import Axios from 'axios';
import FileSaver from 'file-saver';
import { screenToggle } from "../../../../../Service/Actions/Action";
import { Modal } from "react-bootstrap";
import Registration from "../../../Registration/Registration";
import Login from "../../../Login/Login";
import OtpScreen from "../../../OtpScreen/OtpScreen";

function DownloadButton(props) {

    const dispatch = useDispatch();

    const [loginStatus, setLoginStatus] = useState();
    const [showLogin, setSetLoginFlag] = useState(false);
    const [counter , setCounter] = useState(props.counter ? props.counter : 0); 
    
    useEffect(() => {
      setLoginStatus(localStorage.getItem("isUserVerify"));
    }, [  
      loginStatus,
      props?.userLoginStatus,
      localStorage.getItem("isUserVerify")
    ]);

    const LoginOpen = () => {
        if (loginStatus === "false") {
            setSetLoginFlag(true);
            dispatch(screenToggle("Login"));
        }
    }

    const handleClose = () => {
        setSetLoginFlag(false);
      }
    const showToast = () => {
        setSetLoginFlag('Enter otp');
    }
    
    
    

    const OffersCounter = () => {
        const data = {
            storeId: props.Id,
            image: props.Image,
            counter: counter,
            
        };
        Axios.put("https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/store/offer/counter", data).then((res) => {
            setCounter(counter+1); 
        });

      };


    const DownloadImage = () => {
        FileSaver.saveAs(props.Image, 'offer.png')
    }

    
    

    

    return(
        <>
            <button 
                className="offerDownloadBtn" 
                onClick={()=>{ loginStatus === "false" ? LoginOpen() : DownloadImage() || OffersCounter(); } }
            >
                Download Now
            </button>
              
            <p className="para"> Downloaded ({counter})</p>

            <Modal
                className="new_modal"
                show={showLogin}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop={ 'static' }
                keyboard={ false }
            >
                <Modal.Body>
                {props?.screenToggle === "Register" && (
                    <Registration closeModal={handleClose} showToast={showToast} />
                )}
                {props?.screenToggle === "Login" && (
                    <Login closeModal={handleClose} showToast={showToast} />
                )}
                {props?.screenToggle === "OTP" && (
                    <OtpScreen closeModal={handleClose} notUser={handleClose} showToast={showToast} />
                )}
                </Modal.Body>
            </Modal>   
        </>
    )
}

export default connect(({toggleScreens }) => ({
    screenToggle: toggleScreens.screenToggle,
  }))(DownloadButton); ;
