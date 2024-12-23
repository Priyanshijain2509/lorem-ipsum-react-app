import React, { useState } from "react";
import '../../assets/styles/Form/forgotPassword.css';
import { Input } from "../../imports/componentsImports";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function  ForgotPassword(){
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleForgotPassword = () => {
    fetch (`${import.meta.env.VITE_BACKEND_URL}/password/forgot_password?email_address=${formData.email}`, {
      method: 'GET',
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if(data.success){
        toast.success(data.response.message);
      } else {
        toast.error(data.message);
      }
    })
  }

  return(
    <div className="forgot-form-mobile-view center-x-y">
      <div className="forgot-sideBar center-col-x">
        <img src='src/assets/forgotPassword.jpg' className="forgot-image" alt="forgotPassswordImage"></img>
        <span className="forgot-image-text">Oops! Did your password go on vacation? Let’s bring it back!</span>
      </div>
      <div className="forgot-mainSection center-col-x-y">
        <div className="forgot-fields">
          <div className="forgot-mobile-view">
            <img src='src/assets/login.png' className="forgot-image-mobile" alt="forgotPassswordImage"></img>
            <span className="forgot-image-text-mobile">Oops! Did your password go on vacation? Let’s bring it back!</span>

            <h2 className="forgot-heading">Forgot Password?</h2>
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              required
              className="mobile-forgot-input"
            />
          </div>
          <div className="forget-mobile-view-button center-col-x">
            <button className='continue-button' onClick={handleForgotPassword}>Continue</button>
            <span className="no-acc-msg">
              Don't have an account? <Link to='/'><span>Sign up</span></Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )   
}
