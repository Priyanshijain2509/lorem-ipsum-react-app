import React from 'react'
import { MainLayoutHeader, MainLayoutBody, MainLayoutFooter } from '../imports/componentsImports'

export default function MainLayout() {
  return (
    <div className='screen-section-second main-container'>
      <MainLayoutHeader />
      <MainLayoutBody />
      <MainLayoutFooter />
    </div>
  )
}
