import { fetchImages } from "@features/insight/api";

export default async function Page({ params }: { params: { city: string } }) {
  const { city } = params;
  const images = await fetchImages(city);
  return (
    <section className="grid gap-2 grid-cols-2">
      {images.map((images) => (
        <div key={images.id} className="rounded overflow-hidden shadow">
          <img
            src={images.url}
            alt={images.alt_description ?? "City image"}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </section>
  );
}
