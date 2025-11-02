// import React from 'react';

// const EditExpenseModal = ({
//   darkMode,
//   editExpense,
//   setEditExpense,
//   onCancel,
//   onSave,
// }) => {
//   const inputStyle = {
//     color: darkMode ? '#ffffff' : '#000000',
//     backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//     borderColor: darkMode ? '#444' : '#ced4da',
//     boxShadow: 'none',
//     transition: 'all 0.3s ease',
//   };

//   return (
//     <div
//       className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
//       style={{
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         zIndex: 9999,
//       }}
//     >
//       <div
//         className="p-4 rounded shadow"
//         style={{
//           backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
//           width: '500px',
//           borderRadius: '12px',
//         }}
//       >
//         <h5 className="fw-bold mb-4" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
//           Edit Expense
//         </h5>

//         <div className="mb-3">
//           <label className="form-label" style={{ color: darkMode ? '#ffffff' : '#000000' }}>Title</label>
//           <input 
//             type="text"
//             className="form-control"
//             style={inputStyle}
//             value={editExpense.title}
//             onChange={(e) => setEditExpense({ ...editExpense, title: e.target.value })}
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label" style={{ color: darkMode ? '#ffffff' : '#000000' }}>Amount</label>
//           <input
//             type="text"
//             className="form-control"
//             style={inputStyle}
//             value={editExpense.amount}
//             onChange={(e) => setEditExpense({ ...editExpense, amount: e.target.value })}
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label" style={{ color: darkMode ? '#ffffff' : '#000000' }}>Category</label>
//           <select
//             className="form-select"
//             style={inputStyle}
//             value={editExpense.category}
//             onChange={(e) => setEditExpense({ ...editExpense, category: e.target.value })}
//           >
//             <option value="Food">Food</option>
//             <option value="Transport">Transport</option>
//             <option value="Shopping">Shopping</option>
//             <option value="Utilities">Utilities</option>
//             <option value="Entertainment">Entertainment</option>
//             <option value="Education">Education</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="form-label" style={{ color: darkMode ? '#ffffff' : '#000000' }}>Date</label>
//           <input
//             type="text"
//             className="form-control"
//             style={inputStyle}
//             placeholder="dd-mm-yyyy"
//             value={editExpense.date}
//             onChange={(e) => setEditExpense({ ...editExpense, date: e.target.value })}
//           />
//         </div>

//         <div className="d-flex justify-content-between">
//           <button className="btn btn-light" onClick={onCancel}>Cancel</button>
//           <button
//             className="btn"
//             style={{ backgroundColor: '#DCAB83', color: '#ffffff' }}
//             onClick={onSave}
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditExpenseModal;



import React from 'react';
// import { useNavigate } from 'react-router-dom';

const EditExpense = ({ darkMode, editExpense, setEditExpense, onCancel, onSave }) => {
  const inputStyle = {
    color: darkMode ? '#ffffff' : '#000000',
    backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
    borderColor: darkMode ? '#444' : '#ced4da',
    boxShadow: 'none',
    transition: 'all 0.3s ease',
  };




//   const handleSave = async () => {
//   const response = await fetch('http://localhost:8000/edit-expense/', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(editExpense),
//   });

//   const data = await response.json();
//   if (response.ok) {
//     alert('Expense updated!');
//     setEditExpense(null); // close modal
//     alert(data.error || 'Update failed');
//   }
// };




const handleSave = async () => {
  console.log('Sending to backend:', editExpense); // ✅ add this for debugging

  const response = await fetch('http://localhost:8000/expenses/edit/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(editExpense),
  });

  const data = await response.json();
  console.log('Response:', data); // ✅ add this for debugging

  if (response.ok) {
    onSave(editExpense);  // ✅ update table
    onCancel();           // ✅ close modal
  } else {
    alert(data.error || 'Update failed');
  }
};



  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
      }}
    >
      <div
        className="rounded shadow"
        style={{
          width: '500px',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        {/* Header Section */}
        {/* <div
          style={{
            backgroundColor: '#000000',
            padding: '14px 20px',
          }}
        >
          <h5
            className="fw-bold m-0"
            style={{
              color: darkMode ? '#000000' : '#ffffff',
              fontSize: '18px',
              textAlign: 'left',
              letterSpacing: '0.5px',
            }}
          >
            Edit Expense
          </h5>
        </div> */}


        <div
  className="d-flex justify-content-between align-items-center"
  style={{
    backgroundColor: '#000000',
    padding: '14px 20px',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  }}
>
  <h5
    className="fw-bold m-0"
    style={{
      color: darkMode ? '#000000' : '#ffffff',
      fontSize: '18px',
      letterSpacing: '0.5px',
    }}
  >
    Edit Expense
  </h5>

  <i
    className="bi bi-x-lg"
    onClick={onCancel}
    style={{
      cursor: 'pointer',
      color: darkMode ? '#000000' : '#ffffff',
      fontSize: '18px',
    }}
  ></i>
</div>

        {/* Body Section */}
        <div
          className="p-4"
          style={{
            backgroundColor: darkMode ? '#2C2C2C' : '#ffffff',
          }}
        >
          <div className="mb-3">
            <label className="form-label" style={{ color: darkMode ? '#ffffff' : '#000000' }}>Title</label>
            <input
              type="text"
              className="form-control"
              style={inputStyle}
              value={editExpense.title}
              onChange={(e) => setEditExpense({ ...editExpense, title: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: darkMode ? '#ffffff' : '#000000' }}>Amount</label>
            <input
              type="text"
              className="form-control"
              style={inputStyle}
              value={editExpense.amount}
              onChange={(e) => setEditExpense({ ...editExpense, amount: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: darkMode ? '#ffffff' : '#000000' }}>Category</label>
            <select
              className="form-select"
              style={inputStyle}
              value={editExpense.category}
              onChange={(e) => setEditExpense({ ...editExpense, category: e.target.value })}
            >
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label" style={{ color: darkMode ? '#ffffff' : '#000000' }}>Date</label>
            <input
              type="date"
              className="form-control"
              style={{
                ...inputStyle,
                colorScheme: darkMode ? 'dark' : 'light',
              }}
              placeholder="dd-mm-yyyy"
              value={editExpense.date}
              onChange={(e) => setEditExpense({ ...editExpense, date: e.target.value })}
            />
          </div>


          <div className="d-flex justify-content-between mt-4">
  <button
    className="btn"
    style={{
      backgroundColor: darkMode ? '#444444' : '#ffffff',
      color: darkMode ? '#ffffff' : '#000000',
      border: `1px solid ${darkMode ? '#666666' : '#cccccc'}`,
      padding: '8px 24px',
      borderRadius: '6px',
      fontWeight: '500',
    }}
    onClick={onCancel}
  >
    Cancel
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
    onClick={handleSave}
  >
    Save
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default EditExpense;