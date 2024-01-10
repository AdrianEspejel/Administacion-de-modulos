import React, { useState } from 'react';
import ClickCounter from './Componentes/ClickCounter';
import UserDataCapture from './Componentes/UserDataCapture';
import DogAgeCalculator from './Componentes/DodgeCalculator';
import WeatherWidget from './Componentes/WeatherWidget';

const ModuleManager = () => {
  const [activeModule, setActiveModule] = useState(null);

  const renderModule = () => {
    switch (activeModule) {
      case 'clickCounter':
        return <ClickCounter />;
      case 'userDataCapture':
        return <UserDataCapture />;
      case 'dogAgeCalculator':
        return <DogAgeCalculator />;
      case 'weatherWidget':
        return <WeatherWidget />;
      default:
        return <p>Seleccione un módulo para empezar.</p>;
    }
  };

  return (
    <div>
      <h1>Dynamic Module Manager</h1>
      <div>
        <button onClick={() => setActiveModule('clickCounter')}>Contador de Clicks</button>
        <button onClick={() => setActiveModule('userDataCapture')}>Captura de Datos de Usuario</button>
        <button onClick={() => setActiveModule('dogAgeCalculator')}>Calculadora de Edad Canina</button>
        <button onClick={() => setActiveModule('weatherWidget')}>Widget del Clima</button>
      </div>
      {renderModule()}
    </div>
  );
};

export default ModuleManager;