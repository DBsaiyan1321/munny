import React, { useState } from "react";
import "./SelectMenu.css"; 

const SelectMenu = ({options, onClick, defaultSelected}) => { 
    const [toggle, setToggle] = useState(null);
    const [selected, setSelected] = useState(defaultSelected || "Select Level")

    const changeMenu = () => { 
        if (toggle === "toggle") { 
            setToggle(null);
        } else { 
            setToggle("toggle");
        }
    }

    // window.addEventListener('click', function (e) {
    //     console.log(e);
    //     setToggle(null);
    // });

    return (
        <>
            <div className={`select-menu ${toggle}`} onClick={changeMenu}>
                <p className="select-menu__selected">{`${selected} ${toggle ? "v" : ">"}`}</p>
                <ul className="select-list">
                    { 
                        options.map((option, i) => <li className="select-list__item" key={i} onClick={() => { onClick(option); setSelected(option); }}>{option}</li>)
                    }
                </ul>
            </div>
        </>
    )
};

export default SelectMenu;