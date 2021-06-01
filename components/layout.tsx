import React from "react";
// import Navbar from "./navbar";
import Link from "next/link";

export interface LayoutProps {
  home?: boolean;
}

const Layout: React.SFC<LayoutProps> = ({ children, home = false }) => {
  return (
    <div className="bg-blue-50 full-height">
      <style jsx>{`
        .full-height {
          min-height: 100vh !important;
          height: 100vh !important bg-opacity-90;
        }
      `}</style>
      <div className="header sticky top-0 opacity-95 z-10 bg-blue-100">
        <div className="h-20 flex sm:w-11/12 xl:w-2/3 lg:w-3/4 md:w-5/6 justify-between m-auto items-center">
          <div className="leading-3 inline-block text-3xl font-bold font-sans">
            {!home && (
              <Link href="/otters/">
                <a className="mr-5 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 inline-block cursor-pointer bg-blue-600  text-white hover:bg-blue-700 rounded-md"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                  </svg>
                </a>
              </Link>
            )}
            <Link href="/">
              <a className="hover:text-blue-600">OtterBook</a>
            </Link>
          </div>
          <nav className="navbar flex justify-between items-center">
            {home && (
              <Link href="/otters/create">
                <a className="text-lg font-bold px-5 py-2 bg-blue-600  text-white rounded-md hover:bg-blue-700 hover:shadow-inner shadow-md">
                  Add Otter
                </a>
              </Link>
            )}
          </nav>
        </div>
      </div>
      <div className="sm:w-11/12 xl:w-2/3 lg:w-3/4 md:w-5/6 sm:m-auto mx-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
