import { connect } from 'react-redux';
import CountingQuestion from './CountingQuestion';
import storageActions from 'redux/storage/counting/actions';
import { actions as questionActions } from 'redux/questions/counting';

//TODO: start using selectors.
const mapStateToProps = (state) => {
  return {
    data: state.storage.counting,
    question: state.questions.counting.question,
    answer: state.questions.counting.answer,
    maxAnswer: state.questions.counting.maxAnswer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  push: (obj) => dispatch(storageActions.push(obj)),
  newQuestion: () => dispatch(questionActions.newQuestion()),
});

const ConnectedCountingQuestion = connect(mapStateToProps, mapDispatchToProps)(CountingQuestion);

export default ConnectedCountingQuestion;
