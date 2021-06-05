import React from "react";
import Question from "./Question";
import questions from "./questions.json"


const Test = () => {
  const question = questions[0]

  return (
  <Question question={question} />
  );
}


export default Test;