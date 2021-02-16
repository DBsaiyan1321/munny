import { RECEIVE_RISK_LEVEL } from "../actions/risk_actions";

// const defaultState = {
//     selectLevel: 20
// };

const riskReducer = (initialState = {}, action) => { 
    Object.freeze(initialState); 
    switch (action.type) {
        case RECEIVE_RISK_LEVEL: 
            return action.payload;
        default:
            return initialState;
    }
};

export default riskReducer;