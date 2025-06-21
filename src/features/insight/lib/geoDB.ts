const BASE_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

type GeoCity = {
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
  data: GeoCity[];
  metadata: {
    currentOffset: number;
    totalCount: number;
  };
};

export async function fetchPopularCities(limit = 100): Promise<string[]> {
  const response = await fetch(`${BASE_URL}?limit=${limit}&sort=-population`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fb3fda30b8mshdb28a735d74d37dp167592jsnb185f03f637a",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    const message =
      typeof json === "object" && "message" in json
        ? json.message
        : "Unknown error";
    throw new Error(`Failed to fetch cities: ${message}`);
  }

  // ✅ Now safely assert json is GeoDBResponse
  const data = json as GeoDBResponse;
  return data.data.map((city) => city.city);
}
