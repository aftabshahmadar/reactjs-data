import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DictionaryApp from './components/DictionaryApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DictionaryApp />
  </StrictMode>,
)
