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
    <div className="flex items-center space-x-3 p-4 rounded-xl shadow-md bg-white">
      {/* Icon (font-based or image-based) */}
      <div className="w-8 h-8 flex-shrink-0">
        {Icon && <Icon />}
        {iconUrl && (
          <Image
            src={iconUrl}
            alt={title}
            width={32}
            height={32}
            className="object-contain"
          />
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <h2 className="text-sm font-medium text-gray-800">{title}</h2>
        {value && <span className="text-xs text-gray-500">{value}</span>}
      </div>
    </div>
  );
}
