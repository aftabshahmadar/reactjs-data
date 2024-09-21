import { useState } from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Home from './home'
import './App.css'

function App() {
  const [OpensidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!OpensidebarToggle)
  }
  return (
   <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar} />
    <Sidebar OpensidebarToggle={OpensidebarToggle} />
    <Home />
   </div>
  )
}

export default App
