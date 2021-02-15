import { combineReducers } from "redux"; 
import calculatorReducer from "./calculator_reducer";
import riskReducer from "./risk_reducer";
// import InputsReducer from "./inputs_reducer";
// import DifferencesReducer from "./differences_reducer";
// import NewAmountsReducer from "./new_amounts_reducer";

const rootReducer = combineReducers({
    risk: riskReducer,
    calculator: calculatorReducer
    // inputs: InputsReducer,
    // differences: DifferencesReducer,
    // newAmounts: NewAmountsReducer
});

export default rootReducer;