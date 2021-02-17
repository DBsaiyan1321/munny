import { RECEIVE_DIFFERENCES } from "../actions/differences_actions";

const DifferencesReducer = (initialState = {}, action) => {
    Object.freeze(initialState);
    switch (action.type) {
        case RECEIVE_DIFFERENCES:
            return action.differences;
        default:
            return initialState;
    }
};

export default DifferencesReducer; 