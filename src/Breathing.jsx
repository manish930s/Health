import React, { useState } from 'react';
import './App.css';

function Breathing() {
  const [isBreathing, setIsBreathing] = useState(false);

  return (
    <div className="dashboard">
      <div className="welcome-card">
        <h1><span role="img" aria-label="breathing">🌬️</span> Guided Breathing</h1>
        <p>Follow the animation to guide your breath. This simple exercise can help reduce stress and increase mindfulness. Find a comfortable position and begin.</p>
      </div>
      <div className="breathing-center-row">
        <div className="breathing-card">
          <div className={`breathing-circle${isBreathing ? ' breathing-animate' : ''}`}></div>
          <div className="breathing-label">Press Start</div>
          <button className="breathing-btn" onClick={() => setIsBreathing((b) => !b)}>
            {isBreathing ? 'Stop' : 'Start'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Breathing; 