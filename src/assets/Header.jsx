import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { WiMoonAltWaningCrescent1 } from "react-icons/wi";
 

function Header({OpenSidebar,toggleDarkMode}){
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
            <button onClick={toggleDarkMode} className='mode-toggle'>
          {/* {darkmode ? 'Normal' : 'Dark Mode'} */}
          <WiMoonAltWaningCrescent1 />
        </button>
        </div>
    </header>
  )
}

export default Header
