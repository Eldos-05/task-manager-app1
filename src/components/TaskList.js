import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

function TaskList() {
  const { tasks } = useTaskContext();

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
