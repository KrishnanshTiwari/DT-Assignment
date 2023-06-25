import React from "react";
import "./box3.css";
function Box3() {
    return (
        <>
            <div>
                <h3 className="label">Title</h3>
                <input type="text" className="inp" />
            </div>

            <div>
                <h3 className="label">Content</h3>
                <div>
                   
                    <div>
                    <div className="header">
                        <ul>
                            <li>
                                <a href="#">File</a>
                            </li>
                            <li>
                                <a href="#">Edit</a>
                            </li>
                            <li>
                                <a href="#">View</a>
                            </li>
                            <li>
                                <a href="#">Insert</a>
                            </li>
                            <li>
                                <a href="#">Format</a>
                            </li>
                            <li>
                                <a href="#">Tools</a>
                            </li>
                            <li>
                                <a href="#">Table</a>
                            </li>
                            <li>
                                <a href="#">Help</a>
                            </li>
                        </ul>
                    </div>
                        <textarea name="" id="" cols="30" rows="10" className="inp2"></textarea>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Box3;
