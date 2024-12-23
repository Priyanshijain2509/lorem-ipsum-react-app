import React from "react";

export default function MainLayoutBodyFirstSection(){
  return(
    <div className='main-layout-body-section-1 center-row-x'>
      <div className='main-layout-card main-layout-card-1'>
        <div className='card-header center-row card-1-header'>
          <span className='card-name'>Teams</span>
          <span className='card-percent'>+25%</span>
        </div>
        <div className='card-body card-1-body center-col-x-y'>
          <div className='card-numbers'>45.9K</div>
          <div className='card-target-numbers'>Target test</div>
        </div>
      </div>
      <div className='main-layout-card main-layout-card-2'>
        <div className='card-header center-row card-2-header'>
          <span className='card-name'>Users</span>
          <span className='card-percent'>+25%</span>
        </div>
        <div className='card-body card-2-body center-col-x-y'>
          <div className='card-numbers'>45.9K</div>
          <div className='card-target-numbers'>Target test</div>
        </div>
      </div>
      <div className='main-layout-card main-layout-card-3'>
        <div className='card-header center-row card-3-header'>
          <span className='card-name'>Active Users</span>
          <span className='card-percent'>+5%</span>
        </div>
        <div className='card-body card-3-body center-col-x-y'>
          <div className='card-numbers'>459</div>
          <div className='card-target-numbers'>Target test</div>
        </div>
      </div>
      <div className='main-layout-card main-layout-card-4'>
        <div className='card-header center-row card-4-header'>
          <span className='card-name'>Test</span>
          <span className='card-percent'>+25%</span>
        </div>
        <div className='card-body card-4-body center-col-x-y'>
          <div className='card-numbers'>45.9K</div>
          <div className='card-target-numbers'>Target test</div>
        </div>
      </div>
    </div>
  )
}