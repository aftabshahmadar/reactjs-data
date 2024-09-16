import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<App />
  </StrictMode>,
)
