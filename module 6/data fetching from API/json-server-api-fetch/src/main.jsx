import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Jsonserverdatafetch from './jsonserverdatafetch'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Jsonserverdatafetch />
  </StrictMode>,
)
