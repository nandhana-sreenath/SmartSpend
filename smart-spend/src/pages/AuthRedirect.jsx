import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRedirect = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  // If user is not onboarded, redirect to onboarding
  if (!user.onboarded) {
    return <Navigate to="/onboarding" />;
  }

  // If onboarded, go straight to dashboard
  return <Navigate to="/dashboard" />;
};

export default AuthRedirect;