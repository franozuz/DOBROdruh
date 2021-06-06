import React from 'react';
import './style.css';

const Calculator = () => {
  return (
    <form className="calculator-form">
      <select name="druh dopravy">
        <option value="plane">Letadlo</option>
        <option value="car">Auto</option>
        <option value="train">Train</option>
        <option value="bike">Kolo</option>
        <option value="byfoot">Pěšky</option>
      </select>
      <input type="number" placeholder="Vzdálenost (km)" />
      {/* <input type="text" placeholder="Kam" />
       */}
      <button className="btn-calculator" type="submit">
        Spočítat
      </button>
    </form>
  );
};

export default Calculator;
