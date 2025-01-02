// src/App.jsx

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './actions/themeActions';

function App() {
  const theme = useSelector((state) => state.theme); // Get current theme from Redux store
  const dispatch = useDispatch(); // Get dispatch function from Redux
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Update the body class whenever the theme changes
  useEffect(() => {
    document.body.className = theme; // Set the body class to the current theme (light or dark)
  }, [theme]);

  // Handle form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password') {
      alert('Login successful');
      // Clear the form and handle success (you can dispatch an action for authenticated state here)
      setEmail('');
      setPassword('');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="app">
      <header>
        <h1>React Redux Theme Toggle with Login</h1>
        <button
          className="theme-toggle"
          onClick={() => dispatch(toggleTheme())} // Dispatch action to toggle theme
        >
          Toggle Theme
        </button>
      </header>

      <main>
        <h2>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h2>
        <form className={`login-form ${theme}`}>
          <h3>Login</h3>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
