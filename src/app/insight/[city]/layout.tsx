import { ReactNode } from "react";
import ClientLayout from "./clientLayout";
import { Metadata } from "next";
import { PageProps } from "./images/page";



export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { city } = params;
  return {
    title: `CityInsight - ${city}`,
    description: `Get the insight of ${city}`,
    keywords: [
      city,
      `${city} weather`,
      `${city} news`,
      `${city} climae`,
      `${city} updates`,
    ],
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
