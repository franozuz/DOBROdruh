import React, { useState, useEffect } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';
import './style.css';

const Result = () => {
  const history = useHistory();
  const [displayResult, setDisplayResult] = useState(null);

  const result = localStorage.getItem('result');
  if(!result) {
    return <Redirect to="/test/1" />
  }

  useEffect(() => {
    
    if (result) {
      setDisplayResult(result);
    }
  }, [result]);

  const handleResetTest = () => {
    localStorage.clear();
    history.push('/test/1');
  };

  return (
    <section className="result">
      <div className="result__box">
        <h1>Jejda, jseš tak trochu ZLOdruh!</h1>
        <h3>Získal si {displayResult} bodů.</h3>
        <p>
          Tvoje DOBROdružné skóre není moc vysoké. Ale jsi tady a to je dobrý
          začátek. Už jen tím, že se o tuto problematiku zajímáš, dostáváš 10
          plusových bludišťáků. Ješte pár a bude z tebe DOBROdruh! Tak koukni na
          seznam tipů, jak cestovat udržitelněji a získat nějaké ty body navíc.
        </p>
        <div className="result__nav">
          <button className="result__button" onClick={handleResetTest}>Reštart testu</button>
          <Link to="/tips">
            <button className="result__button">Tipy na udržitelné cestování</button>
          </Link>
          <Link to="/projects">
            <button className="result__button">EKO projekty</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Result;
