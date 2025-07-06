"use client";

import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useMyCitiesStore } from "@features/savedCities/store/store";

export default function Page() {
  const cities = useMyCitiesStore((state) => state.cities);

  return (
    <section className="p-4 max-w-6xl mx-auto min-h-[80vh] flex flex-col">
      {/* Top Nav */}
      <div id="topnav" className="mb-6">
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <IoMdArrowRoundBack className="text-xl" />
          <h1 className="font-semibold text-lg">Back</h1>
        </Link>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-6">Your Cities</h2>

      {/* Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-grow">
        {cities.length === 0 ? (
          <div className="col-span-full py-20 text-center text-gray-400 text-lg">
            You have not added any cities yet.
          </div>
        ) : (
          cities.map((city) => (
            <Link
              key={city}
              href={`/insight/${encodeURIComponent(city)}`}
              className="bg-acc2 hover:bg-acc1/90 transition-all duration-200
                         rounded-xl shadow-md p-5 flex items-center justify-center text-center
                         text-black font-medium capitalize text-base sm:text-lg min-h-[96px]"
            >
              {city}
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
