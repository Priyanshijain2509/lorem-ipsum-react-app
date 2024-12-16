import React, { useState, useEffect } from "react";
import '../../assets/styles/Form/login.css';
import '../../assets/styles/Form/form.css';
import { Input } from "../../imports/componentsImports";
import { Link } from "react-router-dom";
import UserValidator from "../../commons/UserValidator";

const checkIfEmailExists = async (email) => {
  try {
    const response = await fetch('/api/v1/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    });
    const data = await response.json();
    return data.exists;
  } catch (error) {
    console.error("Error checking email:", error);
    return false;
  }
};

export default function SignIn() {
  const [emailError, setEmailError] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'email' && formData.email.length >= 5) validateEmail(value);
  };

  const validateEmail = async (email) => {
    const validator = new UserValidator();
    const errors = validator.validate([{ id: 'email', value: email }]);
    setEmailError(errors.email || false);
    if (!errors.email) {
      setIsEmailValid(true);
      const exists = await checkIfEmailExists(email);
      setEmailExists(exists);
    } else {
      setIsEmailValid(false);
      setEmailExists(false);
    }
  };

  return (
    <>
      <div className='login-sideBar center-row'>
        <div className="login-image center-col-y">
          <img src='src/assets/Login.jpg' alt="Login" />
        </div>
      </div>
      <div className="login-mainSection center-col-y">
        <div className="login-fields center-col-x">
          <div className="mobile-signin-view center-col-x">
            <img className="login-mobile-img" src='src/assets/login.png'></img>
            <h1 className="login-heading">Login</h1>
            
            {/* Email Input */}
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              required
              className="mobile-sign-input"
            />
            
            {emailError && (
              <div className="error-message-text" style={{ color: "red" }}>
                {emailError}
              </div>
            )}
            <div className={`password-container center-col-x ${isEmailValid ? 'slide-down' : ''}`}>
              {isEmailValid && (
                <>
                  <Input
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Enter your password"
                    className="mobile-sign-input"
                    required
                  />
                  <Link to="/" className="login-forgetPassword center-col">
                    <span>Forget your password?</span>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* {isEmailValid && !emailExists && formData.password !== '' && (
            <div className="error-message-text" style={{ color: "red" }}>
              Email not found.
            </div>
          )} */}

          <div className="mobile-signin-button center-col-x">
            {!isEmailValid && (
              <button className='continue-button'>Continue</button>
            )}
            {isEmailValid && (
              <button className='login-button'>Login</button>
            )}
            <span className="no-acc-msg">
              Don't have an account? <Link to='/'><span>Sign up</span></Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
