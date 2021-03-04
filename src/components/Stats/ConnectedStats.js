import { connect } from "react-redux";
import mathStorageActions from "redux/storage/math/actions";
import mathQuestionActions from "redux/questions/math/actions";
import Stats from "./Stats";

const mapStateToProps = (state) => {
    return {
        storage: state.storage,
        mathMaxAnswer: state.questions.math.maxAnswer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        reset: { math: () => dispatch(mathStorageActions.reset()) },
        setMathMaxAnswer: ({ target: { value } }) =>
            dispatch(mathQuestionActions.setMaxAnswer({ value })),
    };
};

const ConnectedStats = connect(mapStateToProps, mapDispatchToProps)(Stats);

export default ConnectedStats;
