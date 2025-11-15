// import React, { useState, useContext } from 'react';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';
// import { ThemeContext } from '../context/ThemeContext';

// const Settings = () => {
//   const { darkMode } = useContext(ThemeContext);

//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [netIncome, setNetIncome] = useState('');
//   const [categoryBudgets, setCategoryBudgets] = useState({
//     Utilities: '',
//     Education: '',
//     Food: '',
//     Transport: '',
//     Personal: '',
//   });

//   const inputStyle = {
//     color: darkMode ? '#ffffff' : '#000000',
//     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//     borderColor: darkMode ? '#444' : '#ced4da',
//     boxShadow: 'none',
//     transition: 'all 0.3s ease',
//   };

//   const labelStyle = {
//     color: darkMode ? '#ffffff' : '#000000',
//     fontWeight: '500',
//   };

//   return (
//     <div
//       className="page-wrapper"
//       style={{
//         backgroundColor: darkMode ? '#1E1E1E' : '#E5EAF0',
//         minHeight: '100vh',
//         padding: '24px',
//       }}
//     >
//       <Header userName="Nandhana" />
//       <Navbar activeTab="Settings" />

//       {/* Outer Frame */}
//       <div
//         className="shadow rounded p-4 mt-4"
//         style={{
//           backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
//           maxWidth: '1500px',
//           margin: '0 auto',
//         }}
//       >
//         <h4 className="fw-bold mb-5" style={labelStyle}>BUDGET SETTINGS</h4>

//         <div className="row">
//           {/* Left Column */}
//           <div className="col-lg-7 d-flex flex-column gap-4" style={{ height: '700px' }}>
//             {/* Frame 1: Time Range + Net Income */}
//             <div
//               className="rounded shadow p-4 position-relative"
//               style={{
//                 backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA',
//                 height: '320px',
//               }}
//             >
//               <div className="position-absolute top-0 end-0 p-3">
//                 <i
//                   className="bi bi-pencil-fill"
//                   style={{
//                     fontSize: '18px',
//                     color: darkMode ? '#ffffff' : '#000000',
//                     cursor: 'pointer',
//                   }}
//                 ></i>
//               </div>

//               <div className="mb-4">
//                 <label className="form-label" style={labelStyle}>Budget Time Range</label>
//                 <div className="d-flex gap-2">
//                   <div className="flex-fill">
//                     <label className="form-label" style={{ ...labelStyle, fontSize: '0.9rem' }}>From</label>
//                     <input
//                       type="date"
//                       className="form-control"
//                       style={{ ...inputStyle, colorScheme: darkMode ? 'dark' : 'light' }}
//                       value={startDate}
//                       onChange={(e) => setStartDate(e.target.value)}
//                     />
//                   </div>
//                   <div className="flex-fill">
//                     <label className="form-label" style={{ ...labelStyle, fontSize: '0.9rem' }}>To</label>
//                     <input
//                       type="date"
//                       className="form-control"
//                       style={{ ...inputStyle, colorScheme: darkMode ? 'dark' : 'light' }}
//                       value={endDate}
//                       onChange={(e) => setEndDate(e.target.value)}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="form-label" style={labelStyle}>My Total Net Income</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   style={inputStyle}
//                   placeholder="Enter income"
//                   value={netIncome}
//                   onChange={(e) => setNetIncome(e.target.value)}
//                 />
//               </div>
//             </div>

//             {/* Frame 2: Donut Chart */}
//             <div
//               className="rounded shadow p-4 d-flex flex-column justify-content-between"
//               style={{
//                 backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA',
//                 height: '380px',
//               }}
//             >
//               <div>
//                 <h5 className="fw-bold mb-2" style={labelStyle}>Monthly Categorical Trend</h5>
//                 <p style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//                   Total Income ₹ {netIncome || '0'}
//                 </p>
//               </div>

