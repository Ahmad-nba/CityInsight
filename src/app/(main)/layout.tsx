import { Metadata } from "next";
import "../../app/globals.css";
import NavBar from "../homeComponents/navbar";
import Footer from "../homeComponents/footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "CityInsight",
  description: "Get a glimpse into the city atmosphere",
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
