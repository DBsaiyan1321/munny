import React, { useState } from "react"; 
import "./CalculatorPage.css";
import Nav from "../Nav/Nav";

const CalculatorPage = ({ state, receiveInputs }) => { 
    const [bonds, setBonds] = useState(state.calculator.bonds || 0);
    const [midCap, setMidCap] = useState(state.calculator.midCap || 0);
    const [largeCap, setLargeCap] = useState(state.calculator.largeCap || 0);
    const [foreign, setForeign] = useState(state.calculator.foreign || 0);
    const [smallCap, setSmallCap] = useState(state.calculator.smallCap || 0);

    let inputs = {
        bonds,
        midCap,
        largeCap,
        foreign,
        smallCap
    };

    let total = getTotal(state.calculator);

    let newAmounts = { 
        bonds: calculateNewAmount(getTotal(state.calculator), state.risk.bonds),
        midCap: calculateNewAmount(getTotal(state.calculator), state.risk.midCap),
        largeCap: calculateNewAmount(getTotal(state.calculator), state.risk.largeCap),
        foreign: calculateNewAmount(getTotal(state.calculator), state.risk.foreign),
        smallCap: calculateNewAmount(getTotal(state.calculator), state.risk.smallCap)
    };

    let differences = { 
        bonds: calculateDifference(state.calculator.bonds, newAmounts.bonds),
        midCap: calculateDifference(state.calculator.midCap, newAmounts.midCap),
        largeCap: calculateDifference(state.calculator.largeCap, newAmounts.largeCap),
        foreign: calculateDifference(state.calculator.foreign, newAmounts.foreign),
        smallCap: calculateDifference(state.calculator.foreign, newAmounts.smallCap)
    };

    return (
        <>
            <Nav />
            <div>CalculatorPage</div>
            <input onChange={e => setBonds(e.currentTarget.value)} value={bonds} placeholder="bonds" />
            <input onChange={e => setMidCap(e.currentTarget.value)} value={midCap} placeholder="midCap" />
            <input onChange={e => setLargeCap(e.currentTarget.value)} value={largeCap} placeholder="LargeCap" />
            <input onChange={e => setForeign(e.currentTarget.value)} value={foreign} placeholder="foreign" />
            <input onChange={e => setSmallCap(e.currentTarget.value)} value={smallCap} placeholder="SmallCap" />
            <button onClick={() => receiveInputs(inputs)}>Calculate</button>

            { "level" in state.risk && Object.keys(state.calculator).length > 0 ? <>
                <h1 className="title">Total</h1>
                <p>{total}</p>

                <div className="gutter"></div>

                <h1 className="title">New Amounts</h1>
                <p>Bonds: {newAmounts.bonds}</p>
                <p>Mid Cap: {newAmounts.midCap}</p>
                <p>Large Cap: {newAmounts.largeCap}</p>
                <p>Foreign: {newAmounts.foreign}</p>
                <p>Samll Cap: {newAmounts.smallCap}</p>

                <div className="gutter"></div>

                <h1 className="title">Differences</h1>
                <p>Bonds: {differences.bonds}</p>
                <p>midCap: {differences.midCap}</p>
                <p>largeCap: {differences.largeCap}</p>
                <p>foreign: {differences.foreign}</p>
                <p>smallCap: {differences.smallCap}</p>
            </> : null
            }
        </>
    )
};

export default CalculatorPage;

const getTotal = inputsObject => { 
    let total = 0;
    for (const input in inputsObject) { 
        total += parseInt(inputsObject[input]);
    }
    return total;
};

const calculateNewAmount = (total, percentage) => { 
    return total * (percentage / 100);
};

const calculateDifference = (amount, expected) => { 
    const difference = amount - expected;

    return difference;
    // if (isPositive(difference)) { 

    // } else if (isNegative(difference)) { 

    // } else { 
    //     return difference
    // }
};

const isPositive = number => number > 0;

const isNegative = number => number < 0;

// Zero is neither positive nor negative.