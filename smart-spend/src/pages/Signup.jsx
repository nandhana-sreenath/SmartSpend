// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png'; // Adjust path as needed

// const Signup= () => {
//   return (
//     <div className="min-vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#DCAB83' }}>
//       <div className="p-4 rounded-4 shadow bg-white" style={{ width: '100%', maxWidth: '400px' }}>
//         {/* Logo */}
//         <div className="text-center mb-3">
//           <img src={logo} alt="SmartSpend Logo" style={{ width: '50px', height: '50px' }} />
//         </div>

//         {/* Heading */}
//         <h3 className="text-center fw-bolder fs-5 mb-4">Sign up</h3>

//         {/* Form */}
//         <form >
//           <div className="mb-3">
//             <label className="form-label fw-bold">Email ID</label>
//             <input type="email" className="form-control rounded-3" placeholder="Enter your email..." />
//           </div>

//           <div className="mb-3">
//             <label className="form-label fw-bold">Name</label>
//             <input type="text" className="form-control rounded-3" placeholder="Enter your name..." />
//           </div>

//           <div className="mb-3">
//             <label className="form-label fw-bold">Password</label>
//             <input type="password" className="form-control rounded-3" placeholder="Enter Password" />
//           </div>

//           <div className="mb-4">
//             <label className="form-label fw-bold">Confirm Password</label>
//             <input type="password" className="form-control rounded-3" placeholder="Confirm Password" />
//           </div>

//           {/* Sign Up Button */}
//           <button type="submit" className="btn btn-peach w-100 rounded-3 text-white ">
//             Sign Up
//           </button>
//         </form>

//         {/* Footer Link */}
//         <p className="text-center mt-3 mb-0 small">
//           Already have account?{' '}
//           <Link to="/login" className="text-primary fw-semibold">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.png'; // Adjust path as needed

// const Signup = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/signupsuccess');
//   };

//   return (
//     <div className="min-vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#DCAB83' }}>
//       <div className="p-4 rounded-4 shadow bg-white" style={{ width: '100%', maxWidth: '400px' }}>
//         {/* Logo */}
//         <div className="text-center mb-3">
//           <img src={logo} alt="SmartSpend Logo" style={{ width: '50px', height: '50px' }} />
//         </div>

//         {/* Heading */}
//         <h3 className="text-center fw-bolder fs-5 mb-4">Sign up</h3>

//         {/* Form */}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label fw-bold">Email ID</label>
//             <input type="email" className="form-control rounded-3" placeholder="Enter your email..." required />
//           </div>

//           <div className="mb-3">
//             <label className="form-label fw-bold">Name</label>
//             <input type="text" className="form-control rounded-3" placeholder="Enter your name..." required />
//           </div>

//           <div className="mb-3">
//             <label className="form-label fw-bold">Password</label>
//             <input type="password" className="form-control rounded-3" placeholder="Enter Password" required />
//           </div>

//           <div className="mb-4">
//             <label className="form-label fw-bold">Confirm Password</label>
//             <input type="password" className="form-control rounded-3" placeholder="Confirm Password" required />
//           </div>

//           {/* Sign Up Button */}
//           <button type="submit" className="btn btn-peach w-100 rounded-3 text-white">
//             Sign Up
//           </button>
//         </form>

//         {/* Footer Link */}
//         <p className="text-center mt-3 mb-0 small">
//           Already have account?{' '}
//           <Link to="/login" className="text-primary fw-semibold">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust path if needed

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form[0].value;
    const username = form[1].value;
    const password = form[2].value;
    const confirmPassword = form[3].value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/signupsuccess');
      } else {
        alert(data.error || 'Signup failed');
      }
    } catch (error) {
      alert('Server error');
      console.error(error);
    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#DCAB83' }}>
      <div className="p-4 rounded-4 shadow bg-white" style={{ width: '100%', maxWidth: '400px' }}>
        {/* Logo */}
        <div className="text-center mb-3">
          <img src={logo} alt="SmartSpend Logo" style={{ width: '50px', height: '50px' }} />
        </div>

        {/* Heading */}
        <h3 className="text-center fw-bolder fs-5 mb-4">Sign up</h3>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Email ID</label>
            <input type="email" className="form-control rounded-3" placeholder="Enter your email..." required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Name</label>
            <input type="text" className="form-control rounded-3" placeholder="Enter your name..." required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input type="password" className="form-control rounded-3" placeholder="Enter Password" required />
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Confirm Password</label>
            <input type="password" className="form-control rounded-3" placeholder="Confirm Password" required />
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="btn btn-peach w-100 rounded-3 text-white">
            Sign Up
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center mt-3 mb-0 small">
          Already have account?{' '}
          <Link to="/login" className="text-primary fw-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;