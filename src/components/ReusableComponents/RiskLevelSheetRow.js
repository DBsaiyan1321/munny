import React from "react";
import "./RiskLevelSheetRow.css";

const RiskLevelSheetRow = ({ category, percentage, style}) => { 
    return ( 
        <li className={`risk-level-sheet__row ${style ? style : ""}`}>
            <p>{category}</p>
            <p>{percentage}</p>
        </li>
    )
};

export default RiskLevelSheetRow;