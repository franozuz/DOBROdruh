import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
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
  const history = useHistory();
  const location = useLocation();

  const [distance, setDistance] = useState(0);
  const [consumption, setConsumption] = useState(0);
  const [fuel, setFuel] = useState('gas');
  const [transport, setTransport] = useState('car');
  const [passangers, setPassangers] = useState(1);
  const [trip, setTrip] = useState('one-way');

  const [calculationResult, setCalculationResult] = useState(null);

  useEffect(() => {
    const locationResult = location.state?.result;
    setCalculationResult(locationResult);
  }, [location.state]);

  const isCar = transport === 'car';
  const isTrain = transport === 'train';
  const isPlane = transport === 'plane';
  const isBike = transport === 'bike';
  const isByFoot = transport === 'byfoot';

  const displayResult = (result) => {
    history.push('/calculator/result', { result });
  };

  const calculateCarResult = () => {
    if (fuel === 'gas') {
      const result = calculateCarFuel(distance, consumption);
      displayResult(result);
    }
    if (fuel === 'diesel') {
      const result = calculateCarDiesel(distance, consumption);
      displayResult(result);
    }
  };

  const calculateTrainResult = () => {
    const result = roundTwo((distance * 41) / 1000);
    displayResult(result);
  };

  const calculatePlaneResult = () => {
    const indexCO2 = 4.64;
    const result = roundTwo((distance / 100) * indexCO2 * passangers);
    if (trip === 'one-way') {
      displayResult(result);
    }
    if (trip === 'round-trip') {
      displayResult(result * 2);
    }
  };

  const calculateNoco2Result = () => {
    const result = '0';
    displayResult(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCar) {
      calculateCarResult();
    }
    if (isTrain) {
      calculateTrainResult();
    }
    if (isPlane) {
      calculatePlaneResult();
    }
    if (isBike || isByFoot) {
      calculateNoco2Result();
    }
  };

  return !calculationResult ? (
    <form onSubmit={handleSubmit} className="calculator-form">
      <h3>
        CO2 Kalkulačka
        <br />
        <br />
      </h3>
      <select
        value={transport}
        onChange={(e) => setTransport(e.target.value)}
        name="transport"
      >
        <option value="car">Auto</option>
        <option value="train">Vlak</option>
        <option value="plane">Letadlo</option>
        <option value="bike">Kolo</option>
        <option value="byfoot">Pěšky</option>
      </select>

      <input
        onChange={(e) => setDistance(Number(e.target.value))}
        type="number"
        min="0"
        placeholder="Vzdálenost (km)"
        required
      />
      {isPlane && (
        <>
          <input
            onChange={(e) => setPassangers(Number(e.target.value))}
            type="number"
            min="1"
            placeholder="Počet pasažérů"
          />
          <select onChange={(e) => setTrip(e.target.value)} name="trip">
            <option value="one-way">Jednosměrný let</option>
            <option value="round-trip">Obousměrný let</option>
          </select>{' '}
        </>
      )}
      {isCar && (
        <>
          <input
            onChange={(e) => setConsumption(Number(e.target.value))}
            type="number"
            min="0"
            placeholder="Spotřeba (l/100km)"
            required
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
