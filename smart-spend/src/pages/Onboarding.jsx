// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.png'; // Adjust path as needed
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure Bootstrap Icons are available
// import '../index.css';
// import Header from '../components/Header'; // Adjust path if needed

// const Onboarding = () => {
//    const navigate = useNavigate();

//    const handleContinue = () => {
//   navigate('/dashboard');
// };



//      return (
//     <div style={{ backgroundColor: '#E5EAF0', minHeight: '100vh', padding: '24px' }}>
//       <header
//         className="d-flex justify-content-between align-items-center px-4 py-3 shadow"
//         style={{
//           backgroundColor: '#2C2C2C',
//           borderBottomLeftRadius: '1rem',
//           borderBottomRightRadius: '1rem',
//           maxWidth: '1500px',
//           margin: '0 auto',
//         }}
//       >
//         {/* Left: Logo + App Name */}
//         <div className="d-flex align-items-center gap-3">
//           <img src={logo} alt="SmartSpend Logo" style={{ width: '50px', height: '50px' }} />
//           <div>
//             <h5 className="text-white mb-0 fs-28 w-100 kanit-bold">
//               Smart<span className="kanit-regular">Spend</span>
//             </h5>
//             <small className="text-light opacity-75">A BUDGET PLANNER APP</small>
//           </div>
//         </div>

//         {/* Right: User Name + Icon */}
//         <div className="d-flex align-items-center gap-3">
//           <span className="text-white fw-regular fs-16">
//             {/* Replace 'Nandhana' with dynamic name when ready */}
//             Nandhana
//           </span>
//           <div
//             className="rounded-circle bg-light d-flex justify-content-center align-items-center"
//             style={{ width: '40px', height: '40px' }}
//           >
//             <i className="bi bi-person-circle text-dark fs-5"></i>
//           </div>
//         </div>
//       </header>

//   <div className="text-center mt-5">
//   <h2 className="fw-bold text-dark" style={{ fontSize: '48px' }}>
//     Welcome to SmartSpend!
//   </h2>
//   <div
//     style={{
//       height: '5px',
//       width: '320px',
//       margin: '0 auto 16px auto',
//     }}
//   ></div>
//   <h4 className="fw-bold text-dark" style={{ fontSize: '38px' }}>
//     Let’s Get Started
//   </h4>
//   <p className="text-dark fw-light opacity-50" style={{ fontSize: '19px' }}>
//     Tell us a little bit about your finances
//   </p>
// </div>


// <div
//   className="bg-white shadow px-4 py-5 rounded"
//   style={{
//     backgroundColor: '#2C2C2C',
//     maxWidth: '1500px',
//     margin: '0 auto',
//   }}
// >
//   {/* Title & Skip Link */}
//   <div className="d-flex justify-content-between align-items-start mb-4">
//     <h5 className="text-dark fw-bold">About You</h5>
//     <button
//              className="btn btn-link text-dark opacity-50 fw-semibold p-0"
//              onClick={() => navigate('/dashboard')}
//            >
//              Skip <i className="bi bi-chevron-right fs-0"></i>

//            </button>
//   </div>

//   {/* Full Name & DOB */}
//   <div className="row mb-3">
//     <div className="col-md-6">
//       <label htmlFor="fullName" className="form-label mb-2 small text-dark fw-bold">
//         Full Name
//       </label>
//       <input
//         type="text"
//         className="form-control"
//         id="fullName"
//         value="Nandhana"
//         readOnly
//       />
//     </div>
//     <div className="col-md-6">
//   <label htmlFor="dob" className="form-label mb-2 small fw-bold">
//     DOB
//   </label>
//   <input
//     type="date"
//     className="form-control"
//     id="dob"
//     placeholder="dd/mm/yyyy" required
//   />
// </div>
// </div>

