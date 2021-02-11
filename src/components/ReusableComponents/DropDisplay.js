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
            <div className={`drop-display ${toggle}`} onClick={changeMenu}>
                <span className="drop-display__title">{title}</span>
                {/* <ul className="drop-display-info">
                    {
                        options.map((option, i) => <li className="drop-display-info__item" key={i}>{option}</li>)
                    }
                </ul> */}
                <div className="drop-display-info">
                    {children}
                </div>
            </div>
            <p>oaeinrogaein</p>
        </>
    )
};

export default DropDisplay;