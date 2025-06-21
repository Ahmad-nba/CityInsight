'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import { settings } from '@features/insight/lib/carousel';
import img from '@app/assets/vansHero.png'; // replace with real image paths later

const staticImages = [img, img, img]; // 3 slides using the same image for now

export default function Carousel() {
  return (
    <div className="w-full mx-auto max-w-4xl rounded-lg h-[200px] bg-amber-500 overflow-hidden">
      <Slider {...settings}>
        {staticImages.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`City slide ${index + 1}`}
              className="w-full h-[200px] object-cover"
              width={1000}
              height={400}
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
