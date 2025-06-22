const UNSPLASH_KEY = process.env.UNSPLASH_API_KEY;
const BASE_URL = "https://api.unsplash.com/search/photos";

// Your app-level image model
export type UnsplashImage = {
  id: string;
  alt_description: string | null;
  url: string;
};

// Shape of the Unsplash API image item
type UnsplashApiImage = {
  id: string;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
};

// Shape of the full Unsplash API response
type UnsplashApiResponse = {
  results: UnsplashApiImage[];
};

export default async function fetchImages(
  city: string
): Promise<UnsplashImage[]> {
  const res = await fetch(
    `${BASE_URL}?query=${city}&per_page=6&client_id=${UNSPLASH_KEY}`
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Unsplash API error: ${errorText}`);
  }

  const data: UnsplashApiResponse = await res.json();

  return data.results.map((img) => ({
    id: img.id,
    alt_description: img.alt_description,
    url: img.urls.regular,
  }));
}
