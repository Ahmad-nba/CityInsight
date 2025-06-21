import { fetchImages } from "@features/insight/api";
import Image from "next/image";

export default async function Page({ params }: { params: { city: string } }) {
  const images = await fetchImages(params.city);

  return (
    <section className="grid gap-2 grid-cols-2">
      {images.map((image) => (
        <div
          key={image.id}
          className="rounded overflow-hidden shadow relative w-full aspect-square"
        >
          <Image
            src={image.url}
            alt={image.alt_description ?? "City image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority // optionally improve LCP
          />
        </div>
      ))}
    </section>
  );
}
