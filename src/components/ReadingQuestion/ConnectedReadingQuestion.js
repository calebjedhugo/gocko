import { connect } from "react-redux";
import ReadingQuestion from "./ReadingQuestion";
import storageActions from "redux/storage/reading/actions";
import questionActions from "redux/questions/reading/actions";

//TODO: start using selectors.
const mapStateToProps = (state) => {
    return {
        data: state.storage.reading,
        question: state.questions.reading.question,
        answer: state.questions.reading.answer,
        iconOnly: state.questions.reading.iconOnly,
    };
};

const mapDispatchToProps = (dispatch) => ({
    push: (obj) => dispatch(storageActions.push(obj)),
    newQuestion: () => dispatch(questionActions.newQuestion()),
});

const ConnectedMathQuestion = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReadingQuestion);

export default ConnectedMathQuestion;
