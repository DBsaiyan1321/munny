// Given an object of inputs, where the keys are the categories and the values are the amounts in dollars, calculate the grand total.
export const getTotal = inputsObject => {
    let total = 0;
    for (const input in inputsObject) {
        total += parseFloat(inputsObject[input]);
    }
    return total.toFixed(2);
};


// Given the total (dollars) and a percentage, output the dollar amount of that percentage of the total.
export const calculateNewAmount = (total, percentage) => (total * (percentage / 100)).toFixed(2);


// Given an amount and what we expect the amount should be, return the difference.
export const calculateDifference = (amount, expected) => (amount - expected).toFixed(2);


// Determine whether the input is positive
export const isPositive = number => number > 0;


// Determine whether the input is negative.
export const isNegative = number => number < 0;


// Zero is neither positive nor negative.


// Given an object of differences (keys are the category names and the values are the differences), 
// find the minimum number of transfers need to balance everything out.
export const findMinimumTransfers = differences => {
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

    arr.sort((a, b) => a.val - b.val);

    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        const sum = parseFloat(arr[i].val) + parseFloat(arr[j].val);
        if (sum > 0) {
            arr[j].val = sum;
            returnVal.push(`Transfer $${(Math.abs(arr[i].val)).toFixed(2)} from ${words[arr[j].cat]} to ${words[arr[i].cat]}`);
            i++;
        } else if (sum < 0) {
            arr[i].val = sum;
            returnVal.push(`Transfer $${(Math.abs(arr[j].val)).toFixed(2)} from ${words[arr[j].cat]} to ${words[arr[i].cat]}`);
            j--;
        } else {
            if (Math.abs(arr[j].val) !== 0) { 
                returnVal.push(`Transfer $${(Math.abs(arr[j].val)).toFixed(2)} from ${words[arr[j].cat]} to ${words[arr[i].cat]}`)
            } 
            i++;
            j--;
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