import React, { useState } from "react"; 
import Nav from "../Nav/Nav";
import Button from "../ReusableComponents/Button";
import { Link } from "react-router-dom"
import "./HomePage.css";
import { riskLevels } from "../../util/riskLevels";
import DoughnutChart from "../ReusableComponents/DoughnutChart";
import SelectMenu from "../ReusableComponents/SelectMenu";
import DropDisplay from "../ReusableComponents/DropDisplay";
import RiskLevelSheetRow from "../ReusableComponents/RiskLevelSheetRow";
import HomePageBox from "../ReusableComponents/HomePageBox";

const HomePage = props => { 
    const [doughnut, setDoughnut] = useState(false);

    const levels = [1,2,3,4,5,6,7,8,9,10];

    const chartLabels = "level" in props.state.risk ? ["Bonds", "Large Cap", "Mid Cap", "Foreign", "Small Cap"] : ["Select Level", "Select Level", "Select Level", "Select Level", "Select Level"];
    const chartData = "level" in props.state.risk ? [props.state.risk.bonds, props.state.risk.largeCap, props.state.risk.midCap, props.state.risk.foreign, props.state.risk.smallCap,] : [20, 20, 20, 20, 20];
    return (
        <>
            <Nav />
            <div className="home-page"> 
                <div className="hero"> 
                    <p className="hero-main">Money works. Not you.</p>
                    <p className="hero-other">Start by getting an investment portfolio recommendation today!</p>
                    <Button text="Get Started" />
                </div>
                <div className="home-page-second"> 
                    <HomePageBox icon="1" title="Risk Level" text="Pick the level of risk that you want to invest with. Don't worry, we have all of the information you need." />
                    <HomePageBox icon="2" title="Examine Choice" text="There is a guide on each risk level. You can either look at a chart or a simple display." />
                    <HomePageBox icon="3" title="Enter Amounts" text="Provide the amount of money you have allocated for each category of your portfolio." />
                    <HomePageBox icon="4" title="We Recommend" text="Based off of your inputs, our special code provides you with all of the knowledge you need." />
                </div>
                <div className="home-page-third">
                    <p className="home-page__header">Please Select A Risk Level For Your Investment Portfolio. 1 is low, 10 is high.</p>
                    <SelectMenu options={levels} onClick={level => props.setRiskLevel(level)} />
                    <Button text={ doughnut ? " Sheet" : "Doughnut"} onClick={() => setDoughnut(!doughnut)} />
                    {"level" in props.risk ? <Link to="/calculator"><Button text="Continue" /></Link> : null}
                </div>
                <div className="home-page__info"> 
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
                                        </ul>
                                    </DropDisplay>
                                )
                            })}
                        </div>
                    ) : <DoughnutChart data={chartData} labels={chartLabels} />
                    }
                </div>
            </div>
        </>
    )
};

export default HomePage;