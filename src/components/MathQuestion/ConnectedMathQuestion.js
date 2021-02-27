import { connect } from "react-redux";
import MathQuestion from "./MathQuestion";
import actions from "redux/storage/math/actions";

const mapStateToProps = (state) => {
    return { data: state.storage.math };
};

const mapDispatchToProps = (dispatch) => ({
    push: (obj) => dispatch(actions.push(obj)),
});

const ConnectedMathQuestion = connect(
    mapStateToProps,
    mapDispatchToProps
)(MathQuestion);

export default ConnectedMathQuestion;
