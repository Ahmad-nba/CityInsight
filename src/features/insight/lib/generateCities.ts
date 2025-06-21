// features/city/lib/generateCityList.ts
import dotenv from "dotenv";
dotenv.config();
console.log("Loaded API Key:", process.env.GEODB_API_KEY);


import { fetchPopularCities } from "./geoDB";
import fs from "fs";
import path from "path";

async function main() {
  try {
    const cities = await fetchPopularCities(10);
    const filePath = path.join(__dirname, "..", "data", "cities.json");

    fs.writeFileSync(filePath, JSON.stringify(cities, null, 2));
    console.log(`✅ Saved ${cities.length} cities to cities.json`);
  } catch (err) {
    console.error("❌ Error generating cities list:", err);
  }
}

main();
