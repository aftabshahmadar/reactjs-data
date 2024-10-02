import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Employees from './App' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Employees />
  </StrictMode>,
)
