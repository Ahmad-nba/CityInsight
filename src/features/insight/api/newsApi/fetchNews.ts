const NEWS_API_KEY = process.env.NEWS_DATA_API_KEY;
const BASE_URL = "https://newsdata.io/api/1/news";

export type NewsArticle = {
  title: string;
  link: string;
  source: string;
  image_url: string | null;
};

// Raw structure of each news item from NewsData API
type NewsApiItem = {
  title: string;
  link: string;
  source_id: string;
  image_url: string | null;
};

// Full shape of NewsData API response
type NewsApiResponse = {
  results: NewsApiItem[];
};

export default async function fetchNews(city: string): Promise<NewsArticle[]> {
  const url = `${BASE_URL}?apikey=${NEWS_API_KEY}&q=${city}&language=en&country=us&category=top`;

  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`News API error: ${errorText}`);
  }

  const data: NewsApiResponse = await res.json();

  return data.results.slice(0, 6).map((article) => ({
    title: article.title,
    link: article.link,
    source: article.source_id,
    image_url: article.image_url ?? null,
  }));
}
