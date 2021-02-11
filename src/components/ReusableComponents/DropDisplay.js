import React, { useState } from "react";
import "./DropDisplay.css";

const DropDisplay = ({ options, title, children }) => { 
    const [toggle, setToggle] = useState(null);

    const changeMenu = () => {
        if (toggle === "toggle") {
            setToggle(null);
        } else {
            setToggle("toggle");
        }
    }

    return (
        <>
            <div className={`drop-display ${toggle}`}>
                <span className="drop-display__title" onClick={changeMenu}>{`${title} ${toggle ? "v" : ">"}`}</span>
                <div className="drop-display-info">
                    {children}
                </div>
            </div>
        </>
    )
};

export default DropDisplay;