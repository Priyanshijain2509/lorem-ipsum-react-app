import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UnhandledRoutes, Faq } from '../imports/import';

export default function FaqRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Faq />}/>
      <Route path="*" element={<UnhandledRoutes />} />
    </Routes>
  );
}
