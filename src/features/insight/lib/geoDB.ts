type GeoCity = {
  city: string;
  [key: string]: unknown; // ← keep it flexible for other fields
};

type GeoDBResponse = {
  data: GeoCity[];
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

  console.log("Status:", response.status);
  console.log("Headers:", response.headers);

  const data: GeoDBResponse = await response.json();
  console.log("Body:", JSON.stringify(data, null, 2));

  if (!response.ok) {
    throw new Error("Failed to fetch cities: " + (data as any)?.message);
  }

  return data.data.map((city) => city.city);
}
