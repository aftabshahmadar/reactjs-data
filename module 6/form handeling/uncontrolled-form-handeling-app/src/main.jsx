import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Addemployee from './Addemployee'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Addemployee />
  </StrictMode>,
)