// // import React, { useState, useContext } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import Header from '../components/Header';
// // import Navbar from '../components/Navbar';
// // import { ThemeContext } from '../context/ThemeContext';
// // import '../index.css';

// // const Expenses = () => {
// //   const [title, setTitle] = useState('');
// //   const [amount, setAmount] = useState('');
// //   const [category, setCategory] = useState('');
// //   const [date, setDate] = useState('');

// //   const navigate = useNavigate();
// //   const { darkMode } = useContext(ThemeContext);

// //   const handleAddExpense = () => {
// //     console.log('Expense Added:', { title, amount, category, date });
// //     // Add your logic here
// //   };

// //   const inputStyle = {
// //     color: darkMode ? '#ffffff' : '#000000',
// //     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
// //     borderColor: darkMode ? '#444' : '#ced4da',
// //     boxShadow: 'none',
// //     transition: 'all 0.3s ease',
// //   };

// //   return (
// //     <div
// //       className="page-wrapper"
// //       style={{
// //         backgroundColor: darkMode ? '#1E1E1E' : '#E5EAF0',
// //         minHeight: '100vh',
// //         padding: '24px',
// //       }}
// //     >
// //       {/* Top Header */}
// //       <Header userName="Nandhana" />

// //       {/* Navigation Bar */}
// //       <Navbar />

// //       {/* Expense Form */}
// //       <div
// //         className="shadow rounded p-4 mt-4"
// //         style={{
// //           backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
// //           maxWidth: '1500px',
// //           margin: '0 auto',
// //         }}
// //       >
// //         <h4 className="fw-bold mb-5" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
// //           EXPENSE TRACKER
// //         </h4>

// //         <div className="row">
// //           <div className="col-md-6 mb-4">
// //             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
// //               Title
// //             </label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               style={inputStyle}
// //               placeholder="Enter expense title"
// //               value={title}
// //               onChange={(e) => setTitle(e.target.value)}
// //             />
// //           </div>

// //           <div className="col-md-6 mb-4">
// //             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
// //               Amount
// //             </label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               style={inputStyle}
// //               placeholder="Enter amount"
// //               value={amount}
// //               onChange={(e) => setAmount(e.target.value)}
// //             />
// //           </div>

// //           <div className="col-md-6 mb-4">
// //             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
// //               Category
// //             </label>
// //             <select
// //               className="form-select"
// //               style={inputStyle}
// //               value={category}
// //               onChange={(e) => setCategory(e.target.value)}
// //             >
// //               <option value="">Select Category</option>
// //               <option value="Food">Food</option>
// //               <option value="Transport">Transport</option>
// //               <option value="Shopping">Shopping</option>
// //               <option value="Utilities">Utilities</option>
// //               <option value="Other">Other</option>
// //             </select>
// //           </div>

// //           <div className="col-md-6 mb-4">
// //             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
// //               Date
// //             </label>
// //             <input
// //               type="date"
// //               className="form-control"
// //               style={inputStyle}
// //               value={date}
// //               onChange={(e) => setDate(e.target.value)}
// //             />
// //           </div>

// //           <div className="col-12 mt-3 d-flex justify-content-center">
// //             <button
// //               className="btn"
// //               style={{
// //                 backgroundColor: '#DCAB83',
// //                 color: '#ffffff',
// //                 padding: '10px 32px',
// //                 borderRadius: '6px',
// //                 fontWeight: '500',
// //               }}
// //               onClick={handleAddExpense}
// //             >
// //               Add Expense
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       <div
// //         className="shadow rounded p-4 mt-4"
// //         style={{
// //           backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
// //           maxWidth: '1500px',
// //           margin: '0 auto',
// //         }}
// //       >
      
// //       </div>
// //     </div>
// //   );
// // };

// // export default Expenses;


// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';
// import { ThemeContext } from '../context/ThemeContext';
// import '../index.css';

// const Expenses = () => {
//   const [title, setTitle] = useState('');
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('');
//   const [date, setDate] = useState('');
//   const [expenseList, setExpenseList] = useState([]);

//   const navigate = useNavigate();
//   const { darkMode } = useContext(ThemeContext);

//   const handleAddExpense = () => {
//     if (title && amount && category && date) {
//       const newExpense = { title, amount, category, date };
//       setExpenseList([...expenseList, newExpense]);
//       setTitle('');
//       setAmount('');
//       setCategory('');
//       setDate('');
//     }
//   };

//   const inputStyle = {
//     color: darkMode ? '#ffffff' : '#000000',
//     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//     borderColor: darkMode ? '#444' : '#ced4da',
//     boxShadow: 'none',
//     transition: 'all 0.3s ease',
//   };

//   const tableHeaderStyle = {
//     backgroundColor: '#DCAB83',
//     color: '#ffffff',
//     fontWeight: '600',
//   };

//   const tableCellStyle = {
//     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//     color: darkMode ? '#ffffff' : '#000000',
//     borderBottom: '1px solid #ccc',
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
//       <Navbar />

//       {/* Expense Form */}
//       <div
//         className="shadow rounded p-4 mt-4"
//         style={{
//           backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
//           maxWidth: '1500px',
//           margin: '0 auto',
//         }}
//       >
//         <h4 className="fw-bold mb-5" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//           EXPENSE TRACKER
//         </h4>

//         <div className="row">
//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Title
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               style={inputStyle}
//               placeholder="Enter expense title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>

//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Amount
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               style={inputStyle}
//               placeholder="Enter amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </div>

//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Category
//             </label>
//             <select
//               className="form-select"
//               style={inputStyle}
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <option value="">Select Category</option>
//               <option value="Food">Food</option>
//               <option value="Transport">Transport</option>
//               <option value="Shopping">Shopping</option>
//               <option value="Utilities">Utilities</option>
//               <option value="Entertainment">Entertainment</option>
//               <option value="Education">Education</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Date
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               style={inputStyle}
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>

//           <div className="col-12 mt-3 d-flex justify-content-center">
//             <button
//               className="btn"
//               style={{
//                 backgroundColor: '#DCAB83',
//                 color: '#ffffff',
//                 padding: '10px 32px',
//                 borderRadius: '6px',
//                 fontWeight: '500',
//               }}
//               onClick={handleAddExpense}
//             >
//               Add Expense
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Expense Table */}
//       <div
//         className="shadow rounded p-4 mt-4"
//         style={{
//           backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
//           maxWidth: '1500px',
//         }}
//       >

// <div className="table-responsive">
//   <table
//     className="table"
//     style={{
//       borderRadius: '8px',
//       overflow: 'hidden',
//     }}
//   >
//     <thead>
//       <tr style={{ backgroundColor: '#DCAB83',  fontWeight: '600' }}>
//         <th>Title</th>
//         <th>Amount</th>
//         <th>Category</th>
//         <th>Date</th>
//       </tr>
//     </thead>
//     <tbody>
//       {expenseList.map((expense, index) => {
//         const isEven = index % 2 === 0;
//         const rowBg = darkMode
//           ? isEven ? '#2C2C2C' : '#1E1E1E'
//           : isEven ? '#ffffff' : '#F7F7F7';

//         return (
//           <tr key={index} style={{ backgroundColor: rowBg, color: darkMode ? '#ffffff' : '#000000' }}>
//             <td>{expense.title}</td>
//             <td>₹ {parseInt(expense.amount).toLocaleString()}</td>
//             <td>{expense.category}</td>
//             <td>{expense.date}</td>
//             <td>
//               <i className="bi bi-pencil" style={{ color: '#DCAB83', cursor: 'pointer' }}></i>
//             </td>
//           </tr>
//         );
//       })}
//       {expenseList.length === 0 && (
//         <tr>
//           <td colSpan="5" className="text-center" style={{ backgroundColor: darkMode ? '#2C2C2C' : '#ffffff', color: darkMode ? '#ffffff' : '#000000' }}>
//             No expenses added yet.
//           </td>
//         </tr>
//       )}
//     </tbody>
//   </table>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Expenses;



// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';
// import { ThemeContext } from '../context/ThemeContext';
// import '../index.css';

// const Expenses = () => {
//   const [title, setTitle] = useState('');
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('');
//   const [date, setDate] = useState('');
//   const [expenseList, setExpenseList] = useState([]);

//   const navigate = useNavigate();
//   const { darkMode } = useContext(ThemeContext);

//   const handleAddExpense = () => {
//     if (title && amount && category && date) {
//       const newExpense = { title, amount, category, date };
//       setExpenseList([...expenseList, newExpense]);
//       setTitle('');
//       setAmount('');
//       setCategory('');
//       setDate('');
//     }
//   };

//   const inputStyle = {
//     color: darkMode ? '#ffffff' : '#000000',
//     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//     borderColor: darkMode ? '#444' : '#ced4da',
//     boxShadow: 'none',
//     transition: 'all 0.3s ease',
//   };

//   const cellStyle = {
//   backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//   color: darkMode ? '#ffffff' : '#000000',
//   borderBottom: `1px solid ${darkMode ? '#444' : '#ccc'}`,
//   padding: '12px',
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
//       <Header userName="Nandhana" />
//       <Navbar />

//       {/* Expense Form */}
//       <div
//         className="shadow rounded p-4 mt-4"
//         style={{
//           backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
//           maxWidth: '1500px',
//           margin: '0 auto',
//         }}
//       >
//         <h4 className="fw-bold mb-5" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//           EXPENSE TRACKER
//         </h4>

//         <div className="row">
//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Title
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               style={inputStyle}
//               placeholder="Enter expense title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>

//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Amount
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               style={inputStyle}
//               placeholder="Enter amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </div>

//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Category
//             </label>
//             <select
//               className="form-select"
//               style={inputStyle}
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <option value="">Select Category</option>
//               <option value="Food">Food</option>
//               <option value="Transport">Transport</option>
//               <option value="Shopping">Shopping</option>
//               <option value="Utilities">Utilities</option>
//               <option value="Entertainment">Entertainment</option>
//               <option value="Education">Education</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Date
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               style={inputStyle}
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>

//           <div className="col-12 mt-3 d-flex justify-content-center">
//             <button
//               className="btn"
//               style={{
//                 backgroundColor: '#DCAB83',
//                 color: '#ffffff',
//                 padding: '10px 32px',
//                 borderRadius: '6px',
//                 fontWeight: '500',
//               }}
//               onClick={handleAddExpense}
//             >
//               Add Expense
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Expense Table */}
//       <div
//         className="shadow rounded p-4 mt-4"
//         style={{
//           backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
//           maxWidth: '1500px',
//           margin: '0 auto',
//         }}
//       >

//        <div className="table-responsive">
//   <table
//     className="table"
//     style={{
//       borderRadius: '12px',
//       overflow: 'hidden',
//       borderSpacing: 0,
//       borderCollapse: 'separate',
//     }}
//   >
//     <thead >
//       <tr style={{ backgroundColor: '#DCAB83' }}>
//         <th style={{ backgroundColor: '#DCAB83',color: '#ffffff', fontWeight: '600', padding: '12px' }}>Title</th>
//         <th style={{ backgroundColor: '#DCAB83',color: '#ffffff', fontWeight: '600', padding: '12px' }}>Amount</th>
//         <th style={{backgroundColor: '#DCAB83', color: '#ffffff', fontWeight: '600', padding: '12px' }}>Category</th>
//         <th style={{ backgroundColor: '#DCAB83', color: '#ffffff', fontWeight: '600', padding: '12px' }}>Date</th>
//         <th style={{ backgroundColor: '#DCAB83' }}></th>
//       </tr>
//     </thead>
//     <tbody>
//       {expenseList.map((expense, index) => {
//         const isEven = index % 2 === 0;
//         const rowBg = darkMode
//           ? isEven ? '#2C2C2C' : '#1E1E1E'
//           : isEven ? '#ffffff' : '#F7F7F7';

//         return (
//           <tr key={index} style={{ backgroundColor: rowBg, color: darkMode ? '#ffffff' : '#000000' }}>
//             <td style={{ padding: '12px' }}>{expense.title}</td>
//             <td style={{ padding: '12px' }}>₹ {parseInt(expense.amount).toLocaleString()}</td>
//             <td style={{ padding: '12px' }}>{expense.category}</td>
//             <td style={{ padding: '12px' }}>{expense.date}</td>
//             <td style={{ padding: '12px' }}>
//               <i className="bi bi-pencil" style={{ cursor: 'pointer' }}></i>
//             </td>
//           </tr>
//         );
//       })}
//       {expenseList.length === 0 && (
//         <tr>
//           <td colSpan="5" className="text-center" style={{ backgroundColor: darkMode ? '#2C2C2C' : '#ffffff', padding: '12px' }}>
//             No expenses added yet.
//           </td>
//         </tr>
//       )}
//     </tbody>
//   </table>
// </div>
//       </div>
//     </div>
//   );
// };

// export default Expenses;


// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';
// import EditExpense from '../components/EditExpense';
// import { ThemeContext } from '../context/ThemeContext';
// import '../index.css';

// const Expenses = () => {
//   const [title, setTitle] = useState('');
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('');
//   const [date, setDate] = useState('');
//   const [expenseList, setExpenseList] = useState([]);

//   const navigate = useNavigate();
//   const { darkMode } = useContext(ThemeContext);

//   const handleAddExpense = () => {
//     if (title && amount && category && date) {
//       const newExpense = { title, amount, category, date };
//       setExpenseList([...expenseList, newExpense]);
//       setTitle('');
//       setAmount('');
//       setCategory('');
//       setDate('');
//     }
//   };

//   const inputStyle = {
//     color: darkMode ? '#ffffff' : '#000000',
//     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//     borderColor: darkMode ? '#444' : '#ced4da',
//     boxShadow: 'none',
//     transition: 'all 0.3s ease',
//   };

//   const cellStyle = {
//     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//     color: darkMode ? '#ffffff' : '#000000',
//     borderBottom: `1px solid ${darkMode ? '#444' : '#ccc'}`,
//     padding: '12px',
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
//       <Navbar />

//       {/* Expense Form */}
//       <div
//         className="shadow rounded p-4 mt-4"
//         style={{
//           backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
//           maxWidth: '1500px',
//           margin: '0 auto',
//         }}
//       >
//         <h4 className="fw-bold mb-5" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//           EXPENSE TRACKER
//         </h4>

//         <div className="row">
//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Title
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               style={inputStyle}
//               placeholder="Enter expense title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>

//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Amount
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               style={inputStyle}
//               placeholder="Enter amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </div>

