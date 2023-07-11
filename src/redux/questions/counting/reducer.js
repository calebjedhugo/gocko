import { NEW_COUNTING_QUESTION, SET_MAX_COUNTING_ANSWER } from './actions';
import QuestionMaker from 'logic/math/simple';

const maxAnswer = 10;
const maxGroups = 10;
const questionMaker = new QuestionMaker({ maxAnswer, maxGroups });

const reducer = (
  state = {
    question: questionMaker.question,
    answer: questionMaker.answer,
    maxAnswer,
    maxGroups,
  },
  { type, payload }
) => {
  switch (type) {
    case NEW_COUNTING_QUESTION:
      questionMaker.newCount();
      let { countQuestion: question, countAnswer: answer } = questionMaker;
      return { ...state, question, answer };
    case SET_MAX_COUNTING_ANSWER:
      const { value } = payload || {};
      questionMaker.setMaxGroups(value);
      return { ...state, maxAnswer: value };
    default:
      return state;
  }
};

export default reducer;
