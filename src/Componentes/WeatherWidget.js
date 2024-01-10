import React, { useState } from 'react';

const WeatherDisplay = () => {
  const [weather, setWeather] = useState('');

  const fetchWeather = async () => {
   
    const data = await new Promise((resolve) => {
      setTimeout(() => resolve('Sunny'), 1000);
    });

    setWeather(data);
  };

  return (
    <div className="module">
      <h2>Weather Display</h2>
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && <p>Current Weather: {weather}</p>}
    </div>
  );
};

export default WeatherDisplay;
