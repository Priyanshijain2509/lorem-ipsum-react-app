import React from 'react';
import { MainLayoutBodyFirstSection, MainLayoutBodySecondSection, MainLayoutBodyThirdSection } from '../../imports/componentsImports';

export default function MainLayoutBody() {
  return(
    <div className='main-layout-body'>
      <MainLayoutBodyFirstSection />
      <MainLayoutBodySecondSection />
      <MainLayoutBodyThirdSection />
    </div>
  )
}