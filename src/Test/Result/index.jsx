import React from 'react';
import './style.css';

const Result = (props) => {
  return (
    <div className="result">
      <h1>SI ZLODRUH!!!!!!!</h1>
      <h2>{props.result}</h2>
    </div>
  );
};

export default Result;