//   {/* Occupation & Email */}
//   <div className="row mb-4">
//     <div className="col-md-6">
//       <label htmlFor="occupation" className="form-label mb-2 small text-dark fw-bold">
//         Occupation/Role
//       </label>
//       <input
//         type="text"
//         className="form-control"
//         id="occupation"
//         placeholder="Type your job role..." required
//       />
//     </div>
//     <div className="col-md-6">
//       <label htmlFor="email" className="form-label mb-2 small text-dark fw-bold">
//         E-mail ID
//       </label>
//       <input
//         type="email"
//         className="form-control"
//         id="email"
//         value="nandhana1503@gmail.com"
//         readOnly
//       />
//     </div>
//   </div>

//   {/* Income */}
//   <div className="mb-4">
//     <h6 className="text-dark fw-bold">Your Income</h6>
//     <label htmlFor="income" className="form-label mb-2 small text-dark">
//       What is your total monthly net income?
//     </label>
//     <input
//       type="text"
//       className="form-control"
//       id="income"
//       placeholder="Enter amount in ₹" required
//     />
//   </div>

//   {/* Continue Button */}

//   <button  className="btn w-100 py-2 text-white fw-regular btn btn-peach"  onClick={handleContinue}
// >
//   Continue
// </button>

// </div>

//     </div>
//   );
// };

// export default Onboarding;


// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import { ThemeContext } from '../context/ThemeContext';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import '../index.css';

// const Onboarding = () => {
//   const navigate = useNavigate();
//   const { darkMode } = useContext(ThemeContext);

//   const handleContinue = () => {
//     navigate('/dashboard');
//   };

//   const inputStyle = {
//     color: darkMode ? '#ffffff' : '#000000',
//     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//     borderColor: darkMode ? '#444' : '#ced4da',
//     boxShadow: 'none',
//     transition: 'all 0.3s ease',
//   };

//   return (
//     <div className="page-wrapper">
//       <Header />

//       {/* Welcome Section */}
//       <div className="text-center mt-5">
//         <h2 className="fw-bold text-dark" style={{ fontSize: '48px' }}>
//           Welcome to SmartSpend!
//         </h2>
//         <div
//           style={{
//             height: '5px',
//             width: '320px',
//             margin: '0 auto 16px auto',
//           }}
//         ></div>
//         <h4 className="fw-bold text-dark" style={{ fontSize: '38px' }}>
//           Let’s Get Started
//         </h4>
//         <p className="text-dark fw-light opacity-50" style={{ fontSize: '19px' }}>
//           Tell us a little bit about your finances
//         </p>
//       </div>

//       {/* Form Section */}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleContinue();
//         }}
//         className="shadow px-4 py-5 rounded"
//         style={{
//           backgroundColor: darkMode ? '#1c1c1c' : '#E5EAF0',
//           maxWidth: '1500px',
//           margin: '0 auto',
//           color: darkMode ? '#ffffff' : '#000000',
//         }}
//       >
//         {/* Title & Skip */}
//         <div className="d-flex justify-content-between align-items-start mb-4">
//           <h5 className="fw-bold">About You</h5>
//           <button
//             type="button"
//             className="btn btn-link opacity-50 fw-semibold p-0 d-flex align-items-center gap-1"
//             onClick={() => navigate('/dashboard')}
//             style={{ color: darkMode ? '#ffffff' : '#000000' }}
//           >
//             Skip <i className="bi bi-chevron-right fs-6"></i>
//           </button>
//         </div>

//         {/* Full Name & DOB */}
//         <div className="row mb-3">
//           <div className="col-md-6">
//             <label htmlFor="fullName" className="form-label mb-2 small fw-bold">
//               Full Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="fullName"
//               value="Nandhana"
//               readOnly
//               style={inputStyle}
//             />
//           </div>
//           <div className="col-md-6">
//             <label htmlFor="dob" className="form-label mb-2 small fw-bold">
//               DOB
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               id="dob"
//               required
//               style={inputStyle}
//             />
//           </div>
//         </div>

//         {/* Occupation & Email */}
//         <div className="row mb-4">
//           <div className="col-md-6">
//             <label htmlFor="occupation" className="form-label mb-2 small fw-bold">
//               Occupation/Role
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="occupation"
//               placeholder="Type your job role..."
//               required
//               style={inputStyle}
//             />
//           </div>
//           <div className="col-md-6">
//             <label htmlFor="email" className="form-label mb-2 small fw-bold">
//               E-mail ID
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               value="nandhana1503@gmail.com"
//               readOnly
//               style={inputStyle}
//             />
//           </div>
//         </div>

