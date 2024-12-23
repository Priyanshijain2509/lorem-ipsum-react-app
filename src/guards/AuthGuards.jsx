import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthGuard = ({ element }) => {
  const auth = localStorage.getItem('token');
  const location = useLocation();

  // If the user is not authenticated (token is not found in local storage),
  // redirect them to the landing page and pass the current location state.
  if (!auth) {
    return <Navigate to="/landing" replace state={{ from: location }} />;
  }

  // If authenticated, render the passed element
  return element;
};

export default AuthGuard;
