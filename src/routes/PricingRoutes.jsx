import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Pricing, UnhandledRoutes } from '../imports/import';

export default function PricingRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Pricing />}/>
      <Route path="*" element={<UnhandledRoutes />} />
    </Routes>
  );
}
