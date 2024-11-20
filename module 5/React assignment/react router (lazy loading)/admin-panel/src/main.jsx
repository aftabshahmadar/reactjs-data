import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
 import App from './App.jsx'
//  import Header from './header.jsx'
//  import Home from './home.jsx'
//  import Sidebar from './sidebar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Header />
    <Home />
    <Sidebar /> */}
  </StrictMode>,
)
