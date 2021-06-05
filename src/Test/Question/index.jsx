import React from "react";
import './style.css'; 


const Question = (props) => {
  return (
    <>
    <h2>{props.question.question}</h2>
    
    <form>
    {props.question.answers.map((answer) => 
    <label key={answer.id}> 
    <input type="radio" name="question" value={answer.value}/>
    {answer.text}
    </label>
    )}
    </form>
    </>
  )
};

export default Question;