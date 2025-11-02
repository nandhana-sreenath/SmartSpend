import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineGraph = ({ data, darkMode }) => {
  return (
    <div className="mt-4 p-3 rounded shadow" style={{ backgroundColor: darkMode ? '#1E1E1E' : '#F8F9FA' }}>
      <h6 className="fw-bold mb-3" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
        Monthly Utility Trends
      </h6>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart className="mt-4" data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="utility" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="allotted" stroke="#DCAB83" strokeWidth={3} name="Allotted" />
          <Line type="monotone" dataKey="spent" stroke="#8884d8" strokeDasharray="5 5" strokeWidth={2} name="Spent" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;