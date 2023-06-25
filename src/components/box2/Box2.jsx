import React from 'react'
import './box2.css'
import up from '../../images/up.png'
function Box2() {
    return (
        <>
            <div className="container">



                <div className="sub">
                    <div className="sub1">
                        
                        <label>Sub Thread 1</label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter Text Here"
                        />
                    </div>
                    <div className="sub2">
                        <label>Sub Interpretation 2</label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter Text Here"
                        />
                    </div>
                </div>

                <div className="select">
                    <select name="select" id="select">
                        <option value="default" defaultValue>
                            Select Category
                        </option>
                    </select>
                    <select name="select" id="select">
                        <option value="default" defaultValue>
                            Select Process
                        </option>
                    </select>
                </div>

                <button className="btn_select btn btn-primary">+ Sub Thread</button>


                <div className="sum">
                    <label>Summary For Thread A</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter Text Here"
                    />
                </div>


                <div className="last">
                    <div className="credit">
                        Thread Credit &nbsp;&nbsp;
                    </div>
                    <div className="credit2">
                        <select name="select" id="select">
                            <option value="default" defaultValue>
                                Select Emotion
                            </option>
                        </select>
                        <button className="btn btn-primary">+ New Thread</button>
                        <br />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Box2