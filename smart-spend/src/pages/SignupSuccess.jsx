// import React from 'react'

// const SignupSuccess = () => {
//   return (
//     <div>SignupSuccess</div>
//   )
// }

// export default SignupSuccess


import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust path as needed

const SignupSuccess = () => {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center"  style={{ backgroundColor: '#DCAB83' }}>
      <div className="p-4 rounded-4 shadow bg-white text-center" style={{ maxWidth: '450px', width: '100%' }}>
        {/* Logo and Branding */}
         <div className="d-flex align-items-center mt-2 ms-6">
                  <img
                    src={logo}
                    alt="SmartSpend Logo"
                    className="me-3"
                    style={{ width: '50px', height: '50px' }}
                  />
                  <div>
                    <h2 className=" fs-20 m-0 kanit-extrabold">SmartSpend</h2>
                    <p className="text-muted opacity-75 small ls-wider mb-0" style={{ letterSpacing: '0.1em' }}>
                      A BUDGET PLANNER APP</p>
                  </div>
                </div>

        {/* Success Message */}
        <h5 className="fw-semibold  mt-5 mb-3">Your account creation is successful!</h5>

        {/* Login Link */}
        <p className="small mt-3 mb-0">
          Back to!{' '}
          <Link to="/login" className="text-primary fw-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupSuccess;