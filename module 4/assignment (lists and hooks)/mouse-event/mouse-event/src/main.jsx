import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MoveOnMouse from './mousemove'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <MoveOnMouse />
  </StrictMode>,
)
