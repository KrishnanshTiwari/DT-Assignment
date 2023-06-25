import React from 'react'
import meeting from '../../images/meeting.png'
import question from '../../images/question.png'
import schedule from '../../images/schedule.png'
import './corner.css'
function Corner() {
  return (
    <>
    <div className="blue-circle1">
                <img src={question} alt=""/>
            </div>
            <div className="blue-circle2">
                <img src={meeting} alt=""/>
            </div>
            <div className="blue-circle3">
                <img src={schedule} alt=""/>
            </div>
    </>
  )
}

export default Corner