import React, { useEffect, useRef, useState } from "react"; 
import Nav from "../Nav/Nav";
import Button from "../ReusableComponents/Button";
import { Link } from "react-router-dom"
import "./HomePage.css";
import { riskLevels } from "../../util/riskLevels";
import GridRow from "../ReusableComponents/GridRow";
import DoughnutChart from "../ReusableComponents/DoughnutChart";
import SelectMenu from "../ReusableComponents/SelectMenu";
import DropDisplay from "../ReusableComponents/DropDisplay";

const HomePage = props => { 
    const [doughnut, setDoughnut] = useState(false);

    const levels = [1,2,3,4,5,6,7,8,9,10];

    const chartLabels = "level" in props.state.risk ? ["Bonds", "Large Cap", "Mid Cap", "Foreign", "Small Cap"] : ["Select Level", "Select Level", "Select Level", "Select Level", "Select Level"];
    const chartData = "level" in props.state.risk ? [props.state.risk.bonds, props.state.risk.largeCap, props.state.risk.midCap, props.state.risk.foreign, props.state.risk.smallCap,] : [20, 20, 20, 20, 20];
    return (
        <>
            <Nav />
            <div className="home-page"> 
                <button onClick={() => setDoughnut(!doughnut)}>{doughnut ? "Sheet" : "Doughnut"}</button>
                <div>
                    {/* {levels.map(level => { 
                        return <Button key={level} onClick={() => props.setRiskLevel(level)} text={level} selected={level === props.risk.level} />
                    })} */}
                    <Link to="/calculator"><Button text="Continue" /></Link>
                </div>

                <p>Please Select A Risk Level For Your Investment Portfolio. 1 is low, 10 is high</p>
                <SelectMenu options={levels} onClick={level => props.setRiskLevel(level)} />

                { !doughnut ? ( 
                        <>
                            {levels.map(level => {
                                return ( 
                                    <DropDisplay title={`Risk Level ${level}`} key={level}>
                                        <ul>    
                                            <li>Bonds: {riskLevels[level].bonds}%</li>
                                            <li>Large Cap: {riskLevels[level].largeCap}%</li>
                                            <li>Mid Cap: {riskLevels[level].midCap}%</li>
                                            <li>Foreign: {riskLevels[level].foreign}%</li>
                                            <li>Small Cap: {riskLevels[level].smallCap}%</li>
                                        </ul>
                                    </DropDisplay>
                                )
                            })}
                        </>
                    ) : <DoughnutChart data={chartData} labels={chartLabels} />
                }


                {/* <div className="grid-container">
                { !doughnut ? <div className="flexbox">
                        <GridRow info={{ level: "Risk", bonds: "Bonds %", largeCap: "Large Cap %", midCap: "Mid Cap %", foreign: "Foreign %", smallCap: "Small Cap %" }} />
                        {levels.map(level => {
                            return <GridRow key={level} info={riskLevels[level]} />
                        })}
                </div> : <DoughnutChart data={chartData} labels={chartLabels} />
                } */}
            </div>
        </>
    )
};

export default HomePage;