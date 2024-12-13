import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {RecoilRoot} from 'recoil';
import './assets/styles/global/main.css';
import { MainLayoutRoutes, LandingRoutes } from "./imports/import";
import { SignInPage, SignUpPage, ForgetPassword } from "./imports/screensImports";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/*" element={<MainLayoutRoutes/>}/>
          <Route path="/landing/*" element={<LandingRoutes />} />
          <Route path="/signup" element= {<SignUpPage />} />
          <Route path='/signin' element= {<SignInPage />} />
          <Route path='/forgot-password' element= {<ForgetPassword />} />
          </Routes>
      </Router>
    </RecoilRoot>
  )
}

export default App
