import { connect } from "react-redux";
import { handleInputs } from "../../actions/calculator_actions";
import CalculatorPage from "./CalculatorPage";

const mapStateToProps = state => ({ 
    state 
});

const mapDispatchToProps = dispatch => ({
    handleInputs: inputs => dispatch(handleInputs(inputs))
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorPage);