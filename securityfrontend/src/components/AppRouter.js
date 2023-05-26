import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; // Import the login component
// Import other components for routing if needed

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
