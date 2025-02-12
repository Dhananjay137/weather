import { useState } from "react";

export default function useWeatherApi() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:8080/api/weather/data/${city}`); // ✅ Ensure backend is running
      const data = await response.json();
      console.log("Fetched Data:", data); // ✅ Debugging to check response

      setWeather({
        city: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].main,
        windSpeed : data.wind.speed,
        humidity: data.main.humidity,
      });

    } catch (err) {
      setError("Failed to fetch weather data");
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, fetchWeather };
}
