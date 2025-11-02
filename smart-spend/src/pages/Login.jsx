// src/pages/Login.jsx          

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.png';
// import '../index.css';

// export default function LoginScreen() {
//   const navigate = useNavigate();

//   const handleSignIn = () => {
//     // Optional: Add login validation or API call here
//     navigate('/onboarding'); // Adjust route name if needed
//   };

//   return (
//     <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#DCAB83' }}>
//       <div className="p-4 rounded-4 shadow bg-white" style={{ width: '100%', maxWidth: '450px' }}>
//         {/* Logo Block */}
//         <div className="d-flex align-items-center mt-2 ms-6">
//           <img
//             src={logo}
//             alt="SmartSpend Logo"
//             className="me-3"
//             style={{ width: '50px', height: '50px' }}
//           />
//           <div>
//             <h2 className="fs-20 m-0 kanit-extrabold">SmartSpend</h2>
//             <p className="text-muted opacity-75 small ls-wider mb-0" style={{ letterSpacing: '0.1em' }}>
//               A BUDGET PLANNER APP
//             </p>
//           </div>
//         </div>

//         {/* Login Heading */}
//         <h3 className="text-center mb-4 mt-3 fs-5 fw-bold">Login</h3>

//         {/* Email Input */}
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label fw-bold">Email ID</label>
//           <input type="email" className="form-control" id="email" placeholder="Enter your Email ID..." required />
//         </div>

//         {/* Password Input */}
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label fw-bold">Password</label>
//           <input type="password" className="form-control" id="password" placeholder="Enter Password" required />
//         </div>

//         {/* Sign In Button */}
//         <button
//           className="btn btn-peach rounded-3 text-white w-100 fw-regular"
//           onClick={handleSignIn}
//         >
//           Sign In
//         </button>

//         {/* Sign Up Prompt */}
//         <p className="text-center mt-3 mb-0 small">
//           Don't have an account yet?{' '}
//           <Link to="/signup" className="text-primary fw-semibold">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }



// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.png';
// import '../index.css';

// export default function LoginScreen() {
//   const navigate = useNavigate();

//   const handleSignIn = async () => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     try {
//       const response = await fetch('http://localhost:8000/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         navigate('/onboarding'); // ✅ Redirect on successful login
//       } else {
//         alert(data.error || 'Login failed');
//       }
//     } catch (error) {
//       alert('Server error');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#DCAB83' }}>
//       <div className="p-4 rounded-4 shadow bg-white" style={{ width: '100%', maxWidth: '450px' }}>
//         {/* Logo Block */}
//         <div className="d-flex align-items-center mt-2 ms-6">
//           <img
//             src={logo}
//             alt="SmartSpend Logo"
//             className="me-3"
//             style={{ width: '50px', height: '50px' }}
//           />
//           <div>
//             <h2 className="fs-20 m-0 kanit-extrabold">SmartSpend</h2>
//             <p className="text-muted opacity-75 small ls-wider mb-0" style={{ letterSpacing: '0.1em' }}>
//               A BUDGET PLANNER APP
//             </p>
//           </div>
//         </div>

//         {/* Login Heading */}
//         <h3 className="text-center mb-4 mt-3 fs-5 fw-bold">Login</h3>

//         {/* Email Input */}
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label fw-bold">Email ID</label>
//           <input type="email" className="form-control" id="email" placeholder="Enter your Email ID..." required />
//         </div>

//         {/* Password Input */}
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label fw-bold">Password</label>
//           <input type="password" className="form-control" id="password" placeholder="Enter Password" required />
//         </div>

//         {/* Sign In Button */}
//         <button
//           className="btn btn-peach rounded-3 text-white w-100 fw-regular"
//           onClick={handleSignIn}
//         >
//           Sign In
//         </button>

//         {/* Sign Up Prompt */}
//         <p className="text-center mt-3 mb-0 small">
//           Don't have an account yet?{' '}
//           <Link to="/signup" className="text-primary fw-semibold">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.png';
// import '../index.css';

// export default function Login() {
//   const navigate = useNavigate();

//   const handleSignIn = async () => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     try {
//       const response = await fetch('http://localhost:8000/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('user', JSON.stringify({
//           username: data.username,
//           email: data.email,
//         }));
//         navigate('/onboarding');
//       } else {
//         alert(data.error || 'Login failed');
//       }
//     } catch (error) {
//       alert('Server error');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#DCAB83' }}>
//       <div className="p-4 rounded-4 shadow bg-white" style={{ width: '100%', maxWidth: '450px' }}>
//         <div className="d-flex align-items-center mt-2 ms-6">
//           <img src={logo} alt="SmartSpend Logo" className="me-3" style={{ width: '50px', height: '50px' }} />
//           <div>
//             <h2 className="fs-20 m-0 kanit-extrabold">SmartSpend</h2>
//             <p className="text-muted opacity-75 small ls-wider mb-0" style={{ letterSpacing: '0.1em' }}>
//               A BUDGET PLANNER APP
//             </p>
//           </div>
//         </div>

//         <h3 className="text-center mb-4 mt-3 fs-5 fw-bold">Login</h3>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label fw-bold">Email ID</label>
//           <input type="email" className="form-control" id="email" placeholder="Enter your Email ID..." required />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label fw-bold">Password</label>
//           <input type="password" className="form-control" id="password" placeholder="Enter Password" required />
//         </div>

//         <button className="btn btn-peach rounded-3 text-white w-100 fw-regular" onClick={handleSignIn}>
//           Sign In
//         </button>

//         <p className="text-center mt-3 mb-0 small">
//           Don't have an account yet?{' '}
//           <Link to="/signup" className="text-primary fw-semibold">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../index.css';

export default function Login() {
  const navigate = useNavigate();

  const handleSignIn = async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:8000/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('user', JSON.stringify({
        username: data.username,
        email: data.email,
      }));

      // ✅ Redirect based on onboarding status
      if (data.onboarding_completed) {
        navigate('/dashboard');
      } else {
        navigate('/onboarding');
      }
    } else {
      alert(data.error || 'Login failed');
    }
  } catch (error) {
    alert('Server error');
    console.error(error);
  }
};

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#DCAB83' }}>
      <div className="p-4 rounded-4 shadow bg-white" style={{ width: '100%', maxWidth: '450px' }}>
        <div className="d-flex align-items-center mt-2 ms-6">
          <img src={logo} alt="SmartSpend Logo" className="me-3" style={{ width: '50px', height: '50px' }} />
          <div>
            <h2 className="fs-20 m-0 kanit-extrabold">SmartSpend</h2>
            <p className="text-muted opacity-75 small ls-wider mb-0" style={{ letterSpacing: '0.1em' }}>
              A BUDGET PLANNER APP
            </p>
          </div>
        </div>

        <h3 className="text-center mb-4 mt-3 fs-5 fw-bold">Login</h3>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">Email ID</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your Email ID..." required />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bold">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter Password" required />
        </div>

        <button className="btn btn-peach rounded-3 text-white w-100 fw-regular" onClick={handleSignIn}>
          Sign In
        </button>

        <p className="text-center mt-3 mb-0 small">
          Don't have an account yet?{' '}
          <Link to="/signup" className="text-primary fw-semibold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}