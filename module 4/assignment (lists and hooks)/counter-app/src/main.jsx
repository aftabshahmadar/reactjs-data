import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './counter'; // Make sure the path is correct
import './Style.css'; // Import your CSS file

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
