// import React, { useContext, useState } from 'react';
// import { ThemeContext } from '../context/ThemeContext';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';

// const Profile = () => {
//   const { darkMode } = useContext(ThemeContext);
//   const [isEditing, setIsEditing] = useState(false);

//   const [formData, setFormData] = useState({
//     fullName: 'Nandhana',
//     dob: '2003-03-15',
//     occupation: 'ASE',
//     email: 'nandhana1503@gmail.com',
//     income: '₹ 28000',
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleEditToggle = () => {
//     setIsEditing((prev) => !prev);
//   };

//   const inputStyle = {
//     color: '#000000',
//     boxShadow: 'none',
//   };

//   return (
//     <div
//       className="page-wrapper"
//       style={{
//         backgroundColor: darkMode ? '#121212' : '#E5EAF0',
//         minHeight: '100vh',
//         padding: '24px',
//       }}
//     >
//       <Header userName="Nandhana" />
//       <Navbar />

//       <div
//         className="shadow px-4 py-5 rounded mt-4"
//         style={{
//           backgroundColor: darkMode ? '#1c1c1c' : '#ffffff',
//           color: darkMode ? '#ffffff' : '#000000',
//           maxWidth: '1500px',
//           margin: '0 auto',
//         }}
//       >
//         {/* Title + Edit Toggle */}
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h4 className="fw-bold">PROFILE INFO</h4>
//           {isEditing ? (
//             <button
//               className="btn"
//               style={{
//                 backgroundColor: '#DCAB83',
//                 color: '#ffffff',
//                 padding: '6px 24px',
//                 borderRadius: '6px',
//                 fontWeight: '500',
//               }}
//               onClick={handleEditToggle}
//             >
//               Save
//             </button>
//           ) : (
//             <button
//   className="btn fw-semibold"
//   style={{
//     border: '1px solid #DCAB83', // ✅ Explicit orange border
//     color: '#DCAB83',
//     padding: '6px 24px',
//     borderRadius: '6px',
//     backgroundColor: 'transparent',
//   }}
//   onClick={handleEditToggle}
// >
//   Edit
// </button>
//           )}
//         </div>

//         {/* Full Name & DOB */}
//         <div className="row mb-3">
//           <div className="col-md-6">
//             <label htmlFor="fullName" className="form-label mb-2 small fw-bold">
//               Full Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               readOnly={!isEditing}
//               style={inputStyle}
//             />
//           </div>
//           <div className="col-md-6">
//             <label htmlFor="dob" className="form-label mb-2 small fw-bold">
//               DOB
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               id="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               readOnly={!isEditing}
//               style={inputStyle}
//             />
//           </div>
//         </div>

//         {/* Occupation & Email */}
//         <div className="row mb-4">
//           <div className="col-md-6">
//             <label htmlFor="occupation" className="form-label mb-2 small fw-bold">
//               Occupation/Role
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="occupation"
//               value={formData.occupation}
//               onChange={handleChange}
//               readOnly={!isEditing}
//               style={inputStyle}
//             />
//           </div>
//           <div className="col-md-6">
//             <label htmlFor="email" className="form-label mb-2 small fw-bold">
//               E-mail ID
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               value={formData.email}
//               readOnly
//               style={{ color: '#000000' }}
//             />
//           </div>
//         </div>

//         {/* Income Section */}
//         <div className="mb-3">
//           <h6 className="fw-bold">Your Income</h6>
//           <label htmlFor="income" className="form-label mb-2 small">
//             What is your total monthly net income?
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="income"
//             value={formData.income}
//             onChange={handleChange}
//             readOnly={!isEditing}
//             style={inputStyle}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Profile = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: 'Nandhana',
    dob: '2003-03-15',
    occupation: 'ASE',
    email: 'nandhana1503@gmail.com',
    income: '₹ 28000',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const inputStyle = {
    color: darkMode ? '#ffffff' : '#000000',
    backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
    borderColor: darkMode ? '#444' : '#ced4da',
    boxShadow: 'none',
    transition: 'all 0.3s ease',
  };

  return (
    <div
      className="page-wrapper"
      style={{
        backgroundColor: darkMode ? '#121212' : '#E5EAF0',
        minHeight: '100vh',
        padding: '24px',
      }}
    >
      <Header userName="Nandhana" />
      <Navbar />

      <div
        className="shadow px-4 py-5 rounded mt-4"
        style={{
          backgroundColor: darkMode ? '#1c1c1c' : '#ffffff',
          color: darkMode ? '#ffffff' : '#000000',
          maxWidth: '1500px',
          margin: '0 auto',
        }}
      >
        {/* Title + Edit Toggle */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold">PROFILE INFO</h4>
          {isEditing ? (
            <button
              className="btn"
              style={{
                backgroundColor: '#DCAB83',
                color: '#ffffff',
                padding: '6px 24px',
                borderRadius: '6px',
                fontWeight: '500',
              }}
              onClick={handleEditToggle}
            >
              Save
            </button>
          ) : (
            <button
              className="btn fw-semibold"
              style={{
                border: '1px solid #DCAB83',
                color: '#DCAB83',
                padding: '6px 24px',
                borderRadius: '6px',
                backgroundColor: 'transparent',
              }}
              onClick={handleEditToggle}
            >
              Edit
            </button>
          )}
        </div>

        {/* Full Name & DOB */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="fullName" className="form-label mb-2 small fw-bold">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              readOnly={!isEditing}
              style={inputStyle}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="dob" className="form-label mb-2 small fw-bold">
              DOB
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
              readOnly={!isEditing}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Occupation & Email */}
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="occupation" className="form-label mb-2 small fw-bold">
              Occupation/Role
            </label>
            <input
              type="text"
              className="form-control"
              id="occupation"
              value={formData.occupation}
              onChange={handleChange}
              readOnly={!isEditing}
              style={inputStyle}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label mb-2 small fw-bold">
              E-mail ID
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              readOnly
              style={inputStyle}
            />
          </div>
        </div>

        {/* Income Section */}
        <div className="mb-3">
          <h6 className="fw-bold">Your Income</h6>
          <label htmlFor="income" className="form-label mb-2 small">
            What is your total monthly net income?
          </label>
          <input
            type="text"
            className="form-control"
            id="income"
            value={formData.income}
            onChange={handleChange}
            readOnly={!isEditing}
            style={inputStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;