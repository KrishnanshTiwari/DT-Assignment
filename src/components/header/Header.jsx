import React from 'react'
import './header.css'
function Header() {
  return (
    <>
     <div className='title'>
        <h1 className='heading'>Technical Project Management</h1>
        <button className='btn'>Submit Task</button>
      </div>
      <div className='description'>
        <h3>Explore the world of management </h3>
        <p>AS a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?</p>
      </div>
    </>
  )
}

export default Header