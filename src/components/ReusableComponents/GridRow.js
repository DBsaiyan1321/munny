import React from "react"; 
import "./GridRow.css";

const GridRow = ({ info }) => { 
    return (
        <div className="grid-row"> 
            <span>{info.level}</span>
            <span>{info.bonds}</span>
            <span>{info.largeCap}</span>
            <span>{info.midCap}</span>
            <span>{info.foreign}</span>
            <span>{info.smallCap}</span>
        </div>
    )
};

export default GridRow;