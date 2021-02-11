import React, { useState } from "react";
import "./SelectMenu.css"; 

const SelectMenu = ({options, onClick}) => { 
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
            <div className={`select-menu ${toggle}`} onClick={changeMenu}>
                <span className="select-menu__selected">Select Item</span>
                <ul className="select-list">
                    { 
                        options.map((option, i) => <li className="select-list__item" key={i} onClick={() => onClick(option)}>{option}</li>)
                    }
                </ul>
            </div>
        </>
    )
};

export default SelectMenu;