// src/pages/Focus.js
import React, { useState } from 'react';
import Timer from '../components/Timer';
import Settings from '../components/Settings';
import Music from '../components/Music';

const Focus = () => {
  const [initialMinutes, setInitialMinutes] = useState(25);

  return (
    <div>
      <h1>Focus Mode</h1>
      <Settings setInitialMinutes={setInitialMinutes} />
      <Timer initialMinutes={initialMinutes} />
      <Music />
    </div>
  );
};

export default Focus;
