import Image from "next/image";
import React from "react";

export default function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-48 lg:w-32 cursor-pointer  p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute opacity-0 lg:border-2 aspect-square border-green-500 shadow-sm lg:opacity-100 rounded-full z-50 top-5 object-cover"
        src={profile}
        width={40}
        height={40}
        alt="pic"
      />
      <Image
        className="border-2 border-green-500 shadow-sm lg:border-none object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        alt="pic"
        fill
      />

      <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  );
}
