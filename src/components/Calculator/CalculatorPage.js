import React, { useState } from "react"; 
import "./CalculatorPage.css";
import Nav from "../Nav/Nav";
import DropDisplay from "../ReusableComponents/DropDisplay";
import Button from "../ReusableComponents/Button";
import RiskLevelSheetRow from "../ReusableComponents/RiskLevelSheetRow";
import { getTotal, calculateNewAmount, calculateDifference, isNegative, findMinimumTransfers } from "../../util/calculatorUtil";

const CalculatorPage = ({ state, receiveInputs }) => { 
    const [bonds, setBonds] = useState(state.calculator.bonds || 20);
    const [midCap, setMidCap] = useState(state.calculator.midCap || 20);
    const [largeCap, setLargeCap] = useState(state.calculator.largeCap || 20);
    const [foreign, setForeign] = useState(state.calculator.foreign || 20);
    const [smallCap, setSmallCap] = useState(state.calculator.smallCap || 20);

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
            const value = parseFloat(inputs[input]);
            if (isNaN(value) || isNegative(value)) return false;
        }

        return true;
    }

    return (
        <>
            <Nav />
            <div className="calculator-page">
                
                <h1>Calculator Page</h1>
                <div className="calculator-user-info"> 
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

                    <DropDisplay title="Current Amounts" selected>
                        <div className="current-amounts">
                            <label className="current-amounts__label">
                                Bonds: $
                            <input className="current-amounts__input" onChange={e => setBonds(e.currentTarget.value)} value={bonds} placeholder="bonds" />
                            </label>
                            <label className="current-amounts__label">
                                Mid Cap: $
                        <input className="current-amounts__input" onChange={e => setMidCap(e.currentTarget.value)} value={midCap} placeholder="midCap" />
                            </label>
                            <label className="current-amounts__label">
                                Large Cap: $
                        <input className="current-amounts__input" onChange={e => setLargeCap(e.currentTarget.value)} value={largeCap} placeholder="LargeCap" />
                            </label>
                            <label className="current-amounts__label">
                                Foreign: $
                            <input className="current-amounts__input" onChange={e => setForeign(e.currentTarget.value)} value={foreign} placeholder="foreign" />
                            </label>
                            <label className="current-amounts__label">
                                Small Cap: $
                            <input className="current-amounts__input" onChange={e => setSmallCap(e.currentTarget.value)} value={smallCap} placeholder="SmallCap" />
                            </label>
                        </div>
                    </DropDisplay>
                </div>

                <div className="calculator-results"> 
                    {"level" in state.risk && Object.keys(state.calculator).length > 0 ? <>
                        <DropDisplay title="Total" selected>
                            <p className="calculator-page__info">{total}</p>
                        </DropDisplay>


                        {/* <div className="gutter"></div> */}

                        <DropDisplay title="New Amounts" selected>
                            <div className="calculator-page__info">
                                <div>Bonds: <p className="blue">{newAmounts.bonds}</p></div>
                                <div>Mid Cap: <p className="blue">{newAmounts.midCap}</p></div>
                                <div>Large Cap: <p className="blue">{newAmounts.largeCap}</p></div>
                                <div>Foreign: <p className="blue">{newAmounts.foreign}</p></div>
                                <div>Samll Cap: <p className="blue">{newAmounts.smallCap}</p></div>
                            </div>
                        </DropDisplay>

                        {/* <div className="gutter"></div> */}

                        <DropDisplay title="Differences" selected>
                            <div className="calculator-page__info">
                                <div>Bonds: <p className={isNegative(differences.bonds) ? "red" : "green"}>{differences.bonds}</p></div>
                                <div>midCap: <p className={isNegative(differences.midCap) ? "red" : "green"}>{differences.midCap}</p></div>
                                <div>largeCap: <p className={isNegative(differences.largeCap) ? "red" : "green"}>{differences.largeCap}</p></div>
                                <div>foreign: <p className={isNegative(differences.foreign) ? "red" : "green"}>{differences.foreign}</p></div>
                                <div>smallCap: <p className={isNegative(differences.smallCap) ? "red" : "green"}>{differences.smallCap}</p></div>
                            </div>
                        </DropDisplay>

                        {/* <div className="gutter"></div> */}

                        <DropDisplay title="Recommended Transfers" selected>
                            <div className="calculator-page__info">
                                {transfers.map((transfer, i) => <p key={i} className="calculator-transfers">{transfer}</p>)}
                            </div>
                        </DropDisplay>
                    </> : null
                    }
                </div>

                <Button onClick={() => { 
                    validateInputs() ? receiveInputs(inputs) : console.log("error");
                }} text="Calculate" />
            </div>
        </>
    )
};

export default CalculatorPage;