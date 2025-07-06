import WeatherCard from "@features/insight/components/weatherCard";
import { fetchWeather } from "@features/insight/api/index";
import { FaTemperatureHigh, FaWind, FaTint, FaCloudSun } from "react-icons/fa";
import { PageProps } from "../images/page";
import cities from "@features/insight/data/cities.json";

export async function generateStaticParams() {
  return cities.map((city) => ({ city }));
}

export default async function WeatherPage(props: PageProps) {
  const params = await props.params;
  const { city } = params;
  const weather = await fetchWeather(city);
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 flex flex-col space-y-6">
      {/* City Name & Summary */}
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold capitalize text-gray-800">{city}</h2>
        <h2 className="text-4xl font-semibold text-acc1">
          {weather.temperature}°C
        </h2>
        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <span>Humidity: {weather.humidity}%</span>
          <span>Wind: {weather.windSpeed} m/s</span>
        </div>
      </div>

      {/* Weather Cards */}
      <section
        id="cards"
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
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
