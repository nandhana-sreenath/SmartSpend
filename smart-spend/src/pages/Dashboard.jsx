// import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';
// import LineGraph from '../components/LineGraph';
// import CategoryDonutChart from '../components/CategoryDonutChart';
// import { ThemeContext } from '../context/ThemeContext';
// import '../index.css';

// const Dashboard = () => {
//   const [income, setIncome] = useState(0);
//   const [expenses, setExpenses] = useState(0);
//   const remaining = parseFloat(income) - parseFloat(expenses);

//   const [utilityData, setUtilityData] = useState([]);
//   const [categoryBudgets, setCategoryBudgets] = useState({});




//   const navigate = useNavigate();
//   const { darkMode } = useContext(ThemeContext);


//   useEffect(() => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   fetch(`http://localhost:8000/dashboard/summary/?email=${user.email}`)
//     .then(res => res.json())
//     .then(data => {
//       setIncome(data.net_income);
//       setExpenses(data.total_expenses);
//     })
//     .catch(err => console.error('Dashboard fetch error:', err));
// }, []);


// useEffect(() => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   fetch(`http://localhost:8000/dashboard/utilities/?email=${user.email}&month=10&year=2025`)
//     .then(res => res.json())
//     .then(data => setUtilityData(data))
//     .catch(err => console.error('Utility trends fetch error:', err));
// }, []);

// useEffect(() => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   fetch(`http://localhost:8000/settings/fetch/?email=${user.email}`)
//     .then(res => res.json())
//     .then(data => {
//       setCategoryBudgets({
//         Utilities: data.utilities || '',
//         Education: data.education || '',
//         Food: data.food || '',
//         Transport: data.transport || '',
//         Personal: data.personal || '',
//       });
//     })
//     .catch(err => console.error('Error fetching category budgets:', err));
// }, []);



  

//   const handleAddExpense = () => {
//         navigate('/expenses');
//   };

//   const handleSetBudget = () => {
//     navigate('/settings');
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
//       {/* Top Header */}
//       <Header/>

//       {/* Navigation Bar */}
//       <Navbar />

//       {/* Dashboard Content */}
//       <div
//         className="shadow rounded p-4 mt-4"
//         style={{
//           backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
//           maxWidth: '1500px',
//           margin: '0 auto',
//         }}
//       >
//         <h4 className="fw-bold mb-5" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//           DASHBOARD
//         </h4>

//         <div className="row">
//           {/* Left Column: Quick Actions */}
//           <div className="col-md-4">
//             <h6 className="fw-semibold mb-3" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//               Quick Actions
//             </h6>
//             <div className="d-flex flex-column gap-3">
//               <button
//                 className="btn"
//                 style={{
//                   backgroundColor: '#DCAB83',
//                   color: '#ffffff',
//                   padding: '8px 24px',
//                   borderRadius: '6px',
//                   fontWeight: '500',
//                 }}
//                 onClick={handleAddExpense}
//               >
//                 Add Expense
//               </button>
//               <button
//                 className="btn"
//                 style={{
//                   backgroundColor: '#DCAB83',
//                   color: '#ffffff',
//                   padding: '8px 24px',
//                   borderRadius: '6px',
//                   fontWeight: '500',
//                 }}
//                 onClick={handleSetBudget}
//               >
//                 Set Budget
//               </button>
//             </div>
           
//           </div>

//           {/* Right Column: Financial Metrics */}
//           <div className="col-md-8 mt-4">
//             <div className="row g-3">
//               <div className="col-md-4">
//                 <div
//                   className="rounded p-3 h-100 d-flex flex-column justify-content-center align-items-center text-center"
//                   style={{
//                     boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)',
//                     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//                     color: darkMode ? '#ffffff' : '#000000',
//                   }}
//                 >
//                   <h6 className="fw-semibold mt-3">Total Income</h6>
//                   <p className="fs-4 fw-bold" style={{ color: '#28a745' }}>
//                     ₹ {income.toLocaleString()}
//                   </p>
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div
//                   className="rounded p-3 h-100 d-flex flex-column justify-content-center align-items-center text-center"
//                   style={{
//                     boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)',
//                     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//                     color: darkMode ? '#ffffff' : '#000000',
//                   }}
//                 >
//                   <h6 className="fw-semibold mt-3">Total Expenses</h6>
//                   <p className="fs-4 fw-bold" style={{ color: '#dc3545' }}>
//                     ₹ {expenses.toLocaleString()}
//                   </p>
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div
//                   className="rounded p-3 h-100 d-flex flex-column justify-content-center align-items-center text-center"
//                   style={{
//                     boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)',
//                     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//                     color: darkMode ? '#ffffff' : '#000000',
//                   }}
//                 >
//                   <h6 className="fw-semibold mt-3">Remaining Budget</h6>
//                   <p className="fs-4 fw-bold" style={{ color: '#28a745' }}>
//                     ₹ {remaining.toLocaleString()}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//       <div style={{ width: '700px', height: '700px', marginTop: '40px' }}>
//   <LineGraph data={utilityData} darkMode={darkMode} />
//   <CategoryDonutChart categoryBudgets={categoryBudgets} />

