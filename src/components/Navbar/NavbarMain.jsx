import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Navbar/navbar.css';
import { HomeIcon, DashboardIcon, Profile, ProfileIcon } from '../../icons/svg';

export default function NavbarMain() {
  const [selectedOption, setSelectedOption] = useState("Home");

  return (
    <div className='navbar-main'>
      <ul className="navbar-links">
        <li
          className={`navbar-item ${selectedOption === 'Home' ? 'active' : 'hover-element'} center`}
          onClick={() => setSelectedOption('Home')}
        >
          <Link to="/" className="navbar-link center-row-y">
            <HomeIcon fillColor={selectedOption === 'Home' ? '#fff' : '#6B727A'} />
            <span>Home</span>
          </Link>
        </li>
        <li
          className={`navbar-item ${selectedOption === 'Dashboard' ? 'active' : 'hover-element'} center`}
          onClick={() => setSelectedOption('Dashboard')}
        >
          <Link to="/dashboard" className="navbar-link center-row-y">
            <DashboardIcon fillColor={selectedOption === 'Dashboard' ? '#fff' : '#6B727A'} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li
          className={`navbar-item ${selectedOption === 'SignUp' ? 'active' : 'hover-element'} center`}
          onClick={() => setSelectedOption('SignUp')}
        >
          <Link to="/signup" className="navbar-link center-row-y">
            <ProfileIcon fillColor={selectedOption === 'SignUp' ? '#fff' : '#6B727A'} />
            <span>Sign Up</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
