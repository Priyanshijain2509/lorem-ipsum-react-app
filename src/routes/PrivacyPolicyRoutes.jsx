import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UnhandledRoutes, PrivacyPolicy } from '../imports/import';

export default function PrivacyPolicyRoutes() {
  return (
      <Routes>
        <Route path="/" element={<PrivacyPolicy />}/>
        <Route path="*" element={<UnhandledRoutes />} />
      </Routes>
  );
}
