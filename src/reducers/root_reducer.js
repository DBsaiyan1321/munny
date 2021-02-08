import { combineReducers } from "redux"; 
import calculatorReducer from "./calculator_reducer";
import riskReducer from "./risk_reducer";

const rootReducer = combineReducers({
    risk: riskReducer,
    calculator: calculatorReducer
});

export default rootReducer;