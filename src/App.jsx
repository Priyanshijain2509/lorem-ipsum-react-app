import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import './assets/styles/global/main.css';
import { MainLayoutRoutes, LandingRoutes } from "./imports/import";
import { SignInPage, SignUpPage, ForgotPasswordPage } from "./imports/screensImports";
import { Toaster } from 'react-hot-toast';
import AuthGuard from "./guards/AuthGuards";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          {/* Protected routes with AuthGuard */}
          <Route path="/*" element={<AuthGuard element={<MainLayoutRoutes />} />} />

          {/* Public landing pages */}
          <Route path="/landing/*" element={<LandingRoutes />} />

          {/* Auth routes */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>

        {/* Toast notifications */}
        <Toaster position="top-right" reverseOrder={false} />
      </Router>
    </RecoilRoot>
  );
}

export default App;
