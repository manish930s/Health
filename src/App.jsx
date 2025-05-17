import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Dashboard from './Dashboard.jsx';
import MoodCalendar from './MoodCalendar.jsx';
import Journal from './Journal.jsx';
import MealLog from './MealLog.jsx';
import Breathing from './Breathing.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/mood-calendar" element={<MoodCalendar />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/meal-log" element={<MealLog />} />
            <Route path="/breathing" element={<Breathing />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 