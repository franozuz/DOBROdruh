import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

const Result = () => {
  const history = useHistory();
  const [displayResult, setDisplayResult] = useState(null);

  useEffect(() => {
    const result = localStorage.getItem('result');
    if (result) {
      setDisplayResult(result);
    }
  }, []);

  const handleResetTest = () => {
    localStorage.clear();
    history.push('/test/1');
  };

  return (
    <div className="result">
      <h1>SI ZLODRUH!!!!!!!</h1>
      <h2>{displayResult}</h2>
      <button onClick={handleResetTest}>TEST ZNOVU</button>
      <button>kuk tipy</button>
      <button>kuk projekty</button>
    </div>
  );
};

export default Result;
