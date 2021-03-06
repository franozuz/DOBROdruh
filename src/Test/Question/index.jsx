import React, { useEffect, useState } from 'react';
import './style.css';

const Question = (props) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);

  useEffect(() => {
    const answerId = localStorage.getItem(props.question.id);
    if (answerId) {
      setSelectedAnswerId(answerId);
    }
  }, [props.question]);

  const handleQuestionNext = (e) => {
    e.preventDefault();
    props.onNext(selectedAnswerId);
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
            <div className="container">
            <input
              className="question__input"
              type="radio"
              name="answer"
              value={answer.value}
              onChange={() => setSelectedAnswerId(answer.id)}
              checked={selectedAnswerId === answer.id}
              required
            />
            <span className="checkmark"></span>
            {answer.text}
            </div>
          </label>
        ))}
        <div className="test__nav">
          {!props.isFirst ? (
            <button onClick={handleQuestionBack}>Zpět</button>
          ) : (
            <div></div>
          )}
          {props.isLast ? (
            <button type="submit">Vyhodnoť test</button>
          ) : (
            <button type="submit">Další</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Question;
