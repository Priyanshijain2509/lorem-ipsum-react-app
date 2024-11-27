import React from "react";
import '../assets/styles/landing.css'
import { LandingBody, LandingFooter, LandingHeader } from "../imports/componentsImports";

export default function Landing() {
  return(
    <div className="landing-container display-flex-content-center">
      <LandingHeader />
      <LandingBody />
      <LandingFooter />
    </div>
  )
}
