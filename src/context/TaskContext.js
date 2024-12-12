import React, { createContext, useContext } from 'react';
import { useTaskManager } from '../hooks/useTaskManager';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const { tasks, addTask, deleteTask } = useTaskManager();

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