//               <div className="d-flex justify-content-center align-items-center flex-grow-1">
//                 <div
//                   style={{
//                     width: '270px',
//                     height: '250px',
//                     backgroundColor: '#DCAB83',
//                     borderRadius: '70%',
//                   }}
//                 >
//                   {/* Donut chart placeholder */}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Category Budgets */}
//           <div className="col-lg-5" style={{ height: '700px' }}>
//             <div
//               className="rounded shadow p-5 h-100 position-relative"
//               style={{
//                 backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA',
//                 overflowY: 'auto',
//               }}
//             >
//               <div className="position-absolute top-0 end-0 p-3">
//                 <i
//                   className="bi bi-pencil-fill"
//                   style={{
//                     fontSize: '18px',
//                     color: darkMode ? '#ffffff' : '#000000',
//                     cursor: 'pointer',
//                   }}
//                 ></i>
//               </div>

//               <h5 className="fw-bold mb-4" style={labelStyle}>Category-wise Budget</h5>
//               <div className="row">
//                 {Object.keys(categoryBudgets).map((category) => (
//                   <div className="col-md-12 mb-4" key={category}>
//                     <label className="form-label" style={labelStyle}>{category}</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       style={inputStyle}
//                       placeholder={`₹ for ${category}`}
//                       value={categoryBudgets[category]}
//                       onChange={(e) =>
//                         setCategoryBudgets({ ...categoryBudgets, [category]: e.target.value })
//                       }
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;

// import React, { useState, useContext } from 'react';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';
// import { ThemeContext } from '../context/ThemeContext';

// const Settings = () => {
//   const { darkMode } = useContext(ThemeContext);

//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [netIncome, setNetIncome] = useState('');
//   const [categoryBudgets, setCategoryBudgets] = useState({
//     Utilities: '',
//     Education: '',
//     Food: '',
//     Transport: '',
//     Personal: '',
//   });

//   const [isFrame1Editable, setIsFrame1Editable] = useState(false);
//   const [isFrame3Editable, setIsFrame3Editable] = useState(false);

//   const inputStyle = {
//     color: darkMode ? '#ffffff' : '#000000',
//     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//     borderColor: darkMode ? '#444' : '#ced4da',
//     boxShadow: 'none',
//     transition: 'all 0.3s ease',
//   };

//   const labelStyle = {
//     color: darkMode ? '#ffffff' : '#000000',
//     fontWeight: '500',
//   };

//   return (
//     <div
//       className="page-wrapper"
//       style={{
//         backgroundColor: darkMode ? '#1E1E1E' : '#E5EAF0',
//         minHeight: '100vh',
//         padding: '24px',
//       }}
//     >
//       <Header userName="Nandhana" />
//       <Navbar activeTab="Settings" />

//       {/* Outer Frame */}
//       <div
//         className="shadow rounded p-4 mt-4"
//         style={{
//           backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
//           maxWidth: '1500px',
//           margin: '0 auto',
//         }}
//       >
//         <h4 className="fw-bold mb-5" style={labelStyle}>BUDGET SETTINGS</h4>

//         <div className="row">
//           {/* Left Column */}
//           <div className="col-lg-7 d-flex flex-column gap-4" style={{ height: '700px' }}>
//             {/* Frame 1: Time Range + Net Income */}
//             <div
//               className="rounded shadow p-4 position-relative"
//               style={{
//                 backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA',
//                 height: '320px',
//               }}
//             >
//               <div className="position-absolute top-0 end-0 p-3">
//                 <i
//                   className="bi bi-pencil-fill"
//                   style={{
//                     fontSize: '18px',
//                     color: darkMode ? '#ffffff' : '#000000',
//                     cursor: 'pointer',
//                   }}
//                   onClick={() => setIsFrame1Editable(true)}
//                 ></i>
//               </div>

