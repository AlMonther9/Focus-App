// src/components/Settings.js
import React, { useState } from 'react';

const Settings = ({ setInitialMinutes }) => {
  const [inputMinutes, setInputMinutes] = useState(25);

  const handleInputChange = (e) => {
    setInputMinutes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInitialMinutes(Number(inputMinutes));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Set Focus Duration (minutes):
        <input
          type="number"
          value={inputMinutes}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Set</button>
    </form>
  );
};

export default Settings;
