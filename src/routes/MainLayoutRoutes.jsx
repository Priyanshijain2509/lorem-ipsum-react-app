import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout, Navbar, DashboardRoutes, FaqRoutes, PricingRoutes, PrivacyPolicyRoutes, ProfileRoutes, SettingRoutes, SupportRoutes, UnhandledRoutes } from '../imports/import';

export default function MainLayoutRoutes() {
  return (
    <div className='screen-wrapper'>
      {<Navbar />}
      <Routes>
        <Route index element={<MainLayout />} />
        <Route path="dashboard/*" element={<DashboardRoutes />} />
        <Route path="faqs/*" element={<FaqRoutes />} />
        <Route path="pricing/*" element={<PricingRoutes />} />
        <Route path="privacy_policy/*" element={<PrivacyPolicyRoutes />} />
        <Route path="support/*" element={<SupportRoutes />} />
        <Route path="profile/*" element={<ProfileRoutes />} />
        <Route path="settings/*" element={<SettingRoutes />} />
        <Route path="*" element={<UnhandledRoutes />} />
        
      </Routes>
    </div>
  )
}