//               <div className="mb-4">
//                 <label className="form-label" style={labelStyle}>Budget Time Range</label>
//                 <div className="d-flex gap-2">
//                   <div className="flex-fill">
//                     <label className="form-label" style={{ ...labelStyle, fontSize: '0.9rem' }}>From</label>
//                     <input
//                       type="date"
//                       className="form-control"
//                       style={{ ...inputStyle, colorScheme: darkMode ? 'dark' : 'light' }}
//                       value={startDate}
//                       onChange={isFrame1Editable ? (e) => setStartDate(e.target.value) : undefined}
//                       readOnly={!isFrame1Editable}
//                     />
//                   </div>
//                   <div className="flex-fill">
//                     <label className="form-label" style={{ ...labelStyle, fontSize: '0.9rem' }}>To</label>
//                     <input
//                       type="date"
//                       className="form-control"
//                       style={{ ...inputStyle, colorScheme: darkMode ? 'dark' : 'light' }}
//                       value={endDate}
//                       onChange={isFrame1Editable ? (e) => setEndDate(e.target.value) : undefined}
//                       readOnly={!isFrame1Editable}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="form-label" style={labelStyle}>My Total Net Income</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   style={inputStyle}
//                   placeholder="Enter income"
//                   value={netIncome}
//                   onChange={isFrame1Editable ? (e) => setNetIncome(e.target.value) : undefined}
//                   readOnly={!isFrame1Editable}
//                 />
//               </div>
//             </div>

//             {/* Frame 2: Donut Chart */}
//             <div
//               className="rounded shadow p-4 d-flex flex-column justify-content-between"
//               style={{
//                 backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA',
//                 height: '380px',
//               }}
//             >
//               <div>
//                 <h5 className="fw-bold mb-2" style={labelStyle}>Monthly Categorical Trend</h5>
//                 <p style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//                   Total Income ₹ {netIncome || '0'}
//                 </p>
//               </div>

//               <div className="d-flex justify-content-center align-items-center flex-grow-1">
//                 <div
//                   style={{
//                     width: '270px',
//                     height: '250px',
//                     backgroundColor: '#DCAB83',
//                     borderRadius: '70%',
//                   }}
//                 >
//                   {/* Donut chart placeholder */}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Category Budgets */}
//           <div className="col-lg-5" style={{ height: '700px' }}>
//             <div
//               className="rounded shadow p-5 h-100 position-relative"
//               style={{
//                 backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA',
//                 overflowY: 'auto',
//               }}
//             >
//               <div className="position-absolute top-0 end-0 p-3">
//                 <i
//                   className="bi bi-pencil-fill"
//                   style={{
//                     fontSize: '18px',
//                     color: darkMode ? '#ffffff' : '#000000',
//                     cursor: 'pointer',
//                   }}
//                   onClick={() => setIsFrame3Editable(true)}
//                 ></i>
//               </div>

//               <h5 className="fw-bold mb-4" style={labelStyle}>Category-wise Budget</h5>
//               <div className="row">
//                 {Object.keys(categoryBudgets).map((category) => (
//                   <div className="col-md-12 mb-4" key={category}>
//                     <label className="form-label" style={labelStyle}>{category}</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       style={inputStyle}
//                       placeholder={`₹ for ${category}`}
//                       value={categoryBudgets[category]}
//                       onChange={isFrame3Editable ? (e) =>
//                         setCategoryBudgets({ ...categoryBudgets, [category]: e.target.value })
//                         : undefined}
//                       readOnly={!isFrame3Editable}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;



// import React, { useState, useContext, useEffect } from 'react';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';
// import { ThemeContext } from '../context/ThemeContext';

// const Settings = () => {
//   const { darkMode } = useContext(ThemeContext);

//   useEffect(() => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   console.log("Fetching settings for:", user.email); // ✅ Add this
//   fetch(`http://localhost:8000/settings/fetch/?email=${user.email}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log("Fetched settings:", data); // ✅ Add this
//       setStartDate(data.start_date || '');
//       setEndDate(data.end_date || '');
//       setNetIncome(data.net_income || '');
//       setCategoryBudgets({
//         Utilities: data.utilities || '',
//         Education: data.education || '',
//         Food: data.food || '',
//         Transport: data.transport || '',
//         Personal: data.personal || '',
//       });
//     })
//     .catch(err => console.error('Error fetching settings:', err));
// }, []);

//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [netIncome, setNetIncome] = useState('');
//   const [categoryBudgets, setCategoryBudgets] = useState({
//     Utilities: '',
//     Education: '',
//     Food: '',
//     Transport: '',
//     Personal: '',
//   });

