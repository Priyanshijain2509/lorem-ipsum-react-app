import React, { useState } from "react";
import { HamBurgIcon, CloseIcon } from "../../icons/svg";

export default function LandingHeader() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="landing-header">
      <div className="hamburgIcon" onClick={toggleSidebar}>
        {isSidebarVisible ? <CloseIcon /> : <HamBurgIcon />}
        <h2 className="landing-heading display-flex-content-center">LOREM IPSUM</h2>
      </div>
      <ul className={`landing-header-features ${isSidebarVisible ? "visible" : ""}`}>
        <li className="landing-item">
          <a href="/about" className="landing-link">
            <span>About</span>
          </a>
        </li>
        <li className="landing-item">
          <a href="/features" className="landing-link">
            <span>Features</span>
          </a>
        </li>
        <li className="landing-item">
          <a href="/pricing" className="landing-link">
            <span>Pricing</span>
          </a>
        </li>
        <li className="landing-item">
          <a href="/testimonials" className="landing-link">
            <span>Testimonials</span>
          </a>
        </li>
        <li className="landing-item signIn-for-mobile-view">
          <a href="/*" className="landing-link">
            <span>Sign In</span>
          </a>
        </li>
      </ul>
      <ul className="landing-header-button display-flex-content-center">
        <li className="landing-item">
          <a href="/*" className="landing-link">
            <span>Sign In</span>
          </a>
        </li>
        <li className="contact-sales-button">
          <a href="/dashboard" className="landing-link-button">
            <span>Contact sales</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
