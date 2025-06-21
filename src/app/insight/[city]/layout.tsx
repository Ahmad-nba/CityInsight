"use client";

import Footer from "@app/homeComponents/footer";
import "../../../app/globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import Carousel from "@features/insight/components/cityCarousel";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

import { useMyCitiesStore } from "@features/savedCities/store/store";
import toast from "react-hot-toast";
import ClientLayout from "./clientLayout";

export default function CityLayout({
  children,
}: {
  children: ReactNode;
  weather: ReactNode;
  news: ReactNode;
  images: ReactNode;
}) {
  // const { city } = useParams();
  // const pathname = usePathname();
  const params = useParams();
  const city = params.city as string;
  const pathname = usePathname();

  const navItems = [
    { label: "Weather", href: `/insight/${city}/weather`, id: 1 },
    { label: "News", href: `/insight/${city}/news`, id: 2 },
    { label: "Images", href: `/insight/${city}/images`, id: 3 },
  ];
  function handleAddCity(city: string) {
    const exists = useMyCitiesStore
      .getState()
      .cities.includes(city.toLowerCase());

    if (exists) {
      toast.error(`${city} is already in your cities.`);
    } else {
      useMyCitiesStore.getState().addCity(city);
      toast.success(`${city} added to My Cities`);
    }
  }

  return (
    <html>
      <body>
        <ClientLayout>
          <section className="p-6 space-y-4">
            {/* Top Nav */}
            <div className="flex justify-between">
              <Link href="/" className="flex items-center space-x-1">
                <IoMdArrowRoundBack />
                <h1 className="font-semibold">Back</h1>
              </Link>
              <button
                onClick={() => handleAddCity(city)}
                className="flex items-center space-x-1"
              >
                <IoIosAddCircleOutline />
                <h1 className="font-semibold">Add city</h1>
              </button>
            </div>

            {/* Carousel */}
            <Carousel />

            {/* City name */}
            <h2 className="font-semibold text-xl">
              {decodeURIComponent(city as string)}
            </h2>

            {/* Nav Tabs */}
            <nav className="flex space-x-4 mt-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`text-sm font-medium ${
                      isActive
                        ? "border-b-2 border-black text-black"
                        : "text-gray-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <section className="p-2 bg-acc2 rounded h-full ">
              {children}
            </section>
          </section>

          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
