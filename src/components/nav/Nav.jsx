import React from 'react'
import './nav.css'
import home from '../../images/home.png'
import logo from '../../images/logo.png'
import profile from '../../images/profile.png'
import tools from '../../images/tools.png'
function Nav() {
  return (
    <>
    <header className='nav'>
        <div className='navrow'>
          <a><img src={logo} alt="" /></a>
          <div>
            <img className='icon' src={home} alt="" />
            <img className='icon' src={tools} alt="" />
            <img className='icon' src={[profile]} alt="" />
          </div>
        </div>
      </header>
      </>
  )
}

export default Nav