import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AddEmployee from './addEmployee'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddEmployee />
  </StrictMode>,
)