//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Category
//             </label>
//             <select
//               className="form-select"
//               style={inputStyle}
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <option value="">Select Category</option>
//               <option value="Food">Food</option>
//               <option value="Transport">Transport</option>
//               <option value="Shopping">Shopping</option>
//               <option value="Utilities">Utilities</option>
//               <option value="Entertainment">Entertainment</option>
//               <option value="Education">Education</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Date
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               style={{
//                 ...inputStyle,
//                 colorScheme: darkMode ? 'dark' : 'light',
//               }}
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>

//           <div className="col-12 mt-3 d-flex justify-content-center">
//             <button
//               className="btn"
//               style={{
//                 backgroundColor: '#DCAB83',
//                 color: '#ffffff',
//                 padding: '10px 32px',
//                 borderRadius: '6px',
//                 fontWeight: '500',
//               }}
//               onClick={handleAddExpense}
//             >
//               Add Expense
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Expense Table */}
//       <div
//         className="shadow rounded p-4 mt-4"
//         style={{
//           backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
//           maxWidth: '1500px',
//           margin: '0 auto',
//         }}
//       >
//         <h5 className="fw-bold mb-4" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//           Expense List
//         </h5>

//         <div className="table-responsive">
//           <table
//             className="table"
//             style={{
//               borderRadius: '12px',
//               overflow: 'hidden',
//               borderCollapse: 'separate',
//               borderSpacing: 0,
//               borderLeft: `2px solid ${darkMode ? '#444' : '#ccc'}`,
//               borderRight: `2px solid ${darkMode ? '#444' : '#ccc'}`,
//             }}
//           >
//             <thead>
//               <tr style={{ backgroundColor: '#DCAB83' }}>
//                 <th style={{ ...cellStyle, backgroundColor: '#DCAB83', color: '#ffffff', fontWeight: '600' }}>Title</th>
//                 <th style={{ ...cellStyle, backgroundColor: '#DCAB83', color: '#ffffff', fontWeight: '600' }}>Amount</th>
//                 <th style={{ ...cellStyle, backgroundColor: '#DCAB83', color: '#ffffff', fontWeight: '600' }}>Category</th>
//                 <th style={{ ...cellStyle, backgroundColor: '#DCAB83', color: '#ffffff', fontWeight: '600' }}>Date</th>
//                 <th style={{ ...cellStyle, backgroundColor: '#DCAB83' }}></th>
//               </tr>
//             </thead>
//             <tbody>
//               {expenseList.map((expense, index) => (
//                 <tr key={index}>
//                   <td style={cellStyle}>{expense.title}</td>
//                   <td style={cellStyle}>₹ {parseInt(expense.amount).toLocaleString()}</td>
//                   <td style={cellStyle}>{expense.category}</td>
//                   <td style={cellStyle}>{expense.date}</td>
//                   <td style={cellStyle}>
//                     <i className="bi bi-pencil" style={{ color: '#DCAB83', cursor: 'pointer' }}></i>
//                   </td>
//                 </tr>
//               ))}
//               {expenseList.length === 0 && (
//                 <tr>
//                   <td colSpan="5" className="text-center" style={cellStyle}>
//                     No expenses added yet.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Expenses;




// import React, { useState, useContext} from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';
// import EditExpense from '../components/EditExpense'; // your modal component
// import { ThemeContext } from '../context/ThemeContext';
// import '../index.css';

// const Expenses = () => {
//   const [title, setTitle] = useState('');
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('');
//   const [date, setDate] = useState('');
//   const [expenseList, setExpenseList] = useState([]);

//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editExpense, setEditExpense] = useState({
//     title: '',
//     amount: '',
//     category: '',
//     date: '',
//   });

//   const navigate = useNavigate();
//   const { darkMode } = useContext(ThemeContext);

//   const handleAddExpense = () => {
//     if (title && amount && category && date) {
//       const newExpense = { title, amount, category, date };
//       setExpenseList([...expenseList, newExpense]);
//       setTitle('');
//       setAmount('');
//       setCategory('');
//       setDate('');
//     }
//   };

//   const inputStyle = {
//     color: darkMode ? '#ffffff' : '#000000',
//     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//     borderColor: darkMode ? '#444' : '#ced4da',
//     boxShadow: 'none',
//     transition: 'all 0.3s ease',
//   };

//   const cellStyle = {
//     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//     color: darkMode ? '#ffffff' : '#000000',
//     borderBottom: `1px solid ${darkMode ? '#444' : '#ccc'}`,
//     padding: '12px',
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
//       <Navbar />

//       {/* Expense Form */}
//       <div
//         className="shadow rounded p-4 mt-4"
//         style={{
//           backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
//           maxWidth: '1500px',
//           margin: '0 auto',
//         }}
//       >
//         <h4 className="fw-bold mb-5" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//           EXPENSE TRACKER
//         </h4>

//         <div className="row">
//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Title
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               style={inputStyle}
//               placeholder="Enter expense title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>

//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Amount
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               style={inputStyle}
//               placeholder="Enter amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </div>

//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Category
//             </label>
//             <select
//               className="form-select"
//               style={inputStyle}
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <option value="">Select Category</option>
//               <option value="Food">Food</option>
//               <option value="Transport">Transport</option>
//               <option value="Shopping">Shopping</option>
//               <option value="Utilities">Utilities</option>
//               <option value="Entertainment">Entertainment</option>
//               <option value="Education">Education</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           <div className="col-md-6 mb-4">
//             <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Date
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               style={{
//                 ...inputStyle,
//                 colorScheme: darkMode ? 'dark' : 'light',
//               }}
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>

//           <div className="col-12 mt-3 d-flex justify-content-center">
//             <button
//               className="btn"
//               style={{
//                 backgroundColor: '#DCAB83',
//                 color: '#ffffff',
//                 padding: '10px 32px',
//                 borderRadius: '6px',
//                 fontWeight: '500',
//               }}
//               onClick={handleAddExpense}
//             >
//               Add Expense
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Expense Table */}
//       <div
//         className="shadow rounded p-4 mt-4"
//         style={{
//           backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
//           maxWidth: '1500px',
//           margin: '0 auto',
//         }}
//       >
//         <h5 className="fw-bold mb-4" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//           Expense List
//         </h5>

//         <div className="table-responsive">
//           <table
//             className="table"
//             style={{
//               borderRadius: '12px',
//               overflow: 'hidden',
//               borderCollapse: 'separate',
//               borderSpacing: 0,
//               borderLeft: `2px solid ${darkMode ? '#444' : '#ccc'}`,
//               borderRight: `2px solid ${darkMode ? '#444' : '#ccc'}`,
//             }}
//           >
//             <thead>
//               <tr style={{ backgroundColor: '#DCAB83' }}>
//                 <th style={{ ...cellStyle, backgroundColor: '#DCAB83', color: '#ffffff', fontWeight: '600' }}>Title</th>
//                 <th style={{ ...cellStyle, backgroundColor: '#DCAB83', color: '#ffffff', fontWeight: '600' }}>Amount</th>
//                 <th style={{ ...cellStyle, backgroundColor: '#DCAB83', color: '#ffffff', fontWeight: '600' }}>Category</th>
//                 <th style={{ ...cellStyle, backgroundColor: '#DCAB83', color: '#ffffff', fontWeight: '600' }}>Date</th>
//                 <th style={{ ...cellStyle, backgroundColor: '#DCAB83' }}></th>
//               </tr>
//             </thead>
//             <tbody>
//               {expenseList.map((expense, index) => (
//                 <tr key={index}>
//                   <td style={cellStyle}>{expense.title}</td>
//                   <td style={cellStyle}>₹ {parseInt(expense.amount).toLocaleString()}</td>
//                   <td style={cellStyle}>{expense.category}</td>
//                   <td style={cellStyle}>{expense.date}</td>
//                   <td style={cellStyle}>
//                     <i
//                       className="bi bi-pencil-fill"
//                       style={{ color: '#DCAB83', cursor: 'pointer' }}
//                       onClick={() => {
//                         setEditIndex(index);
//                         setEditExpense({ ...expense });
//                         setIsEditing(true);
//                       }}
//                     ></i>
//                   </td>
//                 </tr>
//               ))}
//               {expenseList.length === 0 && (
//                 <tr>
//                   <td colSpan="5" className="text-center" style={cellStyle}>
//                     No expenses added yet.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Edit Modal */}
//       {isEditing && (
//         <EditExpense
//           darkMode={darkMode}
//           editExpense={editExpense}
//           setEditExpense={setEditExpense}
//           onCancel={() => setIsEditing(false)}
//           onSave={() => {
//             const updatedList = [...expenseList];
//             updatedList[editIndex] = editExpense;
//             setExpenseList(updatedList);
//             setIsEditing(false);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default Expenses;



import React, { useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import EditExpense from '../components/EditExpense'; // your modal component
import { ThemeContext } from '../context/ThemeContext';
import '../index.css';

const Expenses = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [expenseList, setExpenseList] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editExpense, setEditExpense] = useState({
    title: '',
    amount: '',
    category: '',
    date: '',
  });

  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  fetch(`http://localhost:8000/expenses/fetch/?email=${user.email}`)
    .then(res => res.json())
    .then(data => {
     const formatted = data.expenses.map(exp => ({
  id: exp.id, // ✅ Add this so edits work
  title: exp.title, // or exp.title if your backend supports it
  amount: exp.amount,
  category: exp.category,
  date: exp.date,
}));
setExpenseList(formatted);

    })
    .catch(err => console.error('Error fetching expenses:', err));
}, []);



