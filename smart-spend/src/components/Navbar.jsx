// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const Navbar = () => {
//   const navItems = [
//     { label: 'Dashboard', icon: 'bi-grid', path: '/dashboard' },
//     { label: 'Expenses', icon: 'bi-receipt', path: '/expenses' },
//     { label: 'Budget Goals', icon: 'bi-cash-coin', path: '/budget' },
//     { label: 'Settings', icon: 'bi-gear', path: '/settings' },
//   ];

//   return (
//     <nav
//       className="d-flex  align-items-center flex-wrap px-4 mt-3 gap-32"
//       style={{
//         borderBottomLeftRadius: '1rem',
//         borderBottomRightRadius: '1rem',
//         backgroundColor: '#ffffff', // ✅ White background
//         maxWidth: '1500px',
//         margin: '0 auto',
//         borderBottom: '1px solid #ccc',
//         gap: '16px'
//       }}
//     >
//       {navItems.map((item) => (
//         <NavLink
//           key={item.label}
//           to={item.path}
//           className={({ isActive }) =>
//             `text-dark text-decoration-none d-flex align-items-center gap-2 py-3 fw-semibold position-relative ${
//               isActive ? 'active-nav' : ''
              
//             }`
//           }
//         >
//           <i className={`bi ${item.icon}`} style={{ fontSize: '18px' }}></i>
//           <span>{item.label}</span>
//         </NavLink>
//       ))}
//     </nav>
//   );
// };

// export default Navbar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const Navbar = () => {
//   const navItems = [
//     { label: 'Dashboard', icon: 'bi-grid', path: '/dashboard' },
//     { label: 'Expenses', icon: 'bi-receipt', path: '/expenses' },
//     { label: 'Budget Goals', icon: 'bi-cash-coin', path: '/budget' },
//     { label: 'Settings', icon: 'bi-gear', path: '/settings' },
//   ];

//   return (
//     <nav
//       className="d-flex  align-items-center flex-wrap px-4 mt-3 gap-32"
//       style={{
//         borderBottomLeftRadius: '1rem',
//         borderBottomRightRadius: '1rem',
//         backgroundColor: '#ffffff', // ✅ White background
//         maxWidth: '1500px',
//         margin: '0 auto',
//         borderBottom: '1px solid #ccc',
//         gap: '16px'
//       }}
//     >
//       {navItems.map((item) => (
//         <NavLink
//   key={item.label}
//   to={item.path}
//   className={({ isActive }) =>
//     `text-dark text-decoration-none d-flex align-items-center gap-2 py-3 fw-semibold position-relative ${
//       isActive ? 'active-nav' : ''
//     }`
//   }
//   style={{ paddingRight: '128px' }} // ✅ Tight spacing between items
// >
//   <i className={`bi ${item.icon}`} style={{ fontSize: '18px' }}></i>
//   <span>{item.label}</span>
// </NavLink>
//       ))}
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { ThemeContext } from '../context/ThemeContext';

// const Navbar = () => {
//   const { darkMode } = useContext(ThemeContext);

//   const navItems = [
//     { label: 'Dashboard', icon: 'bi-grid', path: '/dashboard' },
//     { label: 'Expenses', icon: 'bi-receipt', path: '/expenses' },
//     { label: 'Budget Goals', icon: 'bi-cash-coin', path: '/budget' },
//     { label: 'Settings', icon: 'bi-gear', path: '/settings' },
//   ];

//   return (
//     <nav
//       className="d-flex align-items-center flex-wrap px-4 mt-3"
//       style={{
//         borderBottomLeftRadius: '1rem',
//         borderBottomRightRadius: '1rem',
//         backgroundColor: darkMode ? '#1c1c1c' : '#ffffff',
//         color: darkMode ? '#ffffff' : '#000000',
//         maxWidth: '1500px',
//         margin: '0 auto',
//         gap: '16px',
//       }}
//     >
//       {navItems.map((item) => (
//         <NavLink
//           key={item.label}
//           to={item.path}
//           className={({ isActive }) =>
//             `text-decoration-none d-flex align-items-center gap-2 py-3 fw-semibold position-relative ${
//               isActive ? 'active-nav' : ''
//             } ${darkMode ? 'text-white' : 'text-dark'}`
//           }
//           style={{
//             paddingRight: '128px',
//             color: darkMode ? '#ffffff' : '#000000',
//           }}
//         >
//           <i className={`bi ${item.icon}`} style={{ fontSize: '18px' }}></i>
//           <span>{item.label}</span>
//         </NavLink>
//       ))}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';

  const navItems = [
    { label: 'Dashboard', icon: 'bi-grid', path: '/dashboard' },
    { label: 'Expenses', icon: 'bi-receipt', path: '/expenses' },
    { label: 'Budget Goals', icon: 'bi-cash-coin', path: '/budget' },
    { label: 'Settings', icon: 'bi-gear', path: '/settings' },
  ];

  return (
    <nav
      className="d-flex align-items-center flex-wrap px-4 mt-3"
      style={{
        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',
        backgroundColor: darkMode ? '#1c1c1c' : '#ffffff',
        color: darkMode ? '#ffffff' : '#000000',
        maxWidth: '1500px',
        margin: '0 auto',
        gap: '16px',
      }}
    >
      {navItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.path}
          className={({ isActive }) =>
            `text-decoration-none d-flex align-items-center gap-2 py-3 fw-semibold position-relative ${
              !isProfilePage && isActive ? 'active-nav' : ''
            } ${darkMode ? 'text-white' : 'text-dark'}`
          }
          style={{
            paddingRight: '128px',
            color: darkMode ? '#ffffff' : '#000000',
          }}
        >
          <i className={`bi ${item.icon}`} style={{ fontSize: '18px' }}></i>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;