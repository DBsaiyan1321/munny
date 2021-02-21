import React from "react";
import "./CalculatorInputs.css";

const CalculatorInputs = ({ label, onChange, value }) => { 
    return (
        <label className="current-amounts__label">
            {label}: $
            <input className="current-amounts__input" onChange={onChange} value={value} type="number" />
        </label>
    )
};

export default CalculatorInputs;