import { riskLevels } from "../util/riskLevels";

const riskReducer = (initialState = {}, action) => { 
    Object.freeze(initialState); 
    switch (action.type) {
        case 1:
            return { ...initialState, ...riskLevels[1]};
        case 2:
            return { ...initialState, ...riskLevels[2] };
        case 3:
            return { ...initialState, ...riskLevels[3] };
        case 4:
            return { ...initialState, ...riskLevels[4] };
        case 5:
            return { ...initialState, ...riskLevels[5] };
        case 6:
            return { ...initialState, ...riskLevels[6] };
        case 7:
            return { ...initialState, ...riskLevels[7] };
        case 8:
            return { ...initialState, ...riskLevels[8] };
        case 9:
            return { ...initialState, ...riskLevels[9] };
        case 10:
            return { ...initialState, ...riskLevels[10] };
        default:
            return initialState;
    }
};

export default riskReducer;