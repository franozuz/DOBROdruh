import React, { useState } from 'react';
import Result from '../Result';
import './style.css';

const roundTwo = (number) => {
  return Math.round(number * 100) / 100;
};

const calculateCarFuel = (distance, consumption) => {
  return roundTwo((consumption / 100) * distance * 2.39);
};

const calculateCarDiesel = (distance, consumption) => {
  return roundTwo((consumption / 100) * distance * 2.62);
};

const Calculator = () => {
  const [distance, setDistance] = useState(0);
  const [consumption, setConsumption] = useState(0);
  const [fuel, setFuel] = useState('gas');
  const [calculationResult, setCalculationResult] = useState(null);
  const [transport, setTransport] = useState('car');

  const isCar = transport === 'car';
  const isTrain = transport === 'train';

  const calculateCarResult = () => {
    if (fuel === 'gas') {
      const result = calculateCarFuel(distance, consumption);
      setCalculationResult(result);
    }
    if (fuel === 'diesel') {
      const result = calculateCarDiesel(distance, consumption);
      setCalculationResult(result);
    }
  };

  const calculateTrainResult = () => {
    const result = roundTwo((distance * 41) / 1000);
    setCalculationResult(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCar) {
      calculateCarResult();
    }
    if (isTrain) {
      calculateTrainResult();
    }
  };

  return !calculationResult ? (
    <form onSubmit={handleSubmit} className="calculator-form">
      <select onChange={(e) => setTransport(e.target.value)} name="transport">
        <option value="car">Auto</option>
        <option value="train">Train</option>
        {/* <option value="plane">Letadlo</option>
        <option value="bike">Kolo</option>
        <option value="byfoot">Pěšky</option> */}
      </select>
      <input
        onChange={(e) => setDistance(Number(e.target.value))}
        type="number"
        min="0"
        placeholder="Vzdálenost (km)"
      />
      {isCar && (
        <>
          <input
            onChange={(e) => setConsumption(Number(e.target.value))}
            type="number"
            min="0"
            placeholder="Spotřeba (l/100km)"
          />
          <select onChange={(e) => setFuel(e.target.value)} name="fuel">
            <option value="gas">Benzín</option>
            <option value="diesel">Diesel</option>
          </select>
        </>
      )}

      <button className="btn-calculator" type="submit">
        Spočítat
      </button>
    </form>
  ) : (
    <Result result={calculationResult} />
  );
};

export default Calculator;
