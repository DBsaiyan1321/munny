import React from "react"; 
import Nav from "../Nav/Nav";
import Button from "../ReusableComponents/Button";
import { Link, Redirect } from "react-router-dom"
import "./HomePage.css";
import { riskLevels } from "../../util/riskLevels";
import GridRow from "../ReusableComponents/GridRow";

const HomePage = props => { 
    const levels = [1,2,3,4,5,6,7,8,9,10];
    return (
        <>
            <Nav />
            <div>
                {levels.map(level => { 
                    return <Button key={level} onClick={() => props.setRiskLevel(level)} text={level} selected={level === props.risk.level} />
                })}
                <Link to="/calculator"><Button text="Continue" /></Link>
            </div>
            {/* <div className="grid-container"> */}
            <div className="flexbox">
                <GridRow info={{ level: "Risk", bonds: "Bonds %", largeCap: "Large Cap %", midCap: "Mid Cap %", foreign: "Foreign %", smallCap: "Small Cap %"}} />
                {levels.map(level => { 
                    return <GridRow key={level} info={riskLevels[level]} />
                })}
            </div>
        </>
    )
};

export default HomePage;