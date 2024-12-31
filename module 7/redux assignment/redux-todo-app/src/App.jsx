// src/App.jsx
import React from 'react';
import './App.css';  // Import the CSS file to apply styles
import TodoList from './TodoList';

const App = () => {
  return (
    <div>
      <h1>To-Do List</h1>
      <TodoList />
    </div>
  );
};

export default App;
