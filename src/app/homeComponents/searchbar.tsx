"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@app/reusableUI/button";
import cities from "@features/insight/data/cities.json";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Create a Set for efficient lowercase lookups
  const validCitiesSet = new Set(cities.map((c) => c.toLowerCase()));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const city = query.toLowerCase().trim();

    if (!validCitiesSet.has(city)) {
      alert("City not recognized. Try a major city like London, Tokyo, etc.");
      return;
    }

    router.push(`/insight/${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-row w-full gap-3 max-w-2xl mx-auto"
    >
      <div className="flex-1 rounded-xl shadow-lg overflow-hidden relative">
        <input
          required
          type="text"
          list="cities"
          placeholder="Search for a city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 text-acc2 border-2 rounded-3xl border-white focus:outline-none "
        />

        {/* Datalist suggestions */}
        <datalist id="cities">
          {cities.map((city) => (
            <option key={city} value={city} />
          ))}
        </datalist>
      </div>

      <Button
        type="submit"
        className="px-3 py-3 sm:px-6 sm:py-0 bg-acc1 text-white font-semibold z-20 leading-tight hover:bg-acc1/90 transition-colors rounded-2xl sm:rounded-xl shadow-lg whitespace-nowrap"
      >
        Search
      </Button>
    </form>
  );
}
