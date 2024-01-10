import React, { useState } from 'react';

const DogAgeCalculator = () => {
  const [humanAge, setHumanAge] = useState('');
  const [dogAge, setDogAge] = useState('');

  const calculateDogAge = () => {
    const dogAgeResult = parseFloat(humanAge) * 7;
    setDogAge(isNaN(dogAgeResult) ? 'Ingrese una edad válida' : dogAgeResult);
  };

  return (
    <div>
      <h2>Dog Age Calculator</h2>
      <label>Edad Humana: </label>
      <input type="text" value={humanAge} onChange={(e) => setHumanAge(e.target.value)} />
      <br />
      <button onClick={calculateDogAge}>Calcular Edad Canina</button>
      <p>Edad Canina: {dogAge}</p>
    </div>
  );
};

export default DogAgeCalculator;