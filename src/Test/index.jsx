import React, { useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import Question from './Question';
import questions from './questions.json';
import './style.css';
import Result from './Result';

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

  const [displayResult, setDisplayResult] = useState(null);

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
      setDisplayResult(result);
    } else {
      history.push(`/test/${validId + 1}`);
    }
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <section className="test">
      {!displayResult ? (
        <Question
          question={question}
          onNext={handleNext}
          onBack={handleBack}
          isFirst={validId === 1}
        />
      ) : (
        <Result result={displayResult} />
      )}
    </section>
  );
};

export default Test;
