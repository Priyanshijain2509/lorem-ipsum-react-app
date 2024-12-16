import React from "react";
import '../../assets/styles/Form/forgotPassword.css';
import { Input } from "../../imports/componentsImports";
import { Link } from "react-router-dom";

export default function  ForgotPassword(){
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
              // value={formData.email}
              // onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              required
              className="mobile-forgot-input"
            />
          </div>
          <div className="forget-mobile-view-button center-col-x">
            <button className='continue-button'>Continue</button>
            <span className="no-acc-msg">
              Don't have an account? <Link to='/'><span>Sign up</span></Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )   
}
