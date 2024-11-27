import React from 'react'
import '../../assets/styles/Navbar/navbar.css'
import { NavbarHeader, NavbarMain, NavbarFooter } from '../../imports/componentsImports';

export default function Navbar() {
  return (
    <div className='screen-section-first navbar-container'>
      <div className='navbar-section-1'>

      </div>
      <div className='navbar-section-2'>
        <NavbarHeader/>
        <NavbarMain/>
        <NavbarFooter />
      </div>
    </div>
  )
}
