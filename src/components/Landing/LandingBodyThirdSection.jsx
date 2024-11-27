import React from "react";
import { Profile, Location, Server } from "../../icons/svg";

export default function LandingBodyThirdSection() {
  return (
    <div className="landing-body-third display-flex-content-center">
      <div className="landing-body-third-heading">Trusted by power-teams worldwide</div>
      <div className="logo-container display-flex-content-center">
        <div className="logo-scroll">
          <div className="logo-scroll-content">
            <img src='src/assets/hubspot-logo.png' alt="hubspot" />
            <img src='src/assets/paypal-logo.jpeg' alt="paypal" />
            <img src='src/assets/shopify-logo.png' alt="shopify" />
            <img src='src/assets/zendesk-logo.png' alt="zendesk" />
            <img src='src/assets/slack-logo.png' alt="slack" />
          </div>
          <div className="logo-scroll-content">
            <img src='src/assets/hubspot-logo.png' alt="hubspot" />
            <img src='src/assets/paypal-logo.jpeg' alt="paypal" />
            <img src='src/assets/shopify-logo.png' alt="shopify" />
            <img src='src/assets/zendesk-logo.png' alt="zendesk" />
            <img src='src/assets/slack-logo.png' alt="slack" />
          </div>
        </div>
      </div>
    </div>
  );
}
