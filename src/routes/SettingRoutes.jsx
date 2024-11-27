import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Settings, UnhandledRoutes } from '../imports/import';

export default function SettingRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Settings />}/>
      <Route path="*" element={<UnhandledRoutes />} />
    </Routes>
  );
}
