// import React from 'react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

// const MonthlySavingsChart = ({ data, darkMode }) => {
//   if (!data || data.length === 0) {
//     return (
//       <div className="mt-4 p-3 rounded shadow" style={{ backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA' }}>
//         <h6 className="fw-bold mb-3" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//           Monthly Savings
//         </h6>
//         <p style={{ color: darkMode ? '#ffffff' : '#000000' }}>No data available for this chart.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-4 p-3 rounded shadow" style={{ backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA' }}>
//       <h6 className="fw-bold mb-3" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//         Monthly Savings
//       </h6>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data} >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="income" stackId="income" fill="#28A745" name="Income" />
//           <Bar dataKey="spent" stackId="income" fill="#DC3545" name="Spent" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default MonthlySavingsChart;



import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const MonthlySavingsChart = ({ data, darkMode }) => {
  if (!data || data.length === 0) {
    return (
      <div className="mt-4 p-3 rounded shadow" style={{ backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA' }}>
        <h6 className="fw-bold mb-3" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
          Monthly Savings
        </h6>
        <p style={{ color: darkMode ? '#ffffff' : '#000000' }}>No data available for this chart.</p>
      </div>
    );
  }

  return (
    <div className="mt-4 p-3 rounded shadow" style={{ backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA' }}>
      <h6 className="fw-bold mb-3" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
        Monthly Savings
      </h6>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            formatter={(value, name, props) => [`₹${value.toLocaleString()}`, name]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Legend />
          <Bar dataKey="spent" stackId="income" fill="#DC3545" name="Spent" />
          <Bar dataKey="remaining" stackId="income" fill="#28A745" name="Remaining" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlySavingsChart;