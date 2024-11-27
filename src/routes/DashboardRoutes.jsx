import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, UnhandledRoutes } from '../imports/import';

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="*" element={<UnhandledRoutes />} />
    </Routes>
  );
}
