export async function fetchWeather(city: string) {
  const API_KEY = process.env.WEATHER_API_KEY;
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Weather API error: ${errorText}`);
    }

    const data = await response.json();

    return {
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    };
  } catch (err) {
    console.error("🔥 Weather fetch failed:", err);
    throw err;
  }
}
