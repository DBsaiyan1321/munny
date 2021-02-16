import InputsReducer from "./inputs_reducer";
import DifferencesReducer from "./differences_reducer";
import NewAmountsReducer from "./new_amounts_reducer";
import { combineReducers } from "redux"; 
import TransfersReducer from "./transfers_reducer";

const calculatorReducer = combineReducers({
    inputs: InputsReducer, 
    differences: DifferencesReducer, 
    newAmounts: NewAmountsReducer,
    transfers: TransfersReducer
});

export default calculatorReducer;