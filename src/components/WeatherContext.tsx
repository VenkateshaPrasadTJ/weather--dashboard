import React, { createContext, useContext, useState } from 'react';

type WeatherUnit = 'Celsius' | 'Fahrenheit';

interface WeatherContextType {
  unit: WeatherUnit;
  toggleUnit: () => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [unit, setUnit] = useState<WeatherUnit>('Celsius');

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'Celsius' ? 'Fahrenheit' : 'Celsius'));
  };

  return (
    <WeatherContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeatherContext must be used within a WeatherContextProvider');
  }
  return context;
};