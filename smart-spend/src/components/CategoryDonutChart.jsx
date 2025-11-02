// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const CategoryDonutChart = ({ categoryBudgets }) => {
//   const entries = Object.entries(categoryBudgets).filter(([_, val]) => val !== '');
//   const total = entries.reduce((sum, [_, val]) => sum + parseFloat(val || 0), 0);

//   const chartData = {
//     labels: entries.map(([key]) => key),
//     datasets: [
//       {
//         data: entries.map(([_, val]) => ((parseFloat(val) / total) * 100).toFixed(2)),
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#AA66CC'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: { position: 'right' },
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             const label = context.label || '';
//             const value = entries[context.dataIndex][1];
//             return `${label}: ₹${parseFloat(value).toLocaleString()} (${context.formattedValue}%)`;
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ width: '400px', height: '400px' }}>
//       <Pie data={chartData} options={options} />
//     </div>
//   );
// };

// export default CategoryDonutChart;



// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const CategoryDonutChart = ({ categoryBudgets, darkMode }) => {
//   const entries = Object.entries(categoryBudgets).filter(([_, val]) => val !== '');
//   const total = entries.reduce((sum, [_, val]) => sum + parseFloat(val || 0), 0);

//   const chartData = {
//     labels: entries.map(([key]) => key),
//     datasets: [
//       {
//         data: entries.map(([_, val]) => ((parseFloat(val) / total) * 100).toFixed(2)),
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#AA66CC'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: { position: 'right' },
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             const label = context.label || '';
//             const value = entries[context.dataIndex][1];
//             return `${label}: ₹${parseFloat(value).toLocaleString()} (${context.formattedValue}%)`;
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div className="mt-4 p-3 rounded shadow" style={{ backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA' }}>
//       <h6 className="fw-bold mb-3" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//         Category-wise Budget Breakdown
//       </h6>
//       <div style={{ width: '100%', height: '300px' }}>
//         <Pie data={chartData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default CategoryDonutChart;



import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryDonutChart = ({ categoryBudgets, darkMode }) => {
  const entries = Object.entries(categoryBudgets).filter(([_, val]) => val !== '');
  const total = entries.reduce((sum, [_, val]) => sum + parseFloat(val || 0), 0);

  const chartData = {
    labels: entries.map(([key]) => key),
    datasets: [
      {
        data: entries.map(([_, val]) => ((parseFloat(val) / total) * 100).toFixed(2)),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#AA66CC'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { position: 'right' },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = entries[context.dataIndex][1];
            return `${label}: ₹${parseFloat(value).toLocaleString()} (${context.formattedValue}%)`;
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div
      className="mt-4 p-3 rounded shadow d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA',
        height: '370px',
        width: '700px',
      }}
    >
      <h6 className="fw-bold mt-1" style={{ color: darkMode ? '#ffffff' : '#000000' ,alignSelf: 'flex-start'}}>
        Category-wise Budget Breakdown
      </h6>
      <div className="mt-2" style={{ width: '100%', height: '300px' ,}}>
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

export default CategoryDonutChart;