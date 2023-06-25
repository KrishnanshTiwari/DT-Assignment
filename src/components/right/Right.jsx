import React, { useState } from 'react'
import './right.css'
export default function Right() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="right-box" >
        <div className="notice-board">
          <p>Notice Board</p>
        </div>
        <div className="white" >
        </div>
      </div>
    </>
  )
}