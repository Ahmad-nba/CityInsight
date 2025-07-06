import { Metadata } from "next";
import "../../app/globals.css";
import NavBar from "../homeComponents/navbar";
import Footer from "../homeComponents/footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "CityInsight",
    template: "CityInsight - %s",
  },
  description: "Get a glimpse into the city atmosphere",
  keywords: ["city", "weather", "news", "images", "climate", "city insights"],
  other: {
    author: "Ahamada Shamuran",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-acc2 p-2">
          <NavBar />
        </header>
        {children}
        <Toaster position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
