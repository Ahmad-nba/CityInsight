type GeoCity = {
  city: string;
  // You can add more fields here if needed (e.g., population, id, etc.)
};

type GeoDBResponse = {
  data: GeoCity[];
  message?: string; // Add this to safely access message on error
};

const BASE_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

export async function fetchPopularCities(limit = 100): Promise<string[]> {
  const response = await fetch(`${BASE_URL}?limit=${limit}&sort=-population`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fb3fda30b8mshdb28a735d74d37dp167592jsnb185f03f637a",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  });

  const data: GeoDBResponse = await response.json();

  if (!response.ok) {
    const message = data.message ?? "Unknown error occurred";
    throw new Error(`Failed to fetch cities: ${message}`);
  }

  return data.data.map((city) => city.city);
}