// </div>


//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import LineGraph from '../components/LineGraph';
import CategoryDonutChart from '../components/CategoryDonutChart';
import MonthlySavingsChart from '../components/MonthlySavingsChart';
import { ThemeContext } from '../context/ThemeContext';
import '../index.css';

const Dashboard = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const remaining = parseFloat(income) - parseFloat(expenses);

  const [utilityData, setUtilityData] = useState([]);
  const [categoryBudgets, setCategoryBudgets] = useState({});
  const [monthlyData, setMonthlyData] = useState([]);





  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);


  useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  fetch(`http://localhost:8000/dashboard/summary/?email=${user.email}`)
    .then(res => res.json())
    .then(data => {
      setIncome(data.net_income);
      setExpenses(data.total_expenses);
    })
    .catch(err => console.error('Dashboard fetch error:', err));
}, []);


useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  fetch(`http://localhost:8000/dashboard/utilities/?email=${user.email}&month=10&year=2025`)
    .then(res => res.json())
    .then(data => setUtilityData(data))
    .catch(err => console.error('Utility trends fetch error:', err));
}, []);

useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  fetch(`http://localhost:8000/settings/fetch/?email=${user.email}`)
    .then(res => res.json())
    .then(data => {
      setCategoryBudgets({
        Utilities: data.utilities || '',
        Education: data.education || '',
        Food: data.food || '',
        Transport: data.transport || '',
        Personal: data.personal || '',
      });
    })
    .catch(err => console.error('Error fetching category budgets:', err));
}, []);


useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  fetch(`http://localhost:8000/settings/monthly-finance/?email=${user.email}`)
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(entry => entry.income && entry.spent);
      setMonthlyData(filtered);
    })
    .catch(err => console.error('Error fetching monthly finance:', err));
}, []);




  

  const handleAddExpense = () => {
        navigate('/expenses');
  };

  const handleSetBudget = () => {
    navigate('/settings');
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
      {/* Top Header */}
      <Header/>

      {/* Navigation Bar */}
      <Navbar />

      {/* Dashboard Content */}
      <div
        className="shadow rounded p-4 mt-4"
        style={{
          backgroundColor: darkMode ? '#2C2C2C' : '#E5EAF0',
          maxWidth: '1500px',
          margin: '0 auto',
        }}
      >
        <h4 className="fw-bold mb-5" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
          DASHBOARD
        </h4>

        <div className="row">
          {/* Left Column: Quick Actions */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
              Quick Actions
            </h6>
            <div className="d-flex flex-column gap-3">
              <button
                className="btn"
                style={{
                  backgroundColor: '#DCAB83',
                  color: '#ffffff',
                  padding: '8px 24px',
                  borderRadius: '6px',
                  fontWeight: '500',
                }}
                onClick={handleAddExpense}
              >
                Add Expense
              </button>
              <button
                className="btn"
                style={{
                  backgroundColor: '#DCAB83',
                  color: '#ffffff',
                  padding: '8px 24px',
                  borderRadius: '6px',
                  fontWeight: '500',
                }}
                onClick={handleSetBudget}
              >
                Set Budget
              </button>
            </div>
           
          </div>

          {/* Right Column: Financial Metrics */}
          <div className="col-md-8 mt-4">
            <div className="row g-3">
              <div className="col-md-4">
                <div
                  className="rounded p-3 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                  style={{
                    boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)',
                    backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
                    color: darkMode ? '#ffffff' : '#000000',
                  }}
                >
                  <h6 className="fw-semibold mt-3">Total Income</h6>
                  <p className="fs-4 fw-bold" style={{ color: '#28a745' }}>
                    ₹ {income.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="rounded p-3 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                  style={{
                    boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)',
                    backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
                    color: darkMode ? '#ffffff' : '#000000',
                  }}
                >
                  <h6 className="fw-semibold mt-3">Total Expenses</h6>
                  <p className="fs-4 fw-bold" style={{ color: '#dc3545' }}>
                    ₹ {expenses.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="rounded p-3 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                  style={{
                    boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)',
                    backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
                    color: darkMode ? '#ffffff' : '#000000',
                  }}
                >
                  <h6 className="fw-semibold mt-3">Remaining Budget</h6>
                  <p className="fs-4 fw-bold" style={{ color: '#28a745' }}>
                    ₹ {remaining.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

      {/* <div style={{ width: '700px', height: '700px', marginTop: '40px' }}>
  <LineGraph data={utilityData} darkMode={darkMode} />
</div>*/}

<div className="row mt-5">
  <div className="col-md-6">
    <LineGraph data={utilityData} darkMode={darkMode} />
  </div>
  <div className="col-md-6">
    <CategoryDonutChart categoryBudgets={categoryBudgets} darkMode={darkMode} />
  </div>
</div>


<div className="row mt-4">
  <div className="col-12">
    <MonthlySavingsChart data={monthlyData} darkMode={darkMode} />
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Dashboard;