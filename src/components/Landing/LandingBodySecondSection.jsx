import React from "react";
import { Profile, Location, Server } from "../../icons/svg";

export default function LandingBodySecondSection() {
  return (
    <div className="landing-body-second display-flex-content-center">
      <div className="landing-body-second-section-1">
        <div className="headline">
          More than a system
        </div>
        <div className="subheading">
        With Us, you will be able to access the performance of all your stores, 
        from the number of daily sales to knowing the amount of expenses and their salaries. 
        You will be able to control your business from wherever you are and also understand 
        what is missing for your store to be a great success.
        Our platform provides real-time insights, enabling you to make data-driven decisions and optimize your operations for greater efficiency.
        Additionally, our intuitive dashboard makes tracking key metrics effortless, helping you stay on top of your business at all times.
        </div>
        <div className="landing-body-second-subsection">
          <div className="landing-body-icons display-flex-content-center">
            <div><Profile /></div>
            <div>
              <p className="icon-numbers">8000+</p>
              <p className="icon-names">Users</p>
            </div>
          </div>
          <div className="landing-body-icons display-flex-content-center">
            <div><Location /></div>
            <div>
              <p className="icon-numbers">340+</p>
              <p className="icon-names">Locations</p>
            </div>
          </div>
          <div className="landing-body-icons display-flex-content-center">
            <div><Server /></div>
            <div>
              <p className="icon-numbers">500+</p>
              <p className="icon-names">Servers</p>
            </div>  
          </div>
        </div>
      </div>
      <div className="landing-body-second-section-2">
        <img src="src/assets/cart2.jpg" alt="Cart" />
      </div>
    </div>
  );
}