//   const [isFrame1Editable, setIsFrame1Editable] = useState(false);
//   const [isFrame3Editable, setIsFrame3Editable] = useState(false);

//   const inputStyle = {
//     color: darkMode ? '#ffffff' : '#000000',
//     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//     borderColor: darkMode ? '#444' : '#ced4da',
//     boxShadow: 'none',
//     transition: 'all 0.3s ease',
//   };

//   const labelStyle = {
//     color: darkMode ? '#ffffff' : '#000000',
//     fontWeight: '500',
//   };


//   const handleSaveSettings = async () => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   const payload = {
//     email: user.email,
//     start_date: startDate,
//     end_date: endDate,
//     net_income: netIncome,
//     utilities: categoryBudgets.Utilities,
//     education: categoryBudgets.Education,
//     food: categoryBudgets.Food,
//     transport: categoryBudgets.Transport,
//     personal: categoryBudgets.Personal,
//   };

//   const response = await fetch('http://localhost:8000/settings/', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   });

//   if (response.ok) {
//     console.log('Settings saved');
//     setIsFrame1Editable(false);
//     setIsFrame3Editable(false);
//   }
// };

//   return (
//     <div
//       className="page-wrapper"
//       style={{
//         backgroundColor: darkMode ? '#1E1E1E' : '#E5EAF0',
//         minHeight: '100vh',
//         padding: '24px',
//       }}
//     >
//       <Header  />
//       <Navbar activeTab="Settings" />

//       {/* Outer Frame */}
//       <div
//         className="shadow rounded p-4 mt-4"
//         style={{
//           backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
//           maxWidth: '1500px',
//           margin: '0 auto',
//         }}
//       >
//         {/* <h4 className="fw-bold mb-5" style={labelStyle}>BUDGET SETTINGS</h4>
//          */}
         

//          <div className="d-flex justify-content-between align-items-center mb-5">
//   <h4 className="fw-bold m-0" style={labelStyle}>BUDGET SETTINGS</h4>
//   {(isFrame1Editable || isFrame3Editable) && (
//     <button
//       className="btn"
//       style={{
//         backgroundColor: '#DCAB83',
//         color: '#ffffff',
//         padding: '10px 32px',
//         borderRadius: '6px',
//         fontWeight: '500',
//       }}
//       onClick={handleSaveSettings}
//     >
//       Save 
//     </button>
//   )}
// </div>

//         <div className="row">
//           {/* Left Column */}
//           <div className="col-lg-7 d-flex flex-column gap-4" style={{ height: '700px' }}>
//             {/* Frame 1: Time Range + Net Income */}
//             <div
//               className="rounded shadow p-4 position-relative"
//               style={{
//                 backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA',
//                 height: '320px',
//               }}
//             >
//               <div className="position-absolute top-0 end-0 p-3">
//                 <i
//                   className="bi bi-pencil-fill"
//                   style={{
//                     fontSize: '18px',
//                     color: darkMode ? '#ffffff' : '#000000',
//                     cursor: 'pointer',
//                   }}
//                   onClick={() => setIsFrame1Editable(true)}
//                 ></i>
//               </div>

