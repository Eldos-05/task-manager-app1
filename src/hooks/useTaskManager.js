import { useState } from 'react';

export function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return {
    tasks,
    addTask,
    deleteTask
  };
}
