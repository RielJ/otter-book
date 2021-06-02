import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center flex-grow"
      style={{
        maxHeight: "100vh",
        minHeight: "100vh",
      }}
    >
      <main className="flex flex-col items-center justify-center flex-grow px-20 text-center max-w-screen-lg text-white ">
        <h1 className="text-7xl font-bold">
          Welcome to <span className="text-blue-600">Otter</span> World.
        </h1>
        <h2 className="text-2xl my-4">
          Brighten up your day with this wonderful otter images.
        </h2>
        <p className="my-2 text-lg">
          Singapore has a lot of otters. Unfortunately for the poor guys, no one
          knows their names, or anything about them. They run around all over
          the place, being cute and happy, but so mysterious. So we’re going to
          fix that, and build a small otter social network.
        </p>
        <Link href="/otters">
          <a className="px-6 py-2 bg-blue-600 font-bold text-lg rounded-3xl text-white hover:bg-blue-700 hover:shadow-lg">
            Proceed
          </a>
        </Link>
      </main>
    </div>
  );
}
