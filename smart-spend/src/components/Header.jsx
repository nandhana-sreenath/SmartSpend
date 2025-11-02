// import React from 'react';
// import logo from '../assets/logo.png';
// import 'bootstrap-icons/font/bootstrap-icons.css';


// const Header = ({ userName = 'Nandhana' }) => {
//   return (
//     <header
//       className="d-flex justify-content-between align-items-center px-4 py-3 shadow"
//       style={{
//         backgroundColor: '#2C2C2C',
//         borderTopLeftRadius: '1rem',
//         borderTopRightRadius: '1rem',
//         maxWidth: '1500px',
//         margin: '0 auto',
//       }}
//     >
//       {/* Left: Logo + App Name */}
//       <div className="d-flex align-items-center gap-3">
//         <img src={logo} alt="SmartSpend Logo" style={{ width: '50px', height: '50px' }} />
//         <div>
//           <h5 className="text-white mb-0 fs-28 w-100 kanit-bold">
//             Smart<span className="kanit-regular">Spend</span>
//           </h5>
//           <small className="text-light opacity-75">A BUDGET PLANNER APP</small>
//         </div>
//       </div>

//       {/* Right: User Name + Icon */}
//       <div className="d-flex align-items-center gap-3">
//         <span className="text-white fw-regular fs-16">{userName}</span>
//         <div
//           className="rounded-circle bg-light d-flex justify-content-center align-items-center"
//           style={{ width: '40px', height: '40px' }}
//         >
//           <i className="bi bi-person-circle text-dark fs-5"></i>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React, { useState, useRef, useEffect } from 'react';
// import logo from '../assets/logo.png';
// import Overlay from './Overlay';

// const Header = ({ userName = 'Nandhana' }) => {
//   const [showOverlay, setShowOverlay] = useState(false);
//   const overlayRef = useRef(null);

//   // Close overlay on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         overlayRef.current &&
//         !overlayRef.current.contains(event.target)
//       ) {
//         setShowOverlay(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <header
//       className="d-flex justify-content-between align-items-center px-4 py-3 shadow position-relative"
//       style={{
//         backgroundColor: '#2C2C2C',
//         borderTopLeftRadius: '1rem',
//         borderTopRightRadius: '1rem',
//         maxWidth: '1500px',
//         margin: '0 auto',
//       }}
//     >
//       {/* Left: Logo + App Name */}
//       <div className="d-flex align-items-center gap-3">
//         <img src={logo} alt="SmartSpend Logo" style={{ width: '50px', height: '50px' }} />
//         <div>
//           <h5 className="text-white mb-0 fs-28 w-100 kanit-bold">
//             Smart<span className="kanit-regular">Spend</span>
//           </h5>
//           <small className="text-light opacity-75">A BUDGET PLANNER APP</small>
//         </div>
//       </div>

//       {/* Right: User Name + Icon */}
//       <div className="position-relative" ref={overlayRef}>
//         <div
//           className="d-flex align-items-center gap-3 cursor-pointer"
//           onClick={() => setShowOverlay(!showOverlay)}
//         >
//           <span className="text-white fw-regular fs-16">{userName}</span>
//           <div
//             className="rounded-circle bg-light d-flex justify-content-center align-items-center"
//             style={{ width: '40px', height: '40px' }}
//           >
//             <i className="bi bi-person-circle text-dark fs-5"></i>
//           </div>
//         </div>

//         {showOverlay && <Overlay onClose={() => setShowOverlay(false)} />}
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React, { useState, useRef, useEffect, useContext } from 'react';
// import logo from '../assets/logo.png';
// import Overlay from './Overlay';
// import { ThemeContext } from '../context/ThemeContext';

// const Header = ({ userName = 'Nandhana' }) => {
//   const [showOverlay, setShowOverlay] = useState(false);
//   const overlayRef = useRef(null);
//   const { darkMode } = useContext(ThemeContext);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (overlayRef.current && !overlayRef.current.contains(event.target)) {
//         setShowOverlay(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <header
//       className="d-flex justify-content-between align-items-center px-4 py-3 shadow position-relative"
//       style={{
//         backgroundColor: darkMode ? '#1c1c1c' : '#2C2C2C',
//         color: '#ffffff', // ✅ Always white text
//         borderTopLeftRadius: '1rem',
//         borderTopRightRadius: '1rem',
//         maxWidth: '1500px',
//         margin: '0 auto',
//       }}
//     >
//       {/* Left: Logo + App Name */}
//       <div className="d-flex align-items-center gap-3">
//         <img src={logo} alt="SmartSpend Logo" style={{ width: '50px', height: '50px' }} />
//         <div>
//           <h5 className="mb-0 fs-28 w-100 kanit-bold text-white">
//             Smart<span className="kanit-regular">Spend</span>
//           </h5>
//           <small className="text-white opacity-75">A BUDGET PLANNER APP</small>
//         </div>
//       </div>

//       {/* Right: User Name + Icon */}
//       <div className="position-relative" ref={overlayRef}>
//         <div
//           className="d-flex align-items-center gap-3 cursor-pointer"
//           onClick={() => setShowOverlay(!showOverlay)}
//         >
//           <span className="text-white fw-regular fs-16">{userName}</span>
//           <div
//             className="rounded-circle d-flex justify-content-center align-items-center"
//             style={{
//               width: '40px',
//               height: '40px',
//               backgroundColor: darkMode ? '#444' : '#f8f9fa',
//             }}
//           >
//             <i className={`bi bi-person-circle fs-5 ${darkMode ? 'text-white' : 'text-dark'}`}></i>
//           </div>
//         </div>

//         {showOverlay && <Overlay onClose={() => setShowOverlay(false)} />}
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useRef, useEffect, useContext } from 'react';
import logo from '../assets/logo.png';
import Overlay from './Overlay';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef(null);
  const { darkMode } = useContext(ThemeContext);

  // ✅ Get user info from localStorage
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const userName = user.username || 'Guest';
  const userInitial = userName.charAt(0).toUpperCase();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setShowOverlay(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className="d-flex justify-content-between align-items-center px-4 py-3 shadow position-relative"
      style={{
        backgroundColor: darkMode ? '#1c1c1c' : '#2C2C2C',
        color: '#ffffff',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        maxWidth: '1500px',
        margin: '0 auto',
      }}
    >
      {/* Left: Logo + App Name */}
      <div className="d-flex align-items-center gap-3">
        <img src={logo} alt="SmartSpend Logo" style={{ width: '50px', height: '50px' }} />
        <div>
          <h5 className="mb-0 fs-28 w-100 kanit-bold text-white">
            Smart<span className="kanit-regular">Spend</span>
          </h5>
          <small className="text-white opacity-75">A BUDGET PLANNER APP</small>
        </div>
      </div>

      {/* Right: User Name + Icon */}
      <div className="position-relative" ref={overlayRef}>
        <div
          className="d-flex align-items-center gap-3 cursor-pointer"
          onClick={() => setShowOverlay(!showOverlay)}
        >
          <span className="text-white fw-regular fs-16">{userName}</span>
          <div
            className="rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: darkMode ? '#444' : '#f8f9fa',
            }}
          >
            <span
              className={`fw-bold ${darkMode ? 'text-white' : 'text-dark'}`}
              style={{ fontSize: '18px' }}
            >
              {userInitial}
            </span>
          </div>
        </div>

        {showOverlay && <Overlay onClose={() => setShowOverlay(false)} />}
      </div>
    </header>
  );
};

export default Header;