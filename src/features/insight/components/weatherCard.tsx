"use client";

import { ComponentType } from "react";
import Image from "next/image";

type WeatherCardProps = {
  title: string;
  value?: string;
  Icon?: ComponentType;
  iconUrl?: string; // OpenWeather icon URL
};

export default function WeatherCard({
  title,
  value,
  Icon,
  iconUrl,
}: WeatherCardProps) {
  return (
    <section className="shadow rounded-lg p-3 flex items-center space-x-3">
      {Icon && <Icon />}
      {iconUrl && (
        <div className="relative w-8 h-8">
          <Image
            src={iconUrl}
            alt={title}
            fill
            className="object-contain"
            sizes="32px"
            priority={false}
          />
        </div>
      )}
      <div className="flex flex-col">
        <h2 className="font-semibold text-sm">{title}</h2>
        {value && <span className="text-xs text-gray-600">{value}</span>}
      </div>
    </section>
  );
}
