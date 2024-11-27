import React from "react";
import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from "../../icons/svg";

export default function LandingFooter() {
  return(
    <div className='landing-footer'>
      <div className="landing-footer-1">
        <h3>Lorem Ipsum</h3>
        <p>Empowering businesses with cutting-edge CRM solutions.</p>
        <br/>
        <p className="copywrite">© 2024 Your CRM Company. All Rights Reserved.</p>
      </div>
      <div className="landing-footer footer-options">
        <div className="landing-footer-2">
          <p>Resources</p>
          <ul>
            <li>Blog</li>
            <li>Case Studies</li>
            <li>FAQs</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="landing-footer-3">
          <p>Connect With Us</p>
          <div className="social-connections">
            <a href="#" className="social-icon">
              <TwitterIcon />
              <span>Follow on Twitter</span>
            </a>
            <a href="#" className="social-icon">
              <FacebookIcon />
              <span>Like on Facebook</span>
            </a>
            <a href="#" className="social-icon">
              <InstagramIcon />
              <span>See Our Insta</span>
            </a>
            <a href="#" className="social-icon">
              <LinkedInIcon />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="landing-footer-4">
          <p>Legal</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
