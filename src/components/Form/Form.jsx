import React from "react";
import '../../assets/styles/Form/form.css'

export default function Form({ title, subTitle, component }) {
  const pageUrl = window.location.pathname;
  // Check if any required prop is missing
  if (!title || !component) {
    return (
      <div className="form-container center-x-y">
        <div className="form-error-container center-row-y">
          <div>
            <h1 className="form-heading">Error: Missing Required Props</h1>
            <h3 className="form-subheading">
              Please provide all the required props: title and component.
            </h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container center-x-y">
      <div className="form center-row">
        {pageUrl === '/signup' || '/signin' ? (
          <>
            {component}
          </>
        ) : (
          <div className="form-main-section">
            <div className="form-header center-col-y">
              <h1 className="form-heading">{title}</h1>
              <h3 className="form-subheading">{subTitle}</h3>
            </div>
            <div>
              {component}
            </div>
          </div>
          )
        }
      </div>
    </div>
  );
}
