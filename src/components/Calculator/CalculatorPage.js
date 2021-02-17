import React, { useState } from "react"; 
import "./CalculatorPage.css";
import Nav from "../Nav/Nav";
import DropDisplay from "../ReusableComponents/DropDisplay";
import Button from "../ReusableComponents/Button";
import RiskLevelSheetRow from "../ReusableComponents/RiskLevelSheetRow";
import { getTotal, isNegative, categoryStringObject } from "../../util/calculatorUtil";
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

    const validateInputs = () => {
        for (const input in inputs) {
            if (inputs[input] === "") return false;
            const value = parseFloat(inputs[input] * 1);
            if (isNaN(value) || isNegative(value)) return false;
        }

        setError("");
        return true;
    }

    return !risk.level ? <Redirect to="/" /> : (
        <>
            <Nav />
            <div className="calculator-page">
                
                <h1>Calculator Page</h1>
                {/* <div className="calculator-user-info">  */}
                    <div className="calculator-slot"> 
                        <p className="calculator-slot__text">This is the risk level you chose in the previous step. Your results with be based off of the percentages that correspond with the risk level.</p>
                        <DropDisplay title={`Risk Level ${risk.level}`} selected>
                            <ul className="risk-level-sheet">
                                <RiskLevelSheetRow category="Category" percentage="Percentage" style="risk-level-sheet-row--header" />
                                { Object.keys(categoryStringObject).map((category, i) => { 
                                    return <RiskLevelSheetRow category={categoryStringObject[category]} percentage={risk[category]} key={i} />
                                })}
                            </ul>
                        </DropDisplay>
                    </div>

                    <div className="calculator-slot">
                        <p className="calculator-slot__text">
                            Enter the amount of money in DOLLARS, not percentage,
                            that you have allocated towards each category. This is
                            the data that we will use to recommend you a perfect portfolio.
                            For the best results, please enter accurate information.
                        </p>
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
                {/* </div> */}

                {/* <div className="calculator-results">  */}
                    {"level" in risk && Object.keys(calculator.inputs).length > 0 && Object.keys(calculator.differences).length > 0 ? <>
                        <div className="calculator-slot">
                            <p className="calculator-slot__text">
                                This is the grand total of all of the money you 
                                have for your portfolio.
                            </p>
                            <DropDisplay title="Total" selected>
                                <p className="calculator-page__info">{getTotal(calculator.inputs)}</p>
                            </DropDisplay>
                        </div>

                        <div className="calculator-slot">
                            <p className="calculator-slot__text">
                                These new amounts are what we recommend you have
                                in each category. This is based on the percentages
                                of the risk level you chose and the total amount
                                of money you have.
                            </p>
                            <DropDisplay title="New Amounts" selected>
                                <div className="calculator-page__info">
                                    {Object.keys(categoryStringObject).map((category, i) => {
                                        return <div key={i}>{categoryStringObject[category]}: <p className="calculator-blue">{calculator.newAmounts[category]}</p></div>
                                    })}
                                </div>
                            </DropDisplay>
                        </div>

                        <div className="calculator-slot">
                            <p className="calculator-slot__text">
                                Differences are the comparison between the amount 
                                of money you have allocated towards each category 
                                vs the amount of money we recommend from the new 
                                amounts given above. Red means that you have less 
                                money in that category then we recommend, and green 
                                means you have more money in that category then we recommend.
                            </p>
                            <DropDisplay title="Differences" selected>
                                <div className="calculator-page__info">
                                    {Object.keys(categoryStringObject).map((category, i) => {
                                        return <div key={i}>{categoryStringObject[category]}: <p className={isNegative(calculator.differences[category]) ? "calculator-red" : "calculator-green"}>{calculator.differences[category]}</p></div>
                                    })}
                                </div>
                            </DropDisplay>
                        </div>

                        <div className="calculator-slot">
                            <p className="calculator-slot__text">
                                These are the transfers we recommend you make so your
                                categories match our recommended amounts perfectly.
                                This is minimum number of transfers you would have to
                                make to match our recommendations.
                            </p>
                            <DropDisplay title="Recommended Transfers" selected>
                                <div className="calculator-page__info">
                                    {calculator.transfers.map((transfer, i) => <p key={i} className="calculator-transfers">{transfer}</p>)}
                                </div>
                            </DropDisplay>
                        </div>
                    </> : null
                    }
                {/* </div> */}

                <Button onClick={() => { 
                    validateInputs() ? handleInputs(inputs) : setError("Inputs must be 0 or a positive number");
                }} text="Calculate" />
            </div>
        </>
    )
};

export default CalculatorPage;