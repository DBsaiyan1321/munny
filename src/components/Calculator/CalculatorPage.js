import React, { useState } from "react"; 
import "./CalculatorPage.css";
import Nav from "../Nav/Nav";

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
        smallCap: calculateDifference(state.calculator.smallCap, newAmounts.smallCap)
    };

    let transfers = [];
    if ("bonds" in differences) transfers = findMinimumTransfers(differences);

    return (
        <>
            <Nav />
            <div>CalculatorPage</div>

            <label>
                Bonds
                <input onChange={e => setBonds(e.currentTarget.value)} value={bonds} placeholder="bonds" />
            </label>
            <label>
                Mid Cap 
            <input onChange={e => setMidCap(e.currentTarget.value)} value={midCap} placeholder="midCap" />
            </label>
            <label>
                Large Cap 
            <input onChange={e => setLargeCap(e.currentTarget.value)} value={largeCap} placeholder="LargeCap" />
            </label>
            <label>
                Foreign
                <input onChange={e => setForeign(e.currentTarget.value)} value={foreign} placeholder="foreign" />
            </label>
            <label> 
                Small Cap
                <input onChange={e => setSmallCap(e.currentTarget.value)} value={smallCap} placeholder="SmallCap" />
            </label>
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

            <div className="gutter"></div>

            { 
                transfers.map((transfer, i) => <p key={i}>{transfer}</p>) 
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

const calculateNewAmount = (total, percentage) => total * (percentage / 100);

const calculateDifference = (amount, expected) => amount - expected;

const isPositive = number => number > 0;

const isNegative = number => number < 0;

// Zero is neither positive nor negative.

// Problem: Given differences and corresponding category names, find the recommended 
// transfers to balance everything out. It should be the minimum amount of transfers possible.
const findMinimumTransfers = differences => { 
    const words = { 
        bonds: "Bonds",
        midCap: "Mid Cap",
        largeCap: "Large Cap",
        foreign: "Foreign",
        smallCap: "Small Cap"
    };

    const returnVal = [];

    const arr = []
    for (const difference in differences) { 
        arr.push({ cat: difference, val: differences[difference] });
    }

    arr.sort((a,b) => a.val - b.val);

    let i = 0;
    let j = arr.length - 1;
    
    while (i < j) {
        const sum = arr[i].val + arr[j].val;
        if (sum > 0) {
            arr[j].val = sum;
            returnVal.push(`Transfer $${Math.abs(arr[i].val)} from ${words[arr[j].cat]} to ${words[arr[i].cat]}`);
            i++;
        } else if (sum < 0) {
            arr[i].val = sum
            returnVal.push(`Transfer $${Math.abs(arr[j].val)} from ${words[arr[j].cat]} to ${words[arr[i].cat]}`);
            j--
        } else {
            returnVal.push(`Transfer $${Math.abs(arr[j].val)} from ${words[arr[j].cat]} to ${words[arr[i].cat]}`);
            i++
            j--
        }
    }
    return returnVal;
};

// Example 1-
// {
//     bonds: -200,
//     largeCap: -150, 
//     midCap: 50, 
//     foreign: 100, 
//     smallCap: 200
// }
// Answer: 
// • Transfer $200 from Bonds to Small Cap.
// • Transfer $100 from Large Cap to Foreign.
// • Transfer $50 from Large Cap to Mid Cap.

// [-200, -150]
// [50,100,200]

// [-150]
// [50,100]

// [-50]
// [50]
//     i     i        j      j
// [-200, -150, 50, 100, 200]

// Example 2- 
// {
//     bonds: -200,
//     largeCap: -149,
//     midCap: 235,
//     foreign: 106, 
//     smallCap: 8
// }
// Answer: 
// • Transfer $106 from Large Cap to Foreign.
// • Transfer $8 from Large Cap to Small Cap.
// • Transfer $35 from Large Cap to Mid Cap.
// • Transfer $200 from Bonds to Mid Cap.
// i                     j         i           j
// [-200, -149, 8, 106, 235] => [-149, 8, 106, 35]
// Transfer 200 from Bonds to Mid Cap

// if ((arr[i] + arr[j]) > 0) { 
//     arr[j] = (arr[i] + arr[j]) 
//     push statement into output
//     "array[i].cat owes array[j].cat arr[i]"
//     i++
// } else if ((arr[i] + arr[j]) < 0) { 
//     arr[j] = (arr[i] + arr[j])
//     "array[i].cat owes array[j].cat arr[j]"
//     push statement into output
//     j--
// } else { 
//     push statement into output
//     "array[i].cat owes array[j].cat array[i]"
//     i++
//     j++
// }

// [-149, 8, 106, 35]

// Right off the bat, I notice that the amount that we are down is the same amount we are up. What I mean is that we
// are a total of 350 down in bonds and largeCap then 350 up in the rest of the categories. 

// If I order the ups from smallest to largest, then do the same for the downs, it's easy to calculate. 

// Example 2-
// ups = [8,106,235]
// downs = [149, 200] // We don't consider them negative
// Move backwards through both and compare
// 235 - 200 = 35. So we know we can transfer 200 from bonds to midCap

// Now the arrays look like
// ups = [8,106,35]
// downs = [149]
// 149 - 35. We know we can transfer the rest of our largeCap to midCap

// ups = [8,106]
// downs = [114]
// 114 - 106. We can transfer 106 from largecap to foreign.

// ups = [8]
// downs = [8]
// 8 - 8. We can transfer 8 from largecap to smallcap

// downs means we need to go down in those account because we have too much.
// ups means we need to go up in those accounts because we don't have enough

// I guess a min heap and max heap would work in this case too.
// Maybe I just need to sort one array, then have a pointer on one end and a pointer on the other.