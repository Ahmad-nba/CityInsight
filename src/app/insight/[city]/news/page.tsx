import { fetchNews } from "@features/insight/api";
import { news } from "@features/insight/lib/mocknews";
import Link from "next/link";
import { PageProps } from "../images/page";

export default async function Page(props:PageProps) {
  const { city } = props.params;
  const articles = await fetchNews(city);
  return (
    <section className="space-y-4">
      {articles.map((news) => (
        <Link
          href={news.link}
          key={news.link}
          className="rounded p-4 shadow overflow-hidden bg-white"
        >
          <h3 className="font-semibold mb-2 line-clamp-1">{news.title}</h3>
          <div className="relative max-h-[12dvh] overflow-hidden">
            <p className="text-sm pr-6">{news.source}</p>

            {/* Gradient fade + 4 dots indicator */}
            <div className="absolute bottom-0 right-0 w-full h-6 bg-gradient-to-t from-white to-transparent" />
            <div className="absolute bottom-0 right-0 bg-white pl-2 text-sm">
              ....
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
