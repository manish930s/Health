import React, { useState } from 'react';
import './App.css';

const moods = [
  { emoji: '🙂', label: 'Happy' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '😔', label: 'Sad' },
  { emoji: '😡', label: 'Angry' },
  { emoji: '🥳', label: 'Excited' },
];

function MoodCalendar() {
  const [selectedMood, setSelectedMood] = useState(null);
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="dashboard">
      <div className="welcome-card">
        <h1>Mood Calendar</h1>
        <p>Track your daily mood. Select an emoji that best represents how you feel today. Your moods will be displayed on the calendar below, helping you visualize patterns over time.</p>
      </div>
      <div className="mood-calendar-content">
        <div className="mood-today-card">
          <h2>How are you feeling on {today}?</h2>
          <div className="mood-emoji-row">
            {moods.map((mood) => (
              <button
                key={mood.label}
                className={`mood-emoji-btn${selectedMood === mood.label ? ' selected' : ''}`}
                onClick={() => setSelectedMood(mood.label)}
                aria-label={mood.label}
              >
                <span style={{ fontSize: '2rem' }}>{mood.emoji}</span>
                <div className="mood-emoji-label">{mood.label}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="mood-calendar-card">
          <h2>Your Mood Journey</h2>
          <div className="calendar-placeholder">
            {/* Replace with real calendar later */}
            <div className="calendar-header">May 2025</div>
            <div className="calendar-grid">
              {/* Render a simple 7x5 grid for now */}
              {[...Array(35)].map((_, i) => (
                <div className="calendar-cell" key={i}>{i % 7 === 0 ? <b>{i/7+1}</b> : ''}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoodCalendar; 