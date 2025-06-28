import { ParamProps } from "@features/insight/typeSafety/paramProps";
import { Metadata } from "next";

export async function generateMetadata({params}: ParamProps): Promise<Metadata> {
  return {
    title: `${params.city}- CityInsight`,
    description: `Live data for ${params.city} including weather, news and fun facts.`,
  };
}