//         {/* Income */}
//         <div className="mb-4">
//           <h6 className="fw-bold">Your Income</h6>
//           <label htmlFor="income" className="form-label mb-2 small">
//             What is your total monthly net income?
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="income"
//             placeholder="Enter amount in ₹"
//             required
//             style={inputStyle}
//           />
//         </div>

//         {/* Continue Button */}
//         <button
//           type="submit"
//           className="btn btn-peach w-100 py-2 text-white fw-regular"
//         >
//           Continue
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Onboarding;


import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { ThemeContext } from '../context/ThemeContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../index.css';

const Onboarding = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  // ✅ Get user info from localStorage
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const username = user.username || '';
  const email = user.email || '';

  const handleContinue = async (e) => {
    e.preventDefault();
    const income = document.getElementById('income').value;

    try {
      const response = await fetch('http://localhost:8000/onboarding/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, income }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/dashboard');
      } else {
        alert(data.error || 'Failed to save income');
      }
    } catch (error) {
      alert('Server error');
      console.error(error);
    }
  };

  const inputStyle = {
    color: darkMode ? '#ffffff' : '#000000',
    backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
    borderColor: darkMode ? '#444' : '#ced4da',
    boxShadow: 'none',
    transition: 'all 0.3s ease',
  };

  return (
    <div className="page-wrapper">
      <Header />

      {/* Welcome Section */}
      <div className="text-center mt-5">
        <h2 className="fw-bold text-dark" style={{ fontSize: '48px' }}>
          Welcome to SmartSpend!
        </h2>
        <div style={{ height: '5px', width: '320px', margin: '0 auto 16px auto' }}></div>
        <h4 className="fw-bold text-dark" style={{ fontSize: '38px' }}>
          Let’s Get Started
        </h4>
        <p className="text-dark fw-light opacity-50" style={{ fontSize: '19px' }}>
          Tell us a little bit about your finances
        </p>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleContinue}
        className="shadow px-4 py-5 rounded"
        style={{
          backgroundColor: darkMode ? '#1c1c1c' : '#E5EAF0',
          maxWidth: '1500px',
          margin: '0 auto',
          color: darkMode ? '#ffffff' : '#000000',
        }}
      >
        {/* Title & Skip */}
        <div className="d-flex justify-content-between align-items-start mb-4">
          <h5 className="fw-bold">About You</h5>
          <button
            type="button"
            className="btn btn-link opacity-50 fw-semibold p-0 d-flex align-items-center gap-1"
            onClick={() => navigate('/dashboard')}
            style={{ color: darkMode ? '#ffffff' : '#000000' }}
          >
            Skip <i className="bi bi-chevron-right fs-6"></i>
          </button>
        </div>

        {/* Full Name & DOB */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="fullName" className="form-label mb-2 small fw-bold">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              value={username}
              readOnly
              style={inputStyle}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="dob" className="form-label mb-2 small fw-bold">
              DOB
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              required
              style={inputStyle}
            />
          </div>
        </div>

        {/* Occupation & Email */}
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="occupation" className="form-label mb-2 small fw-bold">
              Occupation/Role
            </label>
            <input
              type="text"
              className="form-control"
              id="occupation"
              placeholder="Type your job role..."
              required
              style={inputStyle}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label mb-2 small fw-bold">
              E-mail ID
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              readOnly
              style={inputStyle}
            />
          </div>
        </div>

        {/* Income */}
        <div className="mb-4">
          <h6 className="fw-bold">Your Income</h6>
          <label htmlFor="income" className="form-label mb-2 small">
            What is your total monthly net income?
          </label>
          <input
            type="text"
            className="form-control"
            id="income"
            placeholder="Enter amount in ₹"
            required
            style={inputStyle}
          />
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="btn btn-peach w-100 py-2 text-white fw-regular"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Onboarding;