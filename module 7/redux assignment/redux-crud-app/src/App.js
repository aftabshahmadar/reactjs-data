// src/App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, updateTask } from './features/tasksSlice'; // Ensure path is correct


import './App.css';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const [newTask, setNewTask] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTask({ id: Date.now(), text: newTask }));
      setNewTask('');
    }
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  const handleEditTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    setEditTaskId(id);
    setEditText(task.text);
  };

  const handleUpdateTask = () => {
    if (editText.trim()) {
      dispatch(updateTask({ id: editTaskId, text: editText }));
      setEditTaskId(null);
      setEditText('');
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul>
  {tasks.map((task) => (
    <li key={task.id}>
      {editTaskId === task.id ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleUpdateTask}>Update</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => handleEditTask(task.id)}>Edit</button>
          <button onClick={() => handleRemoveTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  ))}
</ul>

    </div>
  );
}

export default App;
