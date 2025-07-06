import { fetchImages } from "@features/insight/api";
import cities from "@features/insight/data/cities.json";

export async function generateStaticParams() {
  return cities.map((city) => ({ city }));
}

export type PageProps = {
  params: Promise<{ city: string }>;
};

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { city } = params;
  const images = await fetchImages(city);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02]"
        >
          <img
            src={image.url}
            alt={image.alt_description ?? "City image"}
            className="w-full h-48 object-cover"
          />
        </div>
      ))}
    </section>
  );
}
