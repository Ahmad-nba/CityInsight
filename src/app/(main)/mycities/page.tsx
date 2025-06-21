"use client";

import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useMyCitiesStore } from "@features/savedCities/store/store";

export default function Page() {
  const cities = useMyCitiesStore((state) => state.cities);

  return (
    <section className="p-4 max-w-6xl mx-auto">
      <div id="topnav" className="mb-4 md:mb-6">
        <Link
          href="/"
          className="flex items-center space-x-1 md:space-x-2 hover:opacity-80 transition-opacity"
        >
          <IoMdArrowRoundBack className="text-lg md:text-xl" />
          <h1 className="font-semibold md:text-lg">Back</h1>
        </Link>
      </div>

      <h2 className="text-lg font-semibold mb-2 md:text-xl md:mb-4 lg:text-2xl">
        Your Cities
      </h2>

      <section className="grid gap-2 sm:gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cities.length === 0 ? (
          <p className="text-gray-400 sm:col-span-2 md:col-span-3 lg:col-span-4 py-4 text-center">
            You haven't added any cities yet.
          </p>
        ) : (
          cities.map((city) => (
            <Link
              key={city}
              href={`/insight/${encodeURIComponent(city)}`}
              className="p-3 rounded shadow bg-acc2 text-black hover:bg-acc1/90 transition
                         sm:p-4 md:text-lg flex items-center min-h-[64px]"
            >
              {city.charAt(0).toUpperCase() + city.slice(1)}
            </Link>
          ))
        )}
      </section>
    </section>
  );
}
