import React ,{useState} from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import "./Contact.css"


const Contact = () => {

    const [firstName,setFirstName]= useState(null);
    const [lastName,setLastName]= useState(null);
    const [phone,setPhone]= useState(null);
    const [email,setEmail]= useState(null);
    const [message,setMessage]= useState(null);

    const contactData = () => {
        const data = {
            firstName: firstName,
            lastName: lastName,
            mobileNo: phone,
            email: email,
            message : message,
        };
        Axios.post("https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/contactUs/new", data).then((res) => {
          window.location.reload();
          alert("Submit Successfully");
        });
      };
    return (
        <>
            <div className='container contact container-sm'>
                <h1>Contact Us</h1>
                <form className='mt-md-5 mt-2 contactForm'  >
                    <div className='row'>
                        <div class="col-md-5 col-11 ms-md-4 mt-md-5 mb-2 input-group-lg">
                        <label for="BAPStoreName" class="col-form-label cLabel">First Name</label>
                        <input type="text" class="form-control mt-2 cInput" id="BAPStoreName" name="First Name" onChange={(e)=>{setFirstName(e.target.value)}}/>
                        </div>
                        <div class="col-md-5 col-11 mb-2 mt-md-5 offset-md-1 input-group-lg">
                        <label for="BAPStoreName" class="col-form-label cLabel">Last Name</label>
                        <input type="text" class="form-control mt-2 cInput" id="BAPStoreName" name="Last Name" onChange={(e)=>{setLastName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="col-md-5 col-11 ms-md-4 mt-md-3 mb-2 input-group-lg">
                            <label for="BAPStoreName" class="col-form-label cLabel">Phone No.</label>
                            <input type="number" class="form-control mt-2 cInput" id="BAPStoreName" name="Phone No" onChange={(e)=>{setPhone(e.target.value)}}/>
                        </div>
                        <div class="col-md-5 col-11 mb-2 mt-md-3 offset-md-1 input-group-lg">
                            <label for="BAPStoreName" class="col-form-label cLabel">E Mail</label>
                            <input type="email" class="form-control mt-2 cInput" id="BAPStoreName" name="E Mail" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                    </div>
                        <div class="col-md-11 col-11 ms-md-1 mt-md-3 mb-2  input-group-lg">
                            <label for="contactMessage" class="col-form-label cLabel">Message</label>
                            <textarea class="form-control cInputMessage" id="contactMessage" rows="7" name="Message" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                        </div>

                    <button  class=" mt-md-5 mb-4 mt-3 contactBtn" onClick={() => contactData()}>Submit</button>

                </form>
            </div>
            <div className='contactBtnSec col-md-6 col-10 mb-4 '>
                
                    <Link to={`/Become-A-Partner`}>
                    <button type="" class="contactExternalBtn col-5 ms-md-5 ms-4">Become A Vendor</button>
                    </Link>
                    <Link to={`/Advertise-With-Us`}>
                    <button type="" class="contactExternalBtn col-5 ms-5">Advertise With Us</button>
                    </Link>
                
            </div> 
        </>
    );
};

export default Contact;