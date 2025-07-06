import { MetadataRoute } from "next";
import { baseurl } from "./sitemap";

export default function Robot(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: `${baseurl}/sitemap.xml`
  };
}
