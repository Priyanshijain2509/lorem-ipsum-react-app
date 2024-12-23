import React, { useState, useRef, useEffect } from 'react';
import '../../assets/styles/Form/form.css';
import { Input } from '../../imports/componentsImports';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    companyDescription: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    avatar: '',
  });

  const [loading, setLoading] = useState(false);  // Loading state
  const navigate = useNavigate();
  const [section, setSection] = useState(1);
  const [isFirstSectionValid, setIsFirstSectionValid] = useState(false);
  const [isSecondSectionValid, setIsSecondSectionValid] = useState(false);

  const progressBarRef = useRef(null);
  const progressTriangleRef = useRef(null);

  useEffect(() => {
    if (progressTriangleRef.current) {
      switch (section) {
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
  };

  const handleNextClickSection1 = () => {
    setLoading(true); // Start loading
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

  const handleNextClickSection2 = () => {
    if (formData.firstName && formData.lastName) {
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

  const formatData = (formData) => {
    const formattedData = new FormData();
    formattedData.append('user[email_address]', formData.email);
    formattedData.append('user[password]', formData.password);
    formattedData.append('user[user_profile_attributes][first_name]', formData.firstName);
    formattedData.append('user[user_profile_attributes][last_name]', formData.lastName);
    // Handle avatar file (check if avatar is selected)
    if (formData.avatar && formData.avatar[0]) {
      formattedData.append('user[user_profile_attributes][avatar]', formData.avatar[0]);
    }
    formattedData.append('user[workspaces_attributes][name]', formData.companyName); 
    formattedData.append('user[workspaces_attributes][description]', formData.companyDescription);
  
    return formattedData;
  };

  const handleSubmit = async () => {
    setLoading(true);  // Start loading

    const formattedData = formatData(formData);
  
    fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, {
      method: 'POST',
      body: formattedData,
    })
    .then(response => response.json())
    .then(data => {
      setLoading(false);  // Stop loading
      console.log(data);
      if (data.success) {
        toast.success('A confirmation mail has been sent to your email address.');
        navigate('/signin');
      } else {
        toast.error(data.message);
      }
    })
    .catch(error => {
      setLoading(false);  // Stop loading on error
      toast.error('An error occurred. Please try again.');
    });
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
        {/* Only show the form sections if not loading */}
        {!loading && (
          <>
            {/* Section 1 */}
            <div
              className={`form-section-1 center-col-x form-section ${section === 1 ? 'active' : 'disabled'} ${section === 2 ? 'slideUp' : ''} ${section === 3 ? 'slideUp2x' : ''}`}
            >
              <h2 className='form-section-heading'>Account Information</h2>
              <Input
                label='Email'
                name='email'
                type='email'
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder='Enter your email'
                required
              />
              <Input
                label='Password'
                name='password'
                type='password'
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder='Enter your password'
                required
              />
              <Input
                label='Confirm Password'
                name='confirmPassword'
                type='password'
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                placeholder='Confirm your password'
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
                label='First Name'
                name='firstName'
                type='text'
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder='Enter your first name'
                required
              />
              <Input
                label='Last Name'
                name='lastName'
                type='text'
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder='Enter your last name'
                required
              />
              <Input
                label='Select Avatar'
                name='avatar'
                type='file'
                value={formData.avatar}
                onChange={(value) => handleInputChange('avatar', value)}
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
                label='Company Name'
                name='companyName'
                type='text'
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                placeholder='Enter your company name'
                required
              />
              <Input
                label='Company Description'
                name='companyDescription'
                type='text'
                value={formData.companyDescription}
                onChange={(e) => handleInputChange('companyDescription', e.target.value)}
                placeholder='Enter your company description'
                required
              />
              <div className='formButtonToolbar'>
                <button className='prevButton' onClick={handlePrevClick}>Prev</button>
                <button className='submitButton' onClick={handleSubmit}>
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </>
        )}

        {/* Loader */}
        {loading && <div className="loader"></div>} {/* You can use your custom loader */}
      </div>
    </>
  );
}
