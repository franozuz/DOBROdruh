import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Result = ({ result }) => {
  return (
    <div className="calculator-result">
      <div className="calculator-comparison">
        <h2>
          Tvá uhlíková stopa je: {result} kg CO
          <sub>2</sub>e
        </h2>
        <p>
          Abychom zastavili změnu klimatu, maximální množství CO2, které může
          vyprodukovat jedna osoba za rok je:
        </p>
        <p>
          600 kg CO<sub>2</sub>e
        </p>

        <p>
          Toto je průměrné roční množství CO2 vyprodukované jednou osobou v EU:
        </p>
        <p>
          8400 kg CO<sub>2</sub>e
        </p>
      </div>

      <div className="buttons-result">
        <Link to="/projects">
          <button className="btn-result1">
            Vykompenzuj <br /> stopu
          </button>
        </Link>
        <Link to="/calculator">
          <button className="btn-result2">Spočítat znovu</button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
