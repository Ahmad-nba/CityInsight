import { MetadataRoute } from "next";
import cities from "@features/insight/data/cities.json";

export const baseurl = "https://city-insight-ddsj.vercel.app/";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cityRoutes = ["weather", "news", "images"];

  const dynamicCityUrls = cities.flatMap((cityName) => {
    const encodedCity = encodeURIComponent(cityName);
    return cityRoutes.map((route) => ({
      url: `${baseurl}/insight/${encodedCity}/${route}`,
      lastModified: new Date().toISOString(),
    }));
  });
  const staticUrls = [
    {
      url: `${baseurl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseurl}/mycities`,
      lastModified: new Date().toISOString(),
    },
  ];
  return [...staticUrls, ...dynamicCityUrls];
}
