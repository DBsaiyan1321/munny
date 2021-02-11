import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import "./DropDisplay.css";

const DropDisplay = ({ title, children, selected }) => { 
    const [toggle, setToggle] = useState(selected ? "toggle" : "");
    
    const changeMenu = () => {
        if (toggle === "toggle") {
            setToggle("");
        } else {
            setToggle("toggle");
        }
    }

    return (
        <>
            <div className={`drop-display ${toggle}`}>
                <div className="drop-display__title" onClick={changeMenu}>
                    <p>{title}</p>  
                    {toggle ? <TiArrowSortedUp /> : <TiArrowSortedDown /> }
                </div>
                <div className="drop-display-info">
                    {children}
                </div>
            </div>
        </>
    )
};

export default DropDisplay;