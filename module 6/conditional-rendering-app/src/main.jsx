import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './IfApp'
// import Ternaryapp from './ternaryapp'
// import NestedifApp from './nestedifApp'
// import Loopapp from './loopapp'
import IfelseifApp from './ifelseifApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Ternaryapp /> */}
    {/* <NestedifApp /> */}
    {/* <Loopapp /> */}
    <IfelseifApp />
  </StrictMode>
)
