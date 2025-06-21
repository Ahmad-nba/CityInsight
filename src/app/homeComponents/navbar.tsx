"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const links = [
    { route: "Home", href: "/", id: 1 },
    { route: "My cities", href: "/mycities", id: 2 },
  ];

  return (
    <nav className="flex justify-between mx-1.5 p-1.5 sm:p-2 sm:mx-6 ">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
        CITY INSIGHT
      </h1>
      <ul className="flex justify-center space-x-2 sm:space-x-4">
        {links.map((link) => {
          const path = usePathname();
          const home = link.href === "/";
          const isActive = home ? path === "/" : path.startsWith(link.href);
          return (
            <Link
              key={link.id}
              href={link.href}
              className={
                isActive
                  ? "text-base sm:text-lg md:text-xl border-b-2 border-acc1 text-gray-400 font-medium "
                  : "text-base sm:text-lg md:text-xl text-gray-400 font-medium "
              }
            >
              {link.route}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
