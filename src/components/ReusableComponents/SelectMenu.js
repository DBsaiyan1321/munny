import React, { useState } from "react";
import "./SelectMenu.css"; 
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

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
                <div className="select-menu__selected">
                    <p>{selected}</p>
                    {toggle ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                </div>
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