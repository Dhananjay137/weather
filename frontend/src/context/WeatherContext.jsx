import { createContext, useContext } from "react";
import useWeatherApi from "../hooks/useWeatherApi";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const { weather, loading, error, fetchWeather } = useWeatherApi();

  return (
    <WeatherContext.Provider value={{ weather, loading, error, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}
