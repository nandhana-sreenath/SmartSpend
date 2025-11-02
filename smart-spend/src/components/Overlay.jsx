// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ThemeContext } from '../context/ThemeContext';

// const Overlay = ({ onClose }) => {
//   const { darkMode, setDarkMode } = useContext(ThemeContext);
//   const navigate = useNavigate();

//   return (
//     <div
//       className="position-absolute end-0 mt-2 p-3 shadow rounded"
//       style={{
//         width: '200px',
//         backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//         color: darkMode ? '#ffffff' : '##2a2727',
//         zIndex: 10,
//       }}
//     >
//       <p className="fw-bold ms-4 text-dark mb-3">Hey! Nandhana</p>

//       <button
//         className="btn btn-sm w-100 d-flex align-items-center gap-2 fs-6 text-start mb-2"
//         onClick={() => {
//           navigate('/profile');
//           onClose();
//         }}
//       >
//         <i className="bi bi-person text-dark"></i>
//         <span className="fw-semibold text-dark">Profile</span>
//       </button>

//       <div className="d-flex justify-content-between align-items-center mx-2 mb-2">
//         <div className="d-flex align-items-center gap-2">
//           <i className="bi bi-brightness-high text-dark"></i>
//           <span className="fw-semibold text-dark">Theme</span>
//         </div>
//         <div className="form-check form-switch m-0" style={{ transform: 'scale(0.9)' }}>
//           <input
//             className="form-check-input"
//             type="checkbox"
//             checked={darkMode}
//             onChange={() => setDarkMode(!darkMode)}
//           />
//         </div>
//       </div>

//       <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '5px 0' }} />

//       <button
//         className="btn btn-sm w-100 d-flex align-items-center mx-4 gap-2"
//         onClick={() => {
//           navigate('/login');
//           onClose();
//         }}
//       >
//         <i className="bi bi-box-arrow-left text-danger"></i>
//         <span className="fw-semibold fs-6 text-danger">Log Out</span>
//       </button>
//     </div>
//   );
// };

// export default Overlay;

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Overlay = ({ onClose }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div
      className="position-absolute end-0 mt-2 p-3 shadow rounded"
      style={{
        width: '200px',
        backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
        color: darkMode ? '#ffffff' : '#2a2727',
        zIndex: 10,
      }}
    >
      <p className="fw-bold ms-4 text-dark mb-3">Hey! Nandhana</p>

      <button
        className="btn btn-sm w-100 d-flex align-items-center gap-2 fs-6 text-start mb-2"
        onClick={() => {
          navigate('/profile');
          onClose();
        }}
      >
        <i className="bi bi-person text-dark"></i>
        <span className="fw-semibold text-dark">Profile</span>
      </button>

      <div className="d-flex justify-content-between align-items-center mx-2 mb-2">
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-brightness-high text-dark"></i>
          <span className="fw-semibold text-dark">Theme</span>
        </div>
        <div className="form-check form-switch m-0" style={{ transform: 'scale(0.9)' }}>
          <input
            className="form-check-input"
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '5px 0' }} />

      {/* ✅ Log Out button always red */}
      <button
        className="btn btn-sm w-100 d-flex align-items-center mx-4 gap-2"
        onClick={() => {
          navigate('/login');
          onClose();
        }}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          padding: 0,
        }}
      >
        <i
          className="bi bi-box-arrow-left"
          style={{
            color: '#dc3545', // 🔴 Always red
            fontSize: '16px',
          }}
        ></i>
        <span
          style={{
            color: '#dc3545', // 🔴 Always red
            fontWeight: '600',
            fontSize: '16px',
          }}
        >
          Log Out
        </span>
      </button>
    </div>
  );
};

export default Overlay;