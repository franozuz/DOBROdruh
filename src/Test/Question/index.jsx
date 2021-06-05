import React from "react";
import './style.css'; 


const Question = (props) => {
  return (
    <div className="question">
    
    <h2>{props.question.question}</h2>
    
    <form>
    {props.question.answers.map((answer) => 
    <label key={answer.id}> 
    <input type="radio" name="answer" value={answer.value}/>
    {answer.text}
    </label>
    )}
    </form>
    </div>
  )
};

export default Question;