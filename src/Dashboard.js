import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <div className="welcome-card">
        <h1>Welcome to <b>Wellness Hub!</b></h1>
        <p className="subtitle">Your personal space to nurture your mental, emotional, and physical well-being.</p>
        <p>Explore the tools below to start your journey towards a healthier and happier you.</p>
      </div>
      <div className="feature-cards-row">
        <div className="feature-card clickable" onClick={() => navigate('/mood-calendar')} tabIndex={0} role="button">
          <div className="feature-img">600 × 400</div>
          <h2><span role="img" aria-label="mood">📅</span> Mood Calendar</h2>
          <p>Track your daily moods and visualize patterns on a calendar.</p>
        </div>
        <div className="feature-card clickable" onClick={() => navigate('/journal')} tabIndex={0} role="button">
          <div className="feature-img">600 × 400</div>
          <h2><span role="img" aria-label="journal">📝</span> Weekly Journal</h2>
          <p>Reflect on your week, organize thoughts with tags, and track mood trends.</p>
        </div>
      </div>
      <div className="feature-cards-row">
        <div className="feature-card">
          <div className="feature-img">600 × 400</div>
          <h2><span role="img" aria-label="meal">🍴</span> Daily Meal Log</h2>
          <p>Log your meals and calories, and track your daily nutritional intake.</p>
          <button className="feature-btn" onClick={() => navigate('/meal-log')}>Go to Daily Meal Log →</button>
        </div>
        <div className="feature-card">
          <div className="feature-img">600 × 400</div>
          <h2><span role="img" aria-label="breathing">🌬️</span> Breathing Exercise</h2>
          <p>Find calm with guided breathing animations to help you relax and focus.</p>
          <button className="feature-btn" onClick={() => navigate('/breathing')}>Go to Breathing Exercise →</button>
        </div>
      </div>
      <div className="ai-prompts-card">
        <h2>✨ AI Journal Prompts</h2>
        <p>Get personalized journal prompts based on your recent moods and tags to inspire your reflections.</p>
      </div>
    </div>
  );
}

export default Dashboard; 