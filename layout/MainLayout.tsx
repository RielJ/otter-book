import React, { ReactElement, ReactNode } from "react";
import Head from "next/head";
import BaseHeader from "components/BaseHeader";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props): ReactElement {
  return (
    <div>
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
        <BaseHeader />
        <div className="pt-32 sm:w-11/12 xl:w-2/3 lg:w-3/4 md:w-5/6 sm:m-auto mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
