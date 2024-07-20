// src/components/TaskList.js
import React, { useState } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      name: taskName,
    };
    setTasks([...tasks, newTask]);
    setTaskName('');
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
