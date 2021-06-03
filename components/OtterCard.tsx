import React from "react";
import Image from "next/image";

export interface OtterCardProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  body: string;
}

export default function OtterCard({ image, title, body }: OtterCardProps) {
  return (
    <div className="hover:shadow-lg border-l-4 border-transparent hover:border-blue-500  cursor-pointer relative rounded-md overflow-hidden card shadow-lg ">
      <div className="relative flex flex-col border-gray-200 rounded-lg`">
        <div className="relative px-4 py-10 shadow-lg sm:p-20">
          <div className="h-64 w-96">
            <Image
              layout="fill"
              objectFit="cover"
              src={image.src}
              alt={image.alt}
            />
          </div>
        </div>
        <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-end opacity-100 duration-300">
          <div className="font-medium text-2xl text-white mb-3">{title}</div>
        </div>
      </div>
    </div>
  );
}
