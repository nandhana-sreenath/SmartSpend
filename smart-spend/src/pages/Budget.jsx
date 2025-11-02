import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../index.css';

const Budget = () => {
  return (
    // <div style={{ backgroundColor: '#E5EAF0', minHeight: '100vh', padding: '24px' }}>
    <div className='page-wrapper'>
      {/* Top Header */}
      <Header userName="Nandhana" />

      {/* Navigation Bar */}
      <Navbar />

  
    </div>
  );
};

export default Budget;