import React, { useState } from 'react';
import './celtofa.css';
function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (value) => {
    const converted = (value * 9/5) + 32;
    setFahrenheit(converted || '');
  };
 return (
    <div className='celtofah'>
      <label className='cel'>Celsius:
        <input type="number" value={celsius} onChange={(e) => setCelsius(e.target.value)}
          onBlur={(e) => handleCelsiusChange(e.target.value)}
        />
      </label>
      <label className='fah'> Fahrenheit:
        <input
          type="number" value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)}
          onBlur={(e) => {
            const converted = (e.target.value - 32) * 5/9;
            setCelsius(converted || '');
          }}
        />
      </label>
    </div>
  );
}
export default TemperatureConverter;