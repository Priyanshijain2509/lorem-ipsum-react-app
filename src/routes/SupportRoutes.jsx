import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Supports, UnhandledRoutes } from '../imports/import';

export default function SupportRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Supports />}/>
      <Route path="*" element={<UnhandledRoutes />} />
    </Routes>
  );
}
