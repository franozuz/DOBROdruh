import React, { useState } from 'react';
import './style.css';

const Calculator = () => {
  const [distance, setDistance] = useState(0);
  const [consumption, setConsumption] = useState(0);
  const [fuel, setFuel] = useState('gas');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(distance, consumption, fuel);
  };

  return (
    <form onSubmit={handleSubmit} className="calculator-form">
      <select name="transport">
        <option value="car">Auto</option>
        {/* <option value="plane">Letadlo</option>
        <option value="train">Train</option>
        <option value="bike">Kolo</option>
        <option value="byfoot">Pěšky</option> */}
      </select>
      <input
        onChange={(e) => setDistance(Number(e.target.value))}
        type="number"
        min="0"
        placeholder="Vzdálenost (km)"
      />
      <input
        onChange={(e) => setConsumption(Number(e.target.value))}
        type="number"
        min="0"
        placeholder="Spotřeba (l/km)"
      />
      <select onChange={(e) => setFuel(Number(e.target.value))} name="fuel">
        <option value="gas">Benzín</option>
        <option value="diesel">Diesel</option>
      </select>

      <button className="btn-calculator" type="submit">
        Spočítat
      </button>
    </form>
  );
};

export default Calculator;
