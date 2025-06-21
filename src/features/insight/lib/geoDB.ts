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

  console.log("Status:", response.status);
  console.log("Headers:", response.headers);

  const data: GeoDBResponse = await response.json();
  console.log("Body:", JSON.stringify(data, null, 2));

  if (!response.ok) {
    throw new Error("Failed to fetch cities: " + (data as any).message); // fallback in case message isn't typed
  }

  return data.data.map((city) => city.city);
}
