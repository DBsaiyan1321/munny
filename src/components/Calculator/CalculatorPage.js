import React, { useEffect, useState } from "react"; 
import "./CalculatorPage.css";
import Nav from "../Nav/Nav";
import DropDisplay from "../ReusableComponents/DropDisplay";
import Button from "../ReusableComponents/Button";
import RiskLevelSheetRow from "../ReusableComponents/RiskLevelSheetRow";
import { getTotal, isNegative, findMinimumTransfers } from "../../util/calculatorUtil";
import { Redirect } from "react-router-dom";
import CalculatorInputs from "../ReusableComponents/CalculatorInputs";

const CalculatorPage = ({ risk, calculator, handleInputs, removeNewAmounts }) => { 
    const [bonds, setBonds] = useState(calculator.inputs.bonds || 20);
    const [midCap, setMidCap] = useState(calculator.inputs.midCap || 20);
    const [largeCap, setLargeCap] = useState(calculator.inputs.largeCap || 20);
    const [foreign, setForeign] = useState(calculator.inputs.foreign || 20);
    const [smallCap, setSmallCap] = useState(calculator.inputs.smallCap || 20);
    const [error, setError] = useState("");

    const inputs = {
        bonds,
        midCap,
        largeCap,
        foreign,
        smallCap
    };

    let transfers = [];
    if ("bonds" in calculator.differences) transfers = findMinimumTransfers(calculator.differences);

    const validateInputs = () => {
        for (const input in inputs) {
            if (inputs[input] === "") return false;
            const value = parseFloat(inputs[input] * 1);
            if (isNaN(value) || isNegative(value)) return false;
        }

        setError("");
        return true;
    }

    useEffect(() => { 
        return () => {
            removeNewAmounts();
        }
    }, [])

    return !risk.level ? <Redirect to="/" /> : (
        <>
            <Nav />
            <div className="calculator-page">
                
                <h1>Calculator Page</h1>
                <div className="calculator-user-info"> 
                    <div className="calculator-slot"> 
                        <p>This is the risk level you chose in the previous step. Your results with be based off of the percentages that correspond with the risk level.</p>
                        <DropDisplay title={`Risk Level ${risk.level}`} selected>
                            <ul className="risk-level-sheet">
                                <RiskLevelSheetRow category="Category" percentage="Percentage" style="risk-level-sheet-row--header" />
                                <RiskLevelSheetRow category="Bonds" percentage={risk.bonds} />
                                <RiskLevelSheetRow category="Large Cap" percentage={risk.largeCap} />
                                <RiskLevelSheetRow category="Mid Cap" percentage={risk.midCap} />
                                <RiskLevelSheetRow category="Foreign" percentage={risk.foreign} />
                                <RiskLevelSheetRow category="Small Cap" percentage={risk.smallCap} />
                            </ul>
                        </DropDisplay>
                    </div>

                    <div className="calculator-slot">
                        <DropDisplay title="Current Amounts" selected>
                            <div className="current-amounts">
                                <CalculatorInputs label="Bonds" onChange={e => setBonds(e.currentTarget.value)} value={bonds} />
                                <CalculatorInputs label="Mid Cap" onChange={e => setMidCap(e.currentTarget.value)} value={midCap} />
                                <CalculatorInputs label="Large Cap" onChange={e => setLargeCap(e.currentTarget.value)} value={largeCap} />
                                <CalculatorInputs label="Foreign" onChange={e => setForeign(e.currentTarget.value)} value={foreign} />
                                <CalculatorInputs label="Small Cap" onChange={e => setSmallCap(e.currentTarget.value)} value={smallCap} />
                                <p className="error-message">{error}</p>
                            </div>
                        </DropDisplay>
                    </div>
                </div>

                <div className="calculator-results"> 
                    {"level" in risk && Object.keys(calculator.inputs).length > 0 && Object.keys(calculator.differences).length > 0 ? <>
                        <DropDisplay title="Total" selected>
                            <p className="calculator-page__info">{getTotal(calculator.inputs)}</p>
                        </DropDisplay>

                        <DropDisplay title="New Amounts" selected>
                            <div className="calculator-page__info">
                                <div>Bonds: <p className="calculator-blue">{calculator.newAmounts.bonds}</p></div>
                                <div>Mid Cap: <p className="calculator-blue">{calculator.newAmounts.midCap}</p></div>
                                <div>Large Cap: <p className="calculator-blue">{calculator.newAmounts.largeCap}</p></div>
                                <div>Foreign: <p className="calculator-blue">{calculator.newAmounts.foreign}</p></div>
                                <div>Small Cap: <p className="calculator-blue">{calculator.newAmounts.smallCap}</p></div>
                            </div>
                        </DropDisplay>

                        <DropDisplay title="Differences" selected>
                            <div className="calculator-page__info">
                                <div>Bonds: <p className={isNegative(calculator.differences.bonds) ? "calculator-red" : "calculator-green"}>{calculator.differences.bonds}</p></div>
                                <div>Mid Cap: <p className={isNegative(calculator.differences.midCap) ? "calculator-red" : "calculator-green"}>{calculator.differences.midCap}</p></div>
                                <div>Large Cap: <p className={isNegative(calculator.differences.largeCap) ? "calculator-red" : "calculator-green"}>{calculator.differences.largeCap}</p></div>
                                <div>Foreign: <p className={isNegative(calculator.differences.foreign) ? "calculator-red" : "calculator-green"}>{calculator.differences.foreign}</p></div>
                                <div>Small Cap: <p className={isNegative(calculator.differences.smallCap) ? "calculator-red" : "calculator-green"}>{calculator.differences.smallCap}</p></div>
                            </div>
                        </DropDisplay>

                        <DropDisplay title="Recommended Transfers" selected>
                            <div className="calculator-page__info">
                                {transfers.map((transfer, i) => <p key={i} className="calculator-transfers">{transfer}</p>)}
                            </div>
                        </DropDisplay>
                    </> : null
                    }
                </div>

                <Button onClick={() => { 
                    validateInputs() ? handleInputs(inputs) : setError("Inputs must be 0 or a positive number");
                }} text="Calculate" />
            </div>
        </>
    )
};

export default CalculatorPage;