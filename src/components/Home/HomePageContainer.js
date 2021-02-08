import { connect } from "react-redux";
import HomePage from "./HomePage";
import { setRiskLevel } from "../../actions/risk_actions";

const mapStateToProps = state => ({ 
    state,
    risk: state.risk
});

const mapDispatchToProps = dispatch => ({ 
    setRiskLevel: level => dispatch(setRiskLevel(level))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);