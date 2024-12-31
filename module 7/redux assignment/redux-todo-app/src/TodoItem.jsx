// src/TodoItem.jsx
import React from 'react';

const TodoItem = ({ task, removeTask, toggleTaskCompletion }) => {
  return (
    <li
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >
      <span onClick={() => toggleTaskCompletion(task.id)}>
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
