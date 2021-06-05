import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Question from './Question';
import questions from './questions.json';
import './style.css';

const Test = () => {
  const {id} = useParams();
  const questionIndex = id ? Number(id)-1 : 0;

  const history = useHistory();
  
  const question = questions[questionIndex];

  const handleChange = () => {
    history.push(`/test/${questionIndex + 2}`)
  };

  return (
    <section className="test">
      <Question 
      question={question} 
      onNext={handleChange}/>
    </section>
  );
};

export default Test;
