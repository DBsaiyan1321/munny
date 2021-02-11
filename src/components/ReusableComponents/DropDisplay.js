import React, { useEffect, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import "./DropDisplay.css";

const DropDisplay = ({ title, children, selected, titleClasses, bodyClasses }) => { 
    const [toggle, setToggle] = useState(selected ? "toggle" : "");

    useEffect(() => { 
        if (selected && toggle === "") setToggle("toggle");
    }, [selected])

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
                <div className={`drop-display__title ${titleClasses}`} onClick={changeMenu}>
                    <p>{title}</p>  
                    {toggle ? <TiArrowSortedUp /> : <TiArrowSortedDown /> }
                </div>
                <div className={`drop-display-info ${bodyClasses}`}>
                    {children}
                </div>
            </div>
        </>
    )
};

export default DropDisplay;