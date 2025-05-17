import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-logo">💙</span>
        <span className="sidebar-title">Wellness Hub</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
              <span role="img" aria-label="dashboard">🗂️</span> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/mood-calendar" className={({ isActive }) => isActive ? 'active' : ''}>
              <span role="img" aria-label="mood">📅</span> Mood Calendar
            </NavLink>
          </li>
          <li>
            <NavLink to="/journal" className={({ isActive }) => isActive ? 'active' : ''}>
              <span role="img" aria-label="journal">📝</span> Journal
            </NavLink>
          </li>
          <li>
            <NavLink to="/meal-log" className={({ isActive }) => isActive ? 'active' : ''}>
              <span role="img" aria-label="meal">🍴</span> Meal Log
            </NavLink>
          </li>
          <li>
            <NavLink to="/breathing" className={({ isActive }) => isActive ? 'active' : ''}>
              <span role="img" aria-label="breathing">🌬️</span> Breathing
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-user">
        <div className="user-avatar">WH</div>
        <div className="user-info">
          <div className="user-name">Wellness User</div>
          <div className="user-email">user@example.com</div>
        </div>
      </div>
      <div className="sidebar-settings">
        <div className="settings-link"><span role="img" aria-label="settings">⚙️</span> Settings</div>
        <div className="logout-link"><span role="img" aria-label="logout">↩️</span> Log Out</div>
      </div>
    </aside>
  );
}

export default Sidebar; 