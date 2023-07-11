import { Icon } from '@material-ui/core';
import { BugReport } from '@material-ui/icons';
import styled from 'styled-components';
import { random } from 'lodash';

const IconContainer = styled('div')`
  max-width: 200px;
`;

class QuestionMaker {
  constructor({ maxAnswer, maxGroups }) {
    this.numbers = [];
    this.maxAnswer = maxAnswer;
    this.maxGroups = maxGroups;
    this.newQuestion();
    this.newCount();
  }

  newAddition = () => {
    this.numbers[0] = random(0, this.maxAnswer);
    this.numbers[1] = random(0, this.maxAnswer - this.numbers[0]);
    this.question = `${this.numbers[0]} + ${this.numbers[1]}`;
    this.answer = this.numbers[0] + this.numbers[1];
  };

  newSubtraction = () => {
    this.numbers[0] = random(0, this.maxAnswer);
    this.numbers[1] = random(0, this.maxAnswer - this.numbers[0]);
    const big = Math.max(...this.numbers);
    const lil = Math.min(...this.numbers);
    this.question = `${big} - ${lil}`;
    this.answer = big - lil;
  };

  newQuestion = () => {
    console.log(Boolean(random(0, 1)));
    if (Boolean(random(0, 1))) {
      this.newAddition();
    } else {
      this.newSubtraction();
    }
  };

  newCount = () => {
    this.countAnswer = random(1, this.maxGroups);
    let countQuestion = [];
    for (let i = 0; i < this.countAnswer; i++) {
      countQuestion.push(
        <Icon key={i} fontSize="large">
          <BugReport fontSize="large" />
        </Icon>
      );
    }

    this.countQuestion = <IconContainer>{countQuestion}</IconContainer>;
  };

  setMaxAnswer = (value) => {
    this.maxAnswer = value;
  };

  setMaxGroups = (value) => {
    this.maxGroups = value;
  };
}

export default QuestionMaker;
