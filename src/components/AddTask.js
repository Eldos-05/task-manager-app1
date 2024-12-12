import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

function AddTask() {
  const [task, setTask] = useState('');
  const { addTask } = useTaskContext();

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