//               <div className="mb-4">
//                 <label className="form-label" style={labelStyle}>Budget Time Range</label>
//                 <div className="d-flex gap-2">
//                   <div className="flex-fill">
//                     <label className="form-label" style={{ ...labelStyle, fontSize: '0.9rem' }}>From</label>
//                     <input  type="date"
//   className="form-control"
//   style={{
//     ...inputStyle,
//     colorScheme: darkMode ? 'dark' : 'light',
//     opacity: isFrame1Editable ? 1 : 0.7,
//     cursor: isFrame1Editable ? 'text' : 'not-allowed',
//   }}
//   value={startDate}
//   onChange={isFrame1Editable ? (e) => setStartDate(e.target.value) : undefined}
//   readOnly={!isFrame1Editable}
//   disabled={!isFrame1Editable}
// />
//                   </div>
//                   <div className="flex-fill">
//                     <label className="form-label" style={{ ...labelStyle, fontSize: '0.9rem' }}>To</label>
//                     <input
//   type="date"
//   className="form-control"
//   style={{
//     ...inputStyle,
//     colorScheme: darkMode ? 'dark' : 'light',
//     opacity: isFrame1Editable ? 1 : 0.7,
//     cursor: isFrame1Editable ? 'text' : 'not-allowed',
//   }}
//   value={endDate}
//   onChange={isFrame1Editable ? (e) => setEndDate(e.target.value) : undefined}
//   readOnly={!isFrame1Editable}
//   disabled={!isFrame1Editable}
// />
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="form-label" style={labelStyle}>My Total Net Income</label>
//                 <input
//   type="text"
//   className="form-control"
//   style={{
//     ...inputStyle,
//     opacity: isFrame1Editable ? 1 : 0.7,
//     cursor: isFrame1Editable ? 'text' : 'not-allowed',
//   }}
//   placeholder="Enter income"
//   value={netIncome}
//   onChange={isFrame1Editable ? (e) => setNetIncome(e.target.value) : undefined}
//   readOnly={!isFrame1Editable}
//   disabled={!isFrame1Editable}
// />
//               </div>
//             </div>

//             {/* Frame 2: Donut Chart */}
//             <div
//               className="rounded shadow p-4 d-flex flex-column justify-content-between"
//               style={{
//                 backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA',
//                 height: '380px',
//               }}
//             >
//               <div>
//                 <h5 className="fw-bold mb-2" style={labelStyle}>Monthly Categorical Trend</h5>
//                 <p style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//                   Total Income ₹ {netIncome || '0'}
//                 </p>
//               </div>

//               <div className="d-flex justify-content-center align-items-center flex-grow-1">
//                 <div
//                   style={{
//                     width: '270px',
//                     height: '250px',
//                     backgroundColor: '#DCAB83',
//                     borderRadius: '70%',
//                   }}
//                 >
//                   {/* Donut chart placeholder */}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Category Budgets */}
//           <div className="col-lg-5" style={{ height: '700px' }}>
//             <div
//               className="rounded shadow p-5 h-100 position-relative"
//               style={{
//                 backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA',
//                 overflowY: 'auto',
//               }}
//             >
//               <div className="position-absolute top-0 end-0 p-3">
//                 <i
//                   className="bi bi-pencil-fill"
//                   style={{
//                     fontSize: '18px',
//                     color: darkMode ? '#ffffff' : '#000000',
//                     cursor: 'pointer',
//                   }}
//                   onClick={() => setIsFrame3Editable(true)}
//                 ></i>
//               </div>

//               <h5 className="fw-bold mb-4" style={labelStyle}>Category-wise Budget</h5>
//               <div className="row">
//                 {Object.keys(categoryBudgets).map((category) => (
//                   <div className="col-md-12 mb-4" key={category}>
//                     <label className="form-label" style={labelStyle}>{category}</label>
//                     <input
//   type="text"
//   className="form-control"
//   style={{
//     ...inputStyle,
//     opacity: isFrame3Editable ? 1 : 0.7,
//     cursor: isFrame3Editable ? 'text' : 'not-allowed',
//   }}
//   placeholder={`₹ for ${category}`}
//   value={categoryBudgets[category]}
//   onChange={isFrame3Editable ? (e) =>
//     setCategoryBudgets({ ...categoryBudgets, [category]: e.target.value })
//     : undefined}
//   readOnly={!isFrame3Editable}
//   disabled={!isFrame3Editable}
// />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;








