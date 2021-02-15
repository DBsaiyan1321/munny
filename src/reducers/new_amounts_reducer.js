import { RECEIVE_NEW_AMOUNTS, REMOVE_NEW_AMOUNTS } from "../actions/new_amounts_actions";

const NewAmountsReducer = (initialState = {}, action) => { 
    Object.freeze(initialState); 
    switch (action.type) {
        case RECEIVE_NEW_AMOUNTS:
            return action.newAmounts;
        case REMOVE_NEW_AMOUNTS:
            return {};
        default:
            return initialState;
    }
};

export default NewAmountsReducer;