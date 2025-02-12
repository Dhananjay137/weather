import SearchBox from "../components/SearchBox";
import WeatherDisplay from "../components/WeatherDisplay";
import { useWeather } from "../context/WeatherContext";
import { useEffect } from "react";

export default function WeatherPage() {
  const { weather, loading, error, fetchWeather } = useWeather();

  useEffect(() => {
    // Fetch weather data for Kareli on component mount
    fetchWeather("Kareli");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 min-h-[350px] flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Weather App
        </h1>
        {/* Search Box */}
        <div className="mb-6">
              <SearchBox />
            </div>
        
        {/* Show Loading */}
        {loading ? (
          <p className="text-lg text-gray-600 text-center">Loading...</p>
        ) : error ? (
          <p className="text-lg text-red-500 text-center">{error}</p>
        ) : (
          <>
            {/* Weather Display */}
            <div className="mt-6">
              <WeatherDisplay />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
