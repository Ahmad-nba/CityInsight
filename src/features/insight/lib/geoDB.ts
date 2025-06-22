const API_KEY = process.env.GEODB_API_KEY;
const BASE_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

type GeoDBCity = {
  id: number;
  city: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  latitude: number;
  longitude: number;
  population: number;
};

type GeoDBResponse = {
  data: GeoDBCity[];
  metadata: {
    currentOffset: number;
    totalCount: number;
  };
  message?: string;
};

export async function fetchPopularCities(limit = 100): Promise<string[]> {
  const response = await fetch(`${BASE_URL}?limit=${limit}&sort=-population`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY || "",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  });

  const data: GeoDBResponse = await response.json();

  if (!response.ok) {
    throw new Error(
      "Failed to fetch cities: " + (data.message ?? "Unknown error")
    );
  }

  return data.data.map((city) => city.city);
}
