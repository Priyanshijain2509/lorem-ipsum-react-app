import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UnhandledRoutes, Landing } from '../imports/import';

export default function LandingRoutes() {
  return (
    <div className='screen-wrapper'>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="*" element={<UnhandledRoutes />} />
      </Routes>
    </div>
  );
}
