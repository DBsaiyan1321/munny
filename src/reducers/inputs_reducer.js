import { RECEIVE_INPUTS } from "../actions/inputs_actions";

const CalculatorReducer = (initialState = {}, action) => {
    Object.freeze(initialState);
    switch (action.type) {
        case RECEIVE_INPUTS:
            return { ...initialState, ...action.inputs };
        default:
            return initialState;
    }
};

export default CalculatorReducer;