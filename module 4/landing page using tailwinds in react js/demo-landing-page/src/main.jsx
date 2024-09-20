import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layout'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
)