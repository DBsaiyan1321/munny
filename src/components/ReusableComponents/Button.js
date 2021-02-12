import React from "react";
import "./Button.css";

const Button = ({ onClick, text, textStyle, buttonStyle }) => { 
    return (
        <button 
            className={"risk-button"}
            onClick={onClick}
        >
            {text}
        </button>
    )
};

export default Button;