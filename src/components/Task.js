// src/components/Task.js
import React from 'react';

const Task = ({ task, onDelete }) => (
  <div>
    <span>{task.name}</span>
    <button onClick={() => onDelete(task.id)}>Delete</button>
  </div>
);

export default Task;
