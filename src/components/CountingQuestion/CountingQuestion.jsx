import React, { useEffect, useState } from 'react';
import QuestionForm from 'components/organisms/QuestionForm';

const CountingQuestion = ({
  data, // from connected
  question, // from connected
  answer, // from connected
  maxAnswer, // from connected
  push, // from connected
  newQuestion, // from connected
}) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleChange = ({ target: { value } }) => {
    if (Math.abs(Number(value)) <= maxAnswer) setUserAnswer(value);
  };
  useEffect(newQuestion, [newQuestion]);
  return (
    <QuestionForm
      headerText="Counting Questions"
      inputType="number"
      {...{
        data,
        push,
        question,
        answer,
        userAnswer,
        setUserAnswer,
        newQuestion,
        handleChange,
      }}
    />
  );
};

export default CountingQuestion;
