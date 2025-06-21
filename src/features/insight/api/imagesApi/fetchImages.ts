const UNSPLASH_KEY = process.env.UNSPLASH_API_KEY;
const BASE_URL = "https://api.unsplash.com/search/photos";

export type UnsplashImage = {
  id: string;
  alt_description: string | null;
  url: string;
};
type UnsplashRawImage = {
  id: string;
  alt_description: string | null;
  urls: {
    regular: string;
  };
};


export default async function fetchImages(city: string): Promise<UnsplashImage[]> {
  const res = await fetch(`${BASE_URL}?query=${city}&per_page=6&client_id=${UNSPLASH_KEY}`);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Unsplash API error: ${errorText}`);
  }

  const data = await res.json();

  return data.results.map((img: UnsplashRawImage) => ({
    id: img.id,
    alt_description: img.alt_description,
    url: img.urls.regular,
  }));
}
