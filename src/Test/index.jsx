import React, { useState } from 'react';
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

const Test = () => {
  const { id } = useParams();
  const history = useHistory();

  const validId = parseId(id);

  if (validId === -1) {
    return <Redirect to="/test/1" />;
  }

  const questionIndex = validId - 1;

  const question = questions[questionIndex];

  const handleNext = () => {
    history.push(`/test/${validId + 1}`);
  };

  const handleBack = () => {
    history.goBack();
  }

  return (
    <section className="test">
      <Question question={question} onNext={handleNext} onBack={handleBack}/>
    </section>
  );
};

export default Test;
