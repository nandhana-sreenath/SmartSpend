// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import SignupSuccess from './pages/SignupSuccess';
// import Onboarding from './pages/Onboarding';
// import Dashboard from './pages/Dashboard';
// import Expenses from './pages/Expenses';
// import Budget from './pages/Budget';  
// import Settings from './pages/Settings';
// import Profile from './pages/Profile';

// function App() {
//   return (
//      <Router>
//       <Routes>
//         {/* Default route — redirects to /login */}
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/signupsuccess" element={<SignupSuccess />} />
//         <Route path="/onboarding" element={<Onboarding />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/expenses" element={<Expenses />} />
//         <Route path="/budget" element={<Budget />} />
//         <Route path="/settings" element={<Settings />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ThemeProvider } from './context/ThemeContext'; // ✅ Import ThemeProvider


import Login from './pages/Login';
import Signup from './pages/Signup';
import SignupSuccess from './pages/SignupSuccess';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Budget from './pages/Budget';
import Settings from './pages/Settings';
import Profile from './pages/Profile';

function App() {
  return (
    <ThemeProvider> {/* ✅ Wrap entire app */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupsuccess" element={<SignupSuccess />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;