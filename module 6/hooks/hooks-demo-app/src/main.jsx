import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import Usestate from './usestate'
import Useeffect from './useeffect'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Usestate /> */}
    <Useeffect />s
  </StrictMode>,
)
