import { useWeather } from "../context/WeatherContext";

export default function WeatherDisplay() {
  const { weather } = useWeather();

  if (!weather) return null;

  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case "clear":
        return "/icons/sunny.png";
      case "clouds":
        return "/icons/cloudy.png";
      case "rain":
        return "/icons/rainy.png";
      case "snow":
        return "/icons/snowy.png";
      case "haze":
      case "mist":
      case "fog":
        return "/icons/haze.png";
      default:
        return "/icons/sunny.png";
    }
  };

  return (
    <div className="mt-6 p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
        {weather.city}
      </h2>

      {/* Weather Icon & Temperature */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <img
          src={getWeatherIcon(weather.condition)}
          alt={weather.condition}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
        />
        <p className="text-3xl sm:text-4xl font-semibold text-gray-700">
          {Math.round(weather.temperature - 273.15)}°C
        </p>
      </div>

      <p className="text-lg text-gray-600 capitalize mt-2">{weather.condition}</p>

      {/* Weather Details */}
      <div className="mt-4 grid grid-cols-2 gap-4 w-full px-6 sm:px-10 md:px-12">
        <div className="text-center">
          <p className="text-sm text-gray-500">Wind Speed</p>
          <p className="text-lg font-medium text-gray-700">{weather.windSpeed} m/s</p>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">Humidity</p>
          <p className="text-lg font-medium text-gray-700">{weather.humidity}%</p>
        </div>
      </div>
    </div>
  );
}
