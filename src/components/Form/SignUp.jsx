import React, { useState, useRef, useEffect } from 'react';
import '../../assets/styles/Form/form.css';
import { Input } from '../../imports/componentsImports';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    date: '',
    age: '',
    avatar: '',
    skills: [],
    favoriteLanguages: [],
    techSkills: null,
    termsAccepted: false,
  });

  const [section, setSection] = useState(1);
  const [isFirstSectionValid, setIsFirstSectionValid] = useState(false);
  const [isSecondSectionValid, setIsSecondSectionValid] = useState(false);

  const progressBarRef = useRef(null);
  const progressTriangleRef = useRef(null);

  useEffect(() => {
    if (progressTriangleRef.current) {
      switch(section) {
        case 1:
          progressTriangleRef.current.style.top = '4%';
          break;
        case 2:
          progressTriangleRef.current.style.top = '29%';
          break;
        case 3:
          progressTriangleRef.current.style.top = '54%';
          break;
        default:
          progressTriangleRef.current.style.top = '0%';
      }
    }
  }, [section]);

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log('formdata', formData);
  };

  const handleNextClickSection1 = () => {
    if (formData.email && formData.password && formData.confirmPassword) {
      document.querySelector('.form-section-1').classList.add('slide-up');
      setTimeout(() => {
        setIsFirstSectionValid(true);
        setSection(2);
        if (progressBarRef.current) {
          progressBarRef.current.style.height = '66.6%';
        }
      }, 500); 
    }
  };

  console.log('section', section);
  
  const handleNextClickSection2 = () => {
    if (formData.firstName && formData.lastName && formData.avatar) {
      setIsSecondSectionValid(true);
      setSection(3);
      if (progressBarRef.current) {
        progressBarRef.current.style.height = '100%';
      }
    }
  };

  const handlePrevClick = () => {
    if (section === 2) {
      setSection(1);
      if (progressBarRef.current) {
        progressBarRef.current.style.height = '33.3%';
      }
    } else if (section === 3) {
      setSection(2);
      if (progressBarRef.current) {
        progressBarRef.current.style.height = '66.6%';
      }
    }
  };

  return (
    <>
      <div className='form-sideBar center-row'>
        <div className='section-name'>
          <div className={`form-sideBar-section-name-1 ${section === 1 ? 'active' : ''}`}><h4>Account Information</h4></div>
          <div className={`form-sideBar-section-name-2 ${section === 2 ? 'active' : ''}`}><h4>Personal Information</h4></div>
          <div className={`form-sideBar-section-name-3 ${section === 3 ? 'active' : ''}`}><h4>Company Information</h4></div>
        </div>
        <div className='progressBar-section center-x'>
          <div className='progressBarTriangle'>
            <div ref={progressTriangleRef} className='progressTriangle'></div>
          </div>
          <div className='progressBar'>
            <div ref={progressBarRef}></div>
          </div>
        </div>
      </div>
      <div className='form-mainSection'>
        {/* Section 1 */}
        <div
          className={`form-section-1 center-col-x form-section ${section === 1 ? 'active' : 'disabled'} ${section === 2 ? 'slideUp' : ''} ${section === 3 ? 'slideUp2x' : ''}`}
        >
          <h2 className='form-section-heading'>Account Information</h2>
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="Enter your email"
            required
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            placeholder="Enter your password"
            required
          />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            placeholder="Confirm your password"
            required
          />
          <div className='formButtonToolbar'>
            <button className='nextButton' onClick={handleNextClickSection1}>Next</button>
          </div>
        </div>

        {/* Section 2 */}
        <div
          className={`form-section-2 center-col-x form-section ${section === 2 ? 'active' : 'disabled'} ${section === 2 ? 'slideUp' : ''} ${section === 3 ? 'slideUp2x' : ''}`}
          style={{ pointerEvents: section === 2 ? 'auto' : 'none', opacity: section === 2 ? 1 : 0.5 }}
        >
          <h2 className='form-section-heading'>Personal Information</h2>
          <Input
            label="First Name"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            placeholder="Enter your first name"
            required
          />
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            placeholder="Enter your last name"
            required
          />
          <Input
            label="Select Avatar"
            name="avatar"
            type="file"
            value={formData.avatar}
            onChange={(value) => handleInputChange('avatar', value)}
            required
          />
          <div className='formButtonToolbar'>
            <button className='prevButton' onClick={handlePrevClick}>Prev</button>
            <button className='nextButton' onClick={handleNextClickSection2}>Next</button>
          </div>
        </div>

        {/* Section 3 */}
        <div
          className={`form-section-3 center-col-x form-section ${section === 3 ? 'active' : 'disabled'} ${section === 2 ? 'slideUp' : ''} ${section === 3 ? 'slideUp2x' : ''}`}
          style={{ pointerEvents: section === 3 ? 'auto' : 'none', opacity: section === 3 ? 1 : 0.5 }}
        >
          <h2 className='form-section-heading'>Company Information</h2>
          <Input
            label="Company Name"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            placeholder="Enter your company name"
            required
          />
          <Input
            label="Company Size"
            name="companySize"
            type="text"
            value={formData.companySize}
            onChange={(e) => handleInputChange('companySize', e.target.value)}
            placeholder="Enter your company size"
            required
          />
          <div className='formButtonToolbar'>
            <button className='prevButton' onClick={handlePrevClick}>Prev</button>
            <button className='submitButton'>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
