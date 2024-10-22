import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Taskinput from './Taskinput';
import ViewTask from './ViewTask';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Taskinput />} />  {/* Default route */}
        <Route path="/view-task" element={<ViewTask />} />
      </Routes>
    </Router>
  </StrictMode>
);
