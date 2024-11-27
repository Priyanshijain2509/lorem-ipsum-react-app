import React from 'react'
import '../../assets/styles/Navbar/navbar.css'
import { HamBurgIcon } from '../../icons/svg'

export default function NavbarHeader() {
  return (
    <div className='navbar-header'>
      <div className='navbar-header-content center-x'>
        <span className='hamburg-icon'><HamBurgIcon /></span>
        <div className='navbar-heading'>Lorem Ipsum</div>
      </div>
    </div>
  )
}