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
import RiskLevelSheetRow from "../ReusableComponents/RiskLevelSheetRow";

const HomePage = props => { 
    const [doughnut, setDoughnut] = useState(false);

    const levels = [1,2,3,4,5,6,7,8,9,10];

    const chartLabels = "level" in props.state.risk ? ["Bonds", "Large Cap", "Mid Cap", "Foreign", "Small Cap"] : ["Select Level", "Select Level", "Select Level", "Select Level", "Select Level"];
    const chartData = "level" in props.state.risk ? [props.state.risk.bonds, props.state.risk.largeCap, props.state.risk.midCap, props.state.risk.foreign, props.state.risk.smallCap,] : [20, 20, 20, 20, 20];
    return (
        <>
            <Nav />
            <div className="home-page"> 
                <p>Please Select A Risk Level For Your Investment Portfolio. 1 is low, 10 is high.</p>
                <SelectMenu options={levels} onClick={level => props.setRiskLevel(level)} />

                {!doughnut ? (
                    <div className="grid-container">
                        {levels.map(level => {
                            return (
                                <DropDisplay title={`Risk Level ${level}`} key={level} selected={level === props.state.risk.level}>
                                    <ul className="risk-level-sheet">
                                        <RiskLevelSheetRow category="Category" percentage="Percentage" style="risk-level-sheet-row--header" /> 
                                        <RiskLevelSheetRow category="Bonds" percentage={riskLevels[level].bonds} /> 
                                        <RiskLevelSheetRow category="Large Cap" percentage={riskLevels[level].largeCap} /> 
                                        <RiskLevelSheetRow category="Mid Cap" percentage={riskLevels[level].midCap} /> 
                                        <RiskLevelSheetRow category="Foreign" percentage={riskLevels[level].foreign} /> 
                                        <RiskLevelSheetRow category="Small Cap" percentage={riskLevels[level].smallCap} /> 
                                        {/* <li className="risk-level-sheet__row">
                                            <p>Category</p>
                                            <p>Percentage</p>
                                        </li>
                                        <li className="risk-level-sheet__row">
                                            <p>Bonds:</p>
                                            <p>{riskLevels[level].bonds}</p>
                                        </li>
                                        <li className="risk-level-sheet__row">
                                            <p>Large Cap:</p> 
                                            <p>{riskLevels[level].largeCap}</p>
                                        </li>
                                        <li className="risk-level-sheet__row">
                                            <p>Mid Cap:</p> 
                                            <p>{riskLevels[level].midCap}</p>
                                        </li>
                                        <li className="risk-level-sheet__row">
                                            <p>Foreign:</p>
                                            <p>{riskLevels[level].foreign}</p>
                                        </li>
                                        <li className="risk-level-sheet__row">
                                            <p>Small Cap:</p> 
                                            <p>{riskLevels[level].smallCap}</p>
                                        </li> */}
                                    </ul>
                                </DropDisplay>
                            )
                        })}
                    </div>
                ) : <DoughnutChart data={chartData} labels={chartLabels} />
                }

                <button onClick={() => setDoughnut(!doughnut)}>{doughnut ? "Sheet" : "Doughnut"}</button>
                <div>
                    {/* {levels.map(level => { 
                        return <Button key={level} onClick={() => props.setRiskLevel(level)} text={level} selected={level === props.risk.level} />
                    })} */}
                    <Link to="/calculator"><Button text="Continue" /></Link>
                </div>
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