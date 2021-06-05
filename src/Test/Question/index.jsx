import React from "react";
import './style.css'; 


const Question = (props) => {
  const handleQuestionNext = (e) => {
    e.preventDefault();
    props.onNext()
  }

  return (
    <div className="question">
    
    <h2>{props.question.question}</h2>
    
    <form onSubmit={handleQuestionNext}>
    {props.question.answers.map((answer) => 
    <label key={answer.id}> 
    <input type="radio" name="answer" value={answer.value}/>
    {answer.text}
    </label>
    )}
    <button>Zpět</button>
    <button type="submit">Další</button>
    </form>
    </div>
  )
};

export default Question;