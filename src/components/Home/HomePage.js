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
    const renders = useRef(1);

    useEffect(() => { 
        renders.current = renders.current + 1;
    })

    const levels = [1,2,3,4,5,6,7,8,9,10];

    const chartLabels = "level" in props.state.risk ? ["Bonds", "Large Cap", "Mid Cap", "Foreign", "Small Cap"] : ["Select Level", "Select Level", "Select Level", "Select Level", "Select Level"];
    const chartData = "level" in props.state.risk ? [props.state.risk.bonds, props.state.risk.largeCap, props.state.risk.midCap, props.state.risk.foreign, props.state.risk.smallCap,] : [20, 20, 20, 20, 20];
    return (
        <>
            <Nav />
            <div>
                {levels.map(level => { 
                    return <Button key={level} onClick={() => props.setRiskLevel(level)} text={level} selected={level === props.risk.level} />
                })}
                <Link to="/calculator"><Button text="Continue" /></Link>
            </div>

            <SelectMenu options={levels} onClick={level => props.setRiskLevel(level)} />
            { !doughnut ? ( 
                <DropDisplay title={1}>
                    {levels.map(level => {
                        return <GridRow key={level} info={riskLevels[level]} />
                    })}
                </DropDisplay>
                ) : <DoughnutChart data={chartData} labels={chartLabels} />
            }


            {/* <div className="grid-container"> */}
            { !doughnut ? <div className="flexbox">
                    <GridRow info={{ level: "Risk", bonds: "Bonds %", largeCap: "Large Cap %", midCap: "Mid Cap %", foreign: "Foreign %", smallCap: "Small Cap %" }} />
                    {levels.map(level => {
                        return <GridRow key={level} info={riskLevels[level]} />
                    })}
            </div> : <DoughnutChart data={chartData} labels={chartLabels} />
            }
            <button onClick={() => setDoughnut(!doughnut)}>{ doughnut ? "Sheet" : "Dougnut"}</button>
            <div>{renders.current}</div>
        </>
    )
};

export default HomePage;