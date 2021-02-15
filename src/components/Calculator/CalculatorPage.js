import React, { useState } from "react"; 
import "./CalculatorPage.css";
import Nav from "../Nav/Nav";
import DropDisplay from "../ReusableComponents/DropDisplay";
import Button from "../ReusableComponents/Button";
import RiskLevelSheetRow from "../ReusableComponents/RiskLevelSheetRow";
import { getTotal, calculateNewAmount, calculateDifference, isNegative, findMinimumTransfers } from "../../util/calculatorUtil";
import { Redirect } from "react-router-dom";
import CalculatorInputs from "../ReusableComponents/CalculatorInputs";

const CalculatorPage = ({ state, receiveInputs }) => { 
    const [bonds, setBonds] = useState(state.calculator.bonds || 20);
    const [midCap, setMidCap] = useState(state.calculator.midCap || 20);
    const [largeCap, setLargeCap] = useState(state.calculator.largeCap || 20);
    const [foreign, setForeign] = useState(state.calculator.foreign || 20);
    const [smallCap, setSmallCap] = useState(state.calculator.smallCap || 20);
    const [error, setError] = useState("");

    let inputs = {
        bonds,
        midCap,
        largeCap,
        foreign,
        smallCap
    };

    let total = getTotal(state.calculator);

    let newAmounts = { 
        bonds: calculateNewAmount(total, state.risk.bonds),
        midCap: calculateNewAmount(total, state.risk.midCap),
        largeCap: calculateNewAmount(total, state.risk.largeCap),
        foreign: calculateNewAmount(total, state.risk.foreign),
        smallCap: calculateNewAmount(total, state.risk.smallCap)
    };

    let differences = { 
        bonds: calculateDifference(state.calculator.bonds, newAmounts.bonds),
        midCap: calculateDifference(state.calculator.midCap, newAmounts.midCap),
        largeCap: calculateDifference(state.calculator.largeCap, newAmounts.largeCap),
        foreign: calculateDifference(state.calculator.foreign, newAmounts.foreign),
        smallCap: calculateDifference(state.calculator.smallCap, newAmounts.smallCap)
    };

    let transfers = [];
    if ("bonds" in differences) transfers = findMinimumTransfers(differences);

    const validateInputs = () => {
        for (const input in inputs) {
            if (inputs[input] === "") return false;
            const value = parseFloat(inputs[input] * 1);
            if (isNaN(value) || isNegative(value)) return false;
        }

        setError("");
        return true;
    }

    return !state.risk.level ? <Redirect to="/" /> : (
        <>
            <Nav />
            <div className="calculator-page">
                
                <h1>Calculator Page</h1>
                <div className="calculator-user-info"> 
                    <div className="calculator-slot"> 
                        <p>This is the risk level you chose in the previous step. Your results with be based off of the percentages that correspond with the risk level.</p>
                        <DropDisplay title={`Risk Level ${state.risk.level}`} selected>
                            <ul className="risk-level-sheet">
                                <RiskLevelSheetRow category="Category" percentage="Percentage" style="risk-level-sheet-row--header" />
                                <RiskLevelSheetRow category="Bonds" percentage={state.risk.bonds} />
                                <RiskLevelSheetRow category="Large Cap" percentage={state.risk.largeCap} />
                                <RiskLevelSheetRow category="Mid Cap" percentage={state.risk.midCap} />
                                <RiskLevelSheetRow category="Foreign" percentage={state.risk.foreign} />
                                <RiskLevelSheetRow category="Small Cap" percentage={state.risk.smallCap} />
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
                    {"level" in state.risk && Object.keys(state.calculator).length > 0 ? <>
                        <DropDisplay title="Total" selected>
                            <p className="calculator-page__info">{total}</p>
                        </DropDisplay>

                        <DropDisplay title="New Amounts" selected>
                            <div className="calculator-page__info">
                                <div>Bonds: <p className="calculator-blue">{newAmounts.bonds}</p></div>
                                <div>Mid Cap: <p className="calculator-blue">{newAmounts.midCap}</p></div>
                                <div>Large Cap: <p className="calculator-blue">{newAmounts.largeCap}</p></div>
                                <div>Foreign: <p className="calculator-blue">{newAmounts.foreign}</p></div>
                                <div>Small Cap: <p className="calculator-blue">{newAmounts.smallCap}</p></div>
                            </div>
                        </DropDisplay>

                        <DropDisplay title="Differences" selected>
                            <div className="calculator-page__info">
                                <div>Bonds: <p className={isNegative(differences.bonds) ? "calculator-red" : "calculator-green"}>{differences.bonds}</p></div>
                                <div>Mid Cap: <p className={isNegative(differences.midCap) ? "calculator-red" : "calculator-green"}>{differences.midCap}</p></div>
                                <div>Large Cap: <p className={isNegative(differences.largeCap) ? "calculator-red" : "calculator-green"}>{differences.largeCap}</p></div>
                                <div>Foreign: <p className={isNegative(differences.foreign) ? "calculator-red" : "calculator-green"}>{differences.foreign}</p></div>
                                <div>Small Cap: <p className={isNegative(differences.smallCap) ? "calculator-red" : "calculator-green"}>{differences.smallCap}</p></div>
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
                    validateInputs() ? receiveInputs(inputs) : setError("Inputs must be 0 or a positive number");
                }} text="Calculate" />
            </div>
        </>
    )
};

export default CalculatorPage;