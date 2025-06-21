"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MyCitiesState {
  cities: string[];
  addCity: (city: string) => void;
  removeCity: (city: string) => void;
}

export const useMyCitiesStore = create<MyCitiesState>()(
  persist(
    (set, get) => ({
      cities: [],
      addCity: (city) => {
        const normalized = city.toLowerCase();
        const exists = get().cities.includes(normalized);
        if (!exists) {
          set((state) => ({ cities: [...state.cities, normalized] }));
        }
      },
      removeCity: (city) => {
        const normalized = city.toLowerCase();
        set((state) => ({
          cities: state.cities.filter((c) => c !== normalized),
        }));
      },
    }),
    {
      name: "my-cities-storage", // name of item in localStorage
    }
  )
);
