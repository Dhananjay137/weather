import { useState } from "react";
import { useWeather } from "../context/WeatherContext";

export default function SearchBox() {
  const [city, setCity] = useState("");
  const { fetchWeather } = useWeather();

  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeather(city);
      setCity("");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-4 rounded-xl shadow-md w-full max-w-md">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto flex-1"
        onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Press Enter to search
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full sm:w-auto"
      >
        Search
      </button>
    </div>
  );
}
