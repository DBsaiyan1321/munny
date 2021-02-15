import { connect } from "react-redux";
import { handleInputs } from "../../actions/calculator_actions";
import { removeNewAmounts } from "../../actions/new_amounts_actions";
import CalculatorPage from "./CalculatorPage";

const mapStateToProps = state => ({ 
    risk: state.risk, 
    calculator: state.calculator
});

const mapDispatchToProps = dispatch => ({
    handleInputs: inputs => dispatch(handleInputs(inputs)), 
    removeNewAmounts: () => dispatch(removeNewAmounts())
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorPage);