import { connect } from "react-redux";
import MathQuestion from "./MathQuestion";
import storageActions from "redux/storage/math/actions";
import questionActions from "redux/questions/math/actions";

//TODO: start using selectors.
const mapStateToProps = (state) => {
    return {
        data: state.storage.math,
        question: state.questions.math.question,
        answer: state.questions.math.answer,
    };
};

const mapDispatchToProps = (dispatch) => ({
    push: (obj) => dispatch(storageActions.push(obj)),
    newQuestion: () => dispatch(questionActions.newQuestion()),
});

const ConnectedMathQuestion = connect(
    mapStateToProps,
    mapDispatchToProps
)(MathQuestion);

export default ConnectedMathQuestion;
