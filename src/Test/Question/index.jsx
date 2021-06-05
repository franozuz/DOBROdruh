import React, { useState } from 'react';
import './style.css';

const Question = (props) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleQuestionNext = (e) => {
    e.preventDefault();
    props.onNext(selectedAnswer);
  };

  const handleQuestionBack = () => {
    props.onBack();
  };

  return (
    <div className="question">
      <h2>{props.question.question}</h2>

      <form onSubmit={handleQuestionNext}>
        {props.question.answers.map((answer) => (
          <label key={answer.id}>
            <input
              type="radio"
              name="answer"
              value={answer.value}
              onChange={() => setSelectedAnswer(answer)}
              required
            />
            {answer.text}
          </label>
        ))}
        {!props.isFirst && <button onClick={handleQuestionBack}>Zpět</button>}
        <button type="submit">Další</button>
      </form>
    </div>
  );
};

export default Question;
