import { RECEIVE_TRANSFERS } from "../actions/transfers_actions";

const TransfersReducer = (initialState = {}, action) => { 
    Object.freeze(initialState);
    switch (action.type) {
        case RECEIVE_TRANSFERS:
            return action.transfers;
        default:
            return initialState;
    }
};

export default TransfersReducer;