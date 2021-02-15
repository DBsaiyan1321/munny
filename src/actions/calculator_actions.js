import { receiveNewAmounts } from "./new_amounts_actions";
import { receiveDifferences } from "./differences_actions";
import { receiveInputs } from "./inputs_actions";
import { calculateNewAmount, calculateDifference, getTotal } from "../util/calculatorUtil";

export const handleInputs = inputs => (dispatch, getState) => { 
    const { risk } = getState();

    const total = getTotal(inputs);

    const newAmounts = {
        bonds: calculateNewAmount(total, risk.bonds),
        midCap: calculateNewAmount(total, risk.midCap),
        largeCap: calculateNewAmount(total, risk.largeCap),
        foreign: calculateNewAmount(total, risk.foreign),
        smallCap: calculateNewAmount(total, risk.smallCap)
    };

    const differences = {
        bonds: calculateDifference(inputs.bonds, newAmounts.bonds),
        midCap: calculateDifference(inputs.midCap, newAmounts.midCap),
        largeCap: calculateDifference(inputs.largeCap, newAmounts.largeCap),
        foreign: calculateDifference(inputs.foreign, newAmounts.foreign),
        smallCap: calculateDifference(inputs.smallCap, newAmounts.smallCap)
    };

    dispatch(receiveInputs(inputs));
    dispatch(receiveNewAmounts(newAmounts));
    dispatch(receiveDifferences(differences));
}