const handleAddExpense = async () => {
  if (title && amount && category && date) {
    const user = JSON.parse(localStorage.getItem('user'));

    // ✅ Fetch current budget month/year from settings
    const settings = await fetch(`http://localhost:8000/settings/fetch/?email=${user.email}`)
      .then(res => res.json())
      .catch(err => {
        console.error('Error fetching settings:', err);
        alert('Unable to validate budget month/year.');
        return null;
      });

    if (!settings) return;

    const selectedMonth = parseInt(settings.month);
    const selectedYear = parseInt(settings.year);
    const expenseDate = new Date(date);
    const expenseMonth = expenseDate.getMonth() + 1;
    const expenseYear = expenseDate.getFullYear();

    // ✅ Validate expense date against current budget month/year
    if (expenseMonth !== selectedMonth || expenseYear !== selectedYear) {
      alert(`This expense is outside your current budget month (${selectedMonth}) and year (${selectedYear}).`);
      return;
    }

    const payload = {
      email: user.email,
      title,
      category,
      amount,
      date,
    };

    const response = await fetch('http://localhost:8000/expenses/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const newExpense = { title, amount, category, date };
      setExpenseList([...expenseList, newExpense]);
      setTitle('');
      setAmount('');
      setCategory('');
      setDate('');
    }
  }
};
  const inputStyle = {
    color: darkMode ? '#ffffff' : '#000000',
    backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
    borderColor: darkMode ? '#444' : '#ced4da',
    boxShadow: 'none',
    transition: 'all 0.3s ease',
  };

  const cellStyle = {
    backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
    color: darkMode ? '#ffffff' : '#000000',
    borderBottom: `1px solid ${darkMode ? '#444' : '#ccc'}`,
    padding: '12px',
  };


  const handleSave = (updatedExpense) => {
  const updatedList = [...expenseList];
  updatedList[editIndex] = updatedExpense;
  setExpenseList(updatedList);
  setIsEditing(false);  
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
      <Header userName="Nandhana" />
      <Navbar />

      {/* Expense Form */}
      <div
        className="shadow rounded p-4 mt-4"
        style={{
          backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
          maxWidth: '1500px',
          margin: '0 auto',
        }}
      >
        <h4 className="fw-bold mb-5" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
          EXPENSE TRACKER
        </h4>

        <div className="row">
          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
              Title
            </label>
            <input
              type="text"
              className="form-control"
              style={inputStyle}
              placeholder="Enter expense title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
              Amount
            </label>
            <input
              type="text"
              className="form-control"
              style={inputStyle}
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
              Category
            </label>
            <select
              className="form-select"
              style={inputStyle}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Personal">Personal</option>
              <option value="Utilities">Utilities</option>
              <option value="Education">Education</option>
            </select>
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
              Date
            </label>
            <input
              type="date"
              className="form-control"
              style={{
                ...inputStyle,
                colorScheme: darkMode ? 'dark' : 'light',
              }}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="col-12 mt-3 d-flex justify-content-center">
            <button
              className="btn"
              style={{
                backgroundColor: '#DCAB83',
                color: '#ffffff',
                padding: '10px 32px',
                borderRadius: '6px',
                fontWeight: '500',
              }}
              onClick={handleAddExpense}
            >
              Add Expense
            </button>
          </div>
        </div>
      </div>

      {/* Expense Table */}
      <div
        className="shadow rounded p-4 mt-4"
        style={{
          backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
          maxWidth: '1500px',
          margin: '0 auto',
        }}
      >
        <h5 className="fw-bold mb-4" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
          Expense List
        </h5>

        <div className="table-responsive">
          <table
            className="table"
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              borderCollapse: 'separate',
              borderSpacing: 0,
              borderLeft: `2px solid ${darkMode ? '#444' : '#ccc'}`,
              borderRight: `2px solid ${darkMode ? '#444' : '#ccc'}`,
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#DCAB83' }}>
                <th style={{ ...cellStyle, backgroundColor: '#DCAB83', color: '#ffffff', fontWeight: '600' }}>Title</th>
                <th style={{ ...cellStyle, backgroundColor: '#DCAB83', color: '#ffffff', fontWeight: '600' }}>Amount</th>
                <th style={{ ...cellStyle, backgroundColor: '#DCAB83', color: '#ffffff', fontWeight: '600' }}>Category</th>
                <th style={{ ...cellStyle, backgroundColor: '#DCAB83', color: '#ffffff', fontWeight: '600' }}>Date</th>
                <th style={{ ...cellStyle, backgroundColor: '#DCAB83' }}></th>
              </tr>
            </thead>
            <tbody>
              {expenseList.map((expense, index) => (
                <tr key={index}>
                  <td style={cellStyle}>{expense.title}</td>
                  <td style={cellStyle}>₹ {parseInt(expense.amount).toLocaleString()}</td>
                  <td style={cellStyle}>{expense.category}</td>
                  <td style={cellStyle}>{expense.date}</td>
                  <td style={cellStyle}>
                    <i
                      className="bi bi-pencil-fill"
                      style={{ color: '#DCAB83', cursor: 'pointer' }}
                      onClick={() => {
  setEditIndex(index);
  setEditExpense({
    id: expense.id, // ✅ Add this
    title: expense.title,
    amount: expense.amount,
    category: expense.category,
    date: expense.date,
  });
  setIsEditing(true);
}}
                    ></i>
                  </td>
                </tr>
              ))}
              {expenseList.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center" style={cellStyle}>
                    No expenses added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <EditExpense
          darkMode={darkMode}
          editExpense={editExpense}
          setEditExpense={setEditExpense}
          onCancel={() => setIsEditing(false)}
         onSave={handleSave} // ✅ Now sends to backend
        />
      )}
    </div>
  );
};

export default Expenses;