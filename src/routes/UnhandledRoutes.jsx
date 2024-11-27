import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Unhandled } from '../imports/import';

export default function UnhandledRoutes() {
  return (
      <Routes>
        <Route path="*" element={<Unhandled />} />
      </Routes>
  );
}
