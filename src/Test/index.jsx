import React from 'react';
import Question from './Question';
import questions from './questions.json';
import './style.css';

const Test = () => {
  const question = questions[0];

  return (
    <section className="test">
      <Question question={question} />
    </section>
  );
};

export default Test;
