import React from "react";
import Head from "next/head";
import BaseHeader from "../components/base-header";

export interface LayoutProps {
  home?: boolean;
}
const Layout: React.SFC<LayoutProps> = ({ children, home = false }) => {
  return (
    <div
      className="bg-gray-200 full-height"
      style={{
        background:
          "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/otter-bg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        maxHeight: "100vh",
        minHeight: "100vh",
      }}
    >
      <Head>
        <title>Otter World</title>

        <link rel="shortcut icon" href="/coffee-cup.png" />
      </Head>
      <BaseHeader home={home} />
      <div className="pt-32 sm:w-11/12 xl:w-2/3 lg:w-3/4 md:w-5/6 sm:m-auto mx-4 min-h-screen max-h-screen h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
