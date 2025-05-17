import React from 'react';
import './App.css';

function MealLog() {
  const today = 'May 17th, 2025';
  return (
    <div className="dashboard">
      <div className="welcome-card">
        <h1><span role="img" aria-label="meal">🍴</span> Daily Meal Log</h1>
        <p>Keep track of your meals and calorie intake throughout the day. Set a daily goal and see your progress with a visual summary.</p>
      </div>
      <div className="meal-log-content-row">
        <div className="meal-log-left-col">
          <div className="meal-log-entry-card">
            <h2>Log a Meal for {today}</h2>
            <div className="meal-log-form-label">Meal Name</div>
            <input className="meal-log-input" placeholder="e.g., Chicken Salad, Apple" />
            <div className="meal-log-form-label">Calories (kcal)</div>
            <input className="meal-log-input" type="number" min="0" defaultValue="0" />
            <button className="meal-log-add-btn">Add Meal</button>
          </div>
          <div className="meal-log-goal-card">
            <h3>Daily Calorie Goal</h3>
            <div className="meal-log-form-label">Set your goal (calories):</div>
            <input className="meal-log-input" type="number" min="0" defaultValue="2000" />
          </div>
        </div>
        <div className="meal-log-right-col">
          <div className="meal-log-summary-card">
            <h2>Today's Summary ({today})</h2>
            <div className="meal-log-donut-placeholder">
              {/* Placeholder for donut chart */}
              <div className="meal-log-donut"></div>
            </div>
            <div className="meal-log-summary-details">
              <span style={{ color: '#6c6', fontWeight: 600 }}>● Consumed: 0 kcal</span> &nbsp;&nbsp;
              <span style={{ color: '#cc6', fontWeight: 600 }}>● Remaining: 2,000 kcal</span>
            </div>
            <div className="meal-log-summary-main">
              <span style={{ fontWeight: 700, fontSize: '1.5rem' }}>0</span> <span style={{ fontWeight: 600 }}>kcal consumed</span>
            </div>
            <div className="meal-log-summary-goal">
              Goal: 2,000 kcal (0%)
            </div>
            <div className="meal-log-summary-remaining">
              <span style={{ color: '#2ecc40', fontWeight: 600 }}>2,000 kcal remaining to reach your goal.</span>
            </div>
          </div>
          <div className="meal-log-logged-card">
            <h3>Logged Meals</h3>
            <div className="meal-log-empty-msg">No meals logged for today yet.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealLog; 