import InputsReducer from "./inputs_reducer";
import DifferencesReducer from "./differences_reducer";
import NewAmountsReducer from "./new_amounts_reducer";
import { combineReducers } from "redux"; 

const calculatorReducer = combineReducers({
    inputs: InputsReducer, 
    differences: DifferencesReducer, 
    newAmounts: NewAmountsReducer
});

export default calculatorReducer;