import React, {useState } from 'react'
import './left.css'
export default function Left() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="left-box"  onClick={() => setOpen(!open)}>
        <button className="black-box" >
        </button>


        <div className="white-box" >
          <div className="border" ></div>
          <span className='span'>1</span>
        </div>
      </div>
      {
        open &&
        <div className="big-box"  onClick={() => setOpen(false)}>
          <div className="black-box1">
            <p className='p'>Journey Board</p>
          </div>
          <p className="black-box1"></p>
          <div className="white-box">
            <ul className='main'>
              <li>Explore the world of management </li>
            </ul>
            <ul className='point'>
              <li>Threadbuild</li>
              <li>Structure your pointers</li>
              <li>4SA Method</li>
            </ul>
          </div>
        </div>
      }
    </>
  )
}