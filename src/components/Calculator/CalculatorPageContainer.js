import { connect } from "react-redux";
import { handleInputs } from "../../actions/calculator_actions";
import CalculatorPage from "./CalculatorPage";

const mapStateToProps = state => ({ 
    risk: state.risk, 
    calculator: state.calculator
});

const mapDispatchToProps = dispatch => ({
    handleInputs: inputs => dispatch(handleInputs(inputs))
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorPage);