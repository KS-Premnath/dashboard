import { useState } from 'react'
import './App.css'
import Header from './assets/Header'
import Sidebar from './assets/Sidebar'
import Home from './assets/Home'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const [darkmode,setDarkmode]=useState()


  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  } 
  const appStyle = {
    backgroundColor: darkmode ? ' #1d2634' : '#fff',
    color: darkmode ? '#fff' : ' #1d2634',
  };

  return (
    <div style={appStyle} className='grid-container'>
      <Header OpenSidebar={OpenSidebar} darkmode={darkmode} toggleDarkMode={toggleDarkMode} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} darkmode={darkmode} />  
      <Home darkmode={darkmode} />
    </div>
  )
}

export default App