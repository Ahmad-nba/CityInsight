import { ParamProps } from "@features/insight/typeSafety/paramProps";
import { Metadata } from "next";

export function generateMetadata({ params }: ParamProps): Metadata {
  return {
    title: `${params.city}- CityInsight`,
    description: `Live data for ${params.city} including weather, news and fun facts.`,
  };
}