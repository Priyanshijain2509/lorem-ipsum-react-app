import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../assets/styles/Navbar/navbar.css'
import { ProfileIcon } from '../../icons/svg';

export default function NavbarFooter() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  return (
    <div className='navbar-footer'>
      <ul className='navbar-footer-links'>
        <li className='navbar-item' onClick={toggleDropdown} title='Profile'>
          <Link to="/" className="navbar-link navbar-profile-button center-row-y">
            <ProfileIcon className='navbar-icon' />
            <span>Full Name</span>
          </Link>

          {dropdownVisible && (
            <ul className="profile-dropdown">
              <li><a href="/profile" className="profile-dropdown-link">Profile</a></li>
              <li><a href="/logout" className="profile-dropdown-link">Sign Out</a></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  )
}