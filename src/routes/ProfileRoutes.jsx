import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Profile, UnhandledRoutes } from '../imports/import';

export default function PricingRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Profile />}/>
        <Route path="*" element={<UnhandledRoutes />} />
      </Routes>
  );
}
