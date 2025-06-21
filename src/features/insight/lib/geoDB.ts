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

  // ✅ Read and log JSON only once
  const data = await response.json();
  console.log("Body:", JSON.stringify(data, null, 2));

  if (!response.ok) {
    throw new Error("Failed to fetch cities: " + data.message);
  }

  return data.data.map((city: any) => city.city);
}
