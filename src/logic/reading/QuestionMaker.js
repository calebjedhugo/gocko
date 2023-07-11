import { random } from 'lodash';
import { icons } from './questions';

const words = Object.keys(icons);

class QuestionMaker {
  constructor() {
    this.newQuestion();
  }

  newQuestion = () => {
    const idx = random(0, words.length - 1);
    this.answer = words[idx];
    this.question = words[idx];
  };
}

export default QuestionMaker;
