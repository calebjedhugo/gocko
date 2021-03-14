import { connect } from "react-redux";
import storageActions from "redux/storage/typing/actions";
import questionActions from "redux/questions/typing/actions";

import Typing from "./Typing";

const mapStateToProps = (state) => ({
    data: state.storage.typing,
    pastChars: state.questions.typing.pastChars,
    currentChar: state.questions.typing.currentChar,
    futureChars: state.questions.typing.futureChars,
});

const mapDispatchToProps = (dispatch) => ({
    push: (obj) => dispatch(storageActions.push(obj)),
    advance: () => dispatch(questionActions.advance()),
});

const ConnectedTyping = connect(mapStateToProps, mapDispatchToProps)(Typing);

export default ConnectedTyping;
