import { connect } from "react-redux";
import { receiveInputs } from "../../actions/calculator_actions";
import CalculatorPage from "./CalculatorPage";

const mapStateToProps = state => ({ 
    state 
});

const mapDispatchToProps = dispatch => ({
    receiveInputs: inputs => dispatch(receiveInputs(inputs))
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorPage);