import React from 'react';
import './App.css';

function Journal() {
  return (
    <div className="dashboard">
      <div className="welcome-card">
        <h1><span role="img" aria-label="journal">📝</span> Weekly Journal</h1>
        <p>Document your thoughts, feelings, and experiences. Use tags to organize your entries and gain insights from AI-powered journal prompts. Track your mood trends over time.</p>
      </div>
      <div className="journal-content-row">
        <div className="journal-entries-card">
          <div className="journal-entries-header">
            <span className="journal-entries-title">Your Journal Entries</span>
            <button className="journal-new-entry-btn"><span style={{fontWeight: 'bold', fontSize: '1.1em'}}>＋</span> New Entry</button>
          </div>
          <input className="journal-search-input" placeholder="Search entries..." />
          <div className="journal-empty-msg">No journal entries yet. Click 'New Entry' to start!</div>
        </div>
        <div className="journal-inspiration-card">
          <div className="journal-inspiration-title">Need Inspiration?</div>
          <div className="journal-inspiration-desc">Generate an AI-powered journal prompt based on your recent moods and tags from the past week.</div>
          <button className="journal-generate-btn">Generate Prompt</button>
          <div className="journal-inspiration-hint">Add some journal entries with moods or tags from the past week for more personalized prompts.</div>
        </div>
      </div>
    </div>
  );
}

export default Journal; 