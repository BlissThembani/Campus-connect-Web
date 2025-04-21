// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import BookingsPage from './pages/BookingsPage';
import TimetablePage from './pages/TimetablePage';
import ReportMaintenancePage from './pages/ReportMaintenancePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

// These would be implemented later
const StudentDashboard = () => <div>Student Dashboard</div>;
const LecturerDashboard = () => <div>Lecturer Dashboard</div>;
const AdminDashboard = () => <div>Admin Dashboard</div>;

const App = () => {
  // State for authentication would go here
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <GlobalStyle />
      <div className="app">
        {/* Header is displayed on all pages except auth pages */}
        <Routes>
          <Route path="/login" element={null} />
          <Route path="/signup" element={null} />
          <Route path="/forgot-password" element={null} />
          <Route path="*" element={<Header />} />
        </Routes>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bookings" element={<BookingsPage />} />
            <Route path="/timetable" element={<TimetablePage />} />
            <Route path="/maintenance" element={<ReportMaintenancePage />} />

            {/* Authentication Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Dashboard Routes */}
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/lecturer-dashboard" element={<LecturerDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>

        {/* Footer is displayed on all pages except auth pages */}
        <Routes>
          <Route path="/login" element={null} />
          <Route path="/signup" element={null} />
          <Route path="/forgot-password" element={null} />
          <Route path="*" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
