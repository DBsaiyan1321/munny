import React, { useState } from "react";
import "./DropDisplay.css";

const DropDisplay = ({ options, title, children, selected }) => { 
    const [toggle, setToggle] = useState(selected ? "toggle" : null);
    
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
                <p className="drop-display__title" onClick={changeMenu}>{`${title} ${toggle ? "v" : ">"}`}</p>
                <div className="drop-display-info">
                    {children}
                </div>
            </div>
        </>
    )
};

export default DropDisplay;