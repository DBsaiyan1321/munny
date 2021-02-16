import { riskLevels } from "../util/riskLevels";

export const RECEIVE_RISK_LEVEL = "RECEIVE_RISK_LEVEL";

export const setRiskLevel = level => ({
    type: RECEIVE_RISK_LEVEL, 
    payload: riskLevels[level]
});
