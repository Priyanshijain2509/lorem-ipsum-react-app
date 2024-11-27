import React from "react";
import '../../assets/styles/Form/form.css'

export default function Form({ title, subTitle, component }) {
  return (
    <div className="form-container center-x-y">
      <div className="form">
        <div className="form-header center-col-x-y">
          <h1 className="form-heading">{title}</h1>
          <h3 className="form-subheading">{subTitle}</h3>
        </div>
        <div>
          {component || <p>Please pass the proper props for the form.</p>}
        </div>
      </div>
    </div>
  );
}
