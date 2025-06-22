import WeatherCard from "@features/insight/components/weatherCard";
import { fetchWeather } from "@features/insight/api/index";
import { FaTemperatureHigh, FaWind, FaTint, FaCloudSun } from "react-icons/fa";

export default async function WeatherPage({
  params,
}: {
  params: { city: string };
}) {
  const { city } = await Promise.resolve(params); // ✅ fix

  const weather = await fetchWeather(city);
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
    <div className="w-full flex flex-col space-y-4 rounded">
      <h2 className="text-base capitalize">{city}</h2>
      <h2 className="text-xl font-semibold">{weather.temperature}°C</h2>
      <div className="flex text-xs space-x-4">
        <h1>Humidity: {weather.humidity}%</h1>
        <h1>Wind: {weather.windSpeed} m/s</h1>
      </div>

      <section id="cards" className="grid gap-2 grid-cols-2">
        <WeatherCard
          title="Weather"
          value={weather.description}
          Icon={FaTemperatureHigh}
        />
        <WeatherCard
          title="Humidity"
          value={`${weather.humidity}%`}
          Icon={FaTint}
        />
        <WeatherCard
          title="Wind Speed"
          value={`${weather.windSpeed} m/s`}
          Icon={FaWind}
        />
        <WeatherCard
          title={weather.description}
          iconUrl={iconUrl}
          Icon={FaCloudSun}
        />
      </section>
    </div>
  );
}
