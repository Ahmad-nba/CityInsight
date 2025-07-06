import { fetchNews } from "@features/insight/api";
import Link from "next/link";
import { PageProps } from "../images/page";
import cities from "@features/insight/data/cities.json";

export async function generateStaticParams() {
  return cities.map((city) => ({ city }));
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { city } = params;
  const articles = await fetchNews(city);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((news) => (
        <Link
          href={news.link}
          key={news.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200 bg-white overflow-hidden flex flex-col"
        >
          {news.image_url && (
            <img
              src={news.image_url}
              alt={news.title}
              className="w-full h-40 object-cover"
            />
          )}

          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-semibold text-base mb-2 line-clamp-2">
              {news.title}
            </h3>
            <div className="mt-auto flex justify-between items-center text-sm text-gray-500">
              <span className="truncate">{news.source}</span>
              <span className="text-xs text-gray-400">Read more →</span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
