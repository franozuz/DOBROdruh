import React from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import Question from './Question';
import questions from './questions.json';
import './style.css';

const parseId = (possibleId) => {
  const id = Number(possibleId);
  if (isNaN(id)) {
    return -1;
  }

  if (id > 0 && id <= questions.length) {
    return id;
  }

  return -1;
};

const getResultValues = () => {
  const resultValues = [];

  for (const question of questions) {
    const answerId = localStorage.getItem(question.id);
    if (answerId) {
      const answer = question.answers.find((answer) => answer.id === answerId);
      resultValues.push(answer.value);
    }
  }
  return resultValues;
};

const calculateResult = (resultValues) => {
  let result = 0;

  for (const resultValue of resultValues) {
    result += resultValue;
  }
  return result;
};

const Test = () => {
  const { id } = useParams();
  const history = useHistory();

  const result = localStorage.getItem('result');
  if (result) {
    return <Redirect to="/test/result" />;
  }

  const validId = parseId(id);

  if (validId === -1) {
    return <Redirect to="/test/1" />;
  }

  const questionIndex = validId - 1;

  const question = questions[questionIndex];

  const handleNext = (answerId) => {
    localStorage.setItem(question.id, answerId);

    if (validId >= questions.length) {
      const resultValues = getResultValues();
      const result = calculateResult(resultValues);
      localStorage.clear();
      localStorage.setItem('result', result);
      history.push('/test/result');
    } else {
      history.push(`/test/${validId + 1}`);
    }
  };

  const handleBack = () => {
    history.push(`/test/${validId - 1}`);
  };

  return (
    <section className="test">
      <Question
        question={question}
        onNext={handleNext}
        onBack={handleBack}
        isFirst={validId === 1}
        isLast={validId === questions.length}
      />
    </section>
  );
};

export default Test;
