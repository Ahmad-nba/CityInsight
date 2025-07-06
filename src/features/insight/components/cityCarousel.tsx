"use client";

import Slider from "react-slick";
import Image from "next/image";
import { settings } from "@features/insight/lib/carousel";
import img from "@app/assets/vansHero.png"; 

const staticImages = [img, img, img]; // 

export default function Carousel() {
  return (
    <div className="w-full mx-auto max-w-4xl rounded-lg h-[200px] bg-amber-500 overflow-hidden">
      <Slider {...settings}>
        {staticImages.map((image, index) => (
          <div key={index} className="relative h-[200px] w-full">
            <Image
              src={image}
              alt={`City slide ${index + 1}`}
              fill 
              className="object-cover"
              priority={index === 0} // Preload first image for better UX
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
