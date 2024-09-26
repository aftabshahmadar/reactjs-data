import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';

function App() {
  return (
    <div>
      <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">My React App</h1>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