import React, { useState, useContext, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { ThemeContext } from '../context/ThemeContext';

const Settings = () => {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log("Fetching settings for:", user.email); // ✅ Add this
  fetch(`http://localhost:8000/settings/fetch/?email=${user.email}`)
    .then(res => res.json())
    .then(data => {
      console.log("Fetched settings:", data); // ✅ Add this
      setMonth(data.month || '');
      setYear(data.year || '');
      setNetIncome(data.net_income || '');
      setCategoryBudgets({
        Utilities: data.utilities || '',
        Education: data.education || '',
        Food: data.food || '',
        Transport: data.transport || '',
        Personal: data.personal || '',
      });
    })
    .catch(err => console.error('Error fetching settings:', err));
}, []);

  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [netIncome, setNetIncome] = useState('');
  const [categoryBudgets, setCategoryBudgets] = useState({
    Utilities: '',
    Education: '',
    Food: '',
    Transport: '',
    Personal: '',
  });

  const [isFrame1Editable, setIsFrame1Editable] = useState(false);
  const [isFrame3Editable, setIsFrame3Editable] = useState(false);

  const inputStyle = {
    color: darkMode ? '#ffffff' : '#000000',
    backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
    borderColor: darkMode ? '#444' : '#ced4da',
    boxShadow: 'none',
    transition: 'all 0.3s ease',
  };

  const labelStyle = {
    color: darkMode ? '#ffffff' : '#000000',
    fontWeight: '500',
  };


  const handleSaveSettings = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const payload = {
    email: user.email,
    month,
    year,
    net_income: netIncome,
    utilities: categoryBudgets.Utilities,
    education: categoryBudgets.Education,
    food: categoryBudgets.Food,
    transport: categoryBudgets.Transport,
    personal: categoryBudgets.Personal,
  };

  const response = await fetch('http://localhost:8000/settings/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    console.log('Settings saved');
    setIsFrame1Editable(false);
    setIsFrame3Editable(false);
  }
};

  return (
    <div
      className="page-wrapper"
      style={{
        backgroundColor: darkMode ? '#1E1E1E' : '#E5EAF0',
        minHeight: '100vh',
        padding: '24px',
      }}
    >
      <Header  />
      <Navbar activeTab="Settings" />

      {/* Outer Frame */}
      <div
        className="shadow rounded p-4 mt-4"
        style={{
          backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
          maxWidth: '1500px',
          margin: '0 auto',
        }}
      >
        {/* <h4 className="fw-bold mb-5" style={labelStyle}>BUDGET SETTINGS</h4>
         */}
         

         <div className="d-flex justify-content-between align-items-center mb-5">
  <h4 className="fw-bold m-0" style={labelStyle}>BUDGET SETTINGS</h4>
  {(isFrame1Editable || isFrame3Editable) && (
    <button
      className="btn"
      style={{
        backgroundColor: '#DCAB83',
        color: '#ffffff',
        padding: '10px 32px',
        borderRadius: '6px',
        fontWeight: '500',
      }}
      onClick={handleSaveSettings}
    >
      Save 
    </button>
  )}
</div>

        <div className="row">
          {/* Left Column */}
          <div className="col-lg-7 d-flex flex-column gap-4" style={{ height: '700px' }}>
            {/* Frame 1: Time Range + Net Income */}
            <div
              className="rounded shadow p-4 position-relative"
              style={{
                backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA',
                height: '320px',
              }}
            >
              <div className="position-absolute top-0 end-0 p-3">
                <i
                  className="bi bi-pencil-fill"
                  style={{
                    fontSize: '18px',
                    color: darkMode ? '#ffffff' : '#000000',
                    cursor: 'pointer',
                  }}
                  onClick={() => setIsFrame1Editable(true)}
                ></i>
              </div>

              {/* <div className="mb-4">
                <label className="form-label" style={labelStyle}>Budget Time Range</label>
                <div className="d-flex gap-2">
                  <div className="flex-fill">
                    <label className="form-label" style={{ ...labelStyle, fontSize: '0.9rem' }}>From</label>
                    <input  type="date"
  className="form-control"
  style={{
    ...inputStyle,
    colorScheme: darkMode ? 'dark' : 'light',
    opacity: isFrame1Editable ? 1 : 0.7,
    cursor: isFrame1Editable ? 'text' : 'not-allowed',
  }}
  value={startDate}
  onChange={isFrame1Editable ? (e) => setStartDate(e.target.value) : undefined}
  readOnly={!isFrame1Editable}
  disabled={!isFrame1Editable}
/>
                  </div>
                  <div className="flex-fill">
                    <label className="form-label" style={{ ...labelStyle, fontSize: '0.9rem' }}>To</label>
                    <input
  type="date"
  className="form-control"
  style={{
    ...inputStyle,
    colorScheme: darkMode ? 'dark' : 'light',
    opacity: isFrame1Editable ? 1 : 0.7,
    cursor: isFrame1Editable ? 'text' : 'not-allowed',
  }}
  value={endDate}
  onChange={isFrame1Editable ? (e) => setEndDate(e.target.value) : undefined}
  readOnly={!isFrame1Editable}
  disabled={!isFrame1Editable}
/>
                  </div>
                </div>
              </div> */}


              {/* Month & Year Selection */}
<div className="mb-4">
  <label className="form-label" style={labelStyle}>Budget Month & Year</label>
  <div className="d-flex gap-3">
    <select
      className="form-select"
      style={{ ...inputStyle, opacity: isFrame1Editable ? 1 : 0.7 }}
      value={month}
      onChange={isFrame1Editable ? (e) => setMonth(parseInt(e.target.value)) : undefined}
      disabled={!isFrame1Editable}
    >
      <option value="">Select Month</option>
      {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m, i) => (
        <option key={m} value={i + 1}>{m}</option>
      ))}
    </select>

    <input
      type="number"
      className="form-control"
      style={{ ...inputStyle, opacity: isFrame1Editable ? 1 : 0.7 }}
      placeholder="Year"
      value={year}
      onChange={isFrame1Editable ? (e) => setYear(parseInt(e.target.value)) : undefined}
      disabled={!isFrame1Editable}
    />
  </div>
