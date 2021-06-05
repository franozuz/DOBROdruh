import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
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
    history.push('/test/1');
  }

  const questionIndex = validId !== -1 ? validId - 1 : 0;

  const question = questions[questionIndex];

  const handleChange = () => {
    history.push(`/test/${validId + 1}`);
  };

  return (
    <section className="test">
      <Question question={question} onNext={handleChange} />
    </section>
  );
};

export default Test;
