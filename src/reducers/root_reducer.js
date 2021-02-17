import { combineReducers } from "redux"; 
import CalculatorReducer from "./calculator_reducer";
import RiskReducer from "./risk_reducer";

const rootReducer = combineReducers({
    risk: RiskReducer,
    calculator: CalculatorReducer
});

export default rootReducer;