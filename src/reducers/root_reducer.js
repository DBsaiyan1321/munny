import { combineReducers } from "redux"; 
import riskReducer from "./risk_reducer";

const rootReducer = combineReducers({
    risk: riskReducer
});

export default rootReducer;