</div>

              <div>
                <label className="form-label" style={labelStyle}>My Total Net Income</label>
                <input
  type="text"
  className="form-control"
  style={{
    ...inputStyle,
    opacity: isFrame1Editable ? 1 : 0.7,
    cursor: isFrame1Editable ? 'text' : 'not-allowed',
  }}
  placeholder="Enter income"
  value={netIncome}
  onChange={isFrame1Editable ? (e) => setNetIncome(e.target.value) : undefined}
  readOnly={!isFrame1Editable}
  disabled={!isFrame1Editable}
/>
              </div>
            </div>

            {/* Frame 2: Donut Chart */}
            <div
              className="rounded shadow p-4 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA',
                height: '380px',
              }}
            >
              <div>
                <h5 className="fw-bold mb-2" style={labelStyle}>Monthly Categorical Trend</h5>
                <p style={{ color: darkMode ? '#ffffff' : '#000000' }}>
                  Total Income ₹ {netIncome || '0'}
                </p>
              </div>

              <div className="d-flex justify-content-center align-items-center flex-grow-1">
                <div
                  style={{
                    width: '270px',
                    height: '250px',
                    backgroundColor: '#DCAB83',
                    borderRadius: '70%',
                  }}
                >
                  {/* Donut chart placeholder */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Category Budgets */}
          <div className="col-lg-5" style={{ height: '700px' }}>
            <div
              className="rounded shadow p-5 h-100 position-relative"
              style={{
                backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA',
                overflowY: 'auto',
              }}
            >
              <div className="position-absolute top-0 end-0 p-3">
                <i
                  className="bi bi-pencil-fill"
                  style={{
                    fontSize: '18px',
                    color: darkMode ? '#ffffff' : '#000000',
                    cursor: 'pointer',
                  }}
                  onClick={() => setIsFrame3Editable(true)}
                ></i>
              </div>

              <h5 className="fw-bold mb-4" style={labelStyle}>Category-wise Budget</h5>
              <div className="row">
                {Object.keys(categoryBudgets).map((category) => (
                  <div className="col-md-12 mb-4" key={category}>
                    <label className="form-label" style={labelStyle}>{category}</label>
                    <input
  type="text"
  className="form-control"
  style={{
    ...inputStyle,
    opacity: isFrame3Editable ? 1 : 0.7,
    cursor: isFrame3Editable ? 'text' : 'not-allowed',
  }}
  placeholder={`₹ for ${category}`}
  value={categoryBudgets[category]}
  onChange={isFrame3Editable ? (e) =>
    setCategoryBudgets({ ...categoryBudgets, [category]: e.target.value })
    : undefined}
  readOnly={!isFrame3Editable}
  disabled={!isFrame3Editable}
/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;