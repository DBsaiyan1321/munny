import React from "react";
import "./Button.css";

const Button = ({ onClick, text, selected, textStyle, buttonStyle }) => { 
    return (
        <button 
            className={selected ? "risk-button risk-button--selected" : "risk-button"}
            // style={buttonStyle, textStyle} 
            onClick={onClick}
        >
            {text}
        </button>
    )
};

export default Button;