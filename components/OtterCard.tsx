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
    <div className="hover:shadow-lg border-l-4 border-transparent hover:border-blue-500  cursor-pointer relative rounded-md overflow-hidden card shadow-lg">
      <div className="relative flex flex-col border-gray-200 rounded-lg`">
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={600}
          className="max-w-full h-auto"
        />
        <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-end opacity-100 duration-300">
          <div className="font-medium text-2xl text-white mb-3">{title}</div>
        </div>
      </div>
    </div>
  );
}
