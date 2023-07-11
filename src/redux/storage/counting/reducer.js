import { repeat } from 'lodash';
import { PUSH_COUNTING_HISTORY, RESET_COUNTING_HISTORY } from './actions';
import { countingHistory } from 'storage/localStorage';

const countingReducer = (
  state = countingHistory.data,
  { type, payload: { answer, question, ...rest } = {} }
) => {
  switch (type) {
    case PUSH_COUNTING_HISTORY:
      const withTime = {
        answer,
        question: '*'.repeat(Number(answer)),
        ...rest,
        time: new Date().getTime(),
      };
      countingHistory.push(withTime);
      return [...state, withTime];
    case RESET_COUNTING_HISTORY:
      countingHistory.reset();
      return [];
    default:
      return state;
  }
};

export default countingReducer;
