import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function BaseHeader({ home = false }) {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full bg-transparent z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white-50 blur shadow-lg bg-black bg-opacity-30"
      }`}
    >
      <div className="header sticky top-0 opacity-95 z-10">
        <div className="h-16 flex sm:w-11/12 xl:w-2/3 lg:w-3/4 md:w-5/6 justify-between m-auto items-center px-1">
          <div className="leading-3 inline-block  font-sans">
            <Link href="/">
              <a className="text-white hover:text-blue-400 text-3xl font-bold">
                OtterBook
              </a>
            </Link>
          </div>
          <nav className="navbar flex justify-between items-center">
            {home && (
              <Link href="/otters/create">
                <a className="text-md font-bold px-6 py-2 bg-blue-600  text-white rounded-md hover:bg-blue-700 hover:shadow-inner shadow-md">
                  Add New Otter
                </a>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
