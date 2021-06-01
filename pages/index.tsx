import Link from "next/link";
import React from "react";
import Layout from "../components/layout";
import Otter from "../components/otter";

export default function Home() {
  return (
    <Layout home={true}>
      <div className="">
        <div className="text-3xl mb-5">Welcome To OtterBook</div>
        <Link href="/otters/">
          <a className="text-lg font-bold px-5 py-2 bg-blue-600  text-white rounded-md hover:bg-blue-700 hover:shadow-inner shadow-md">
            Otter List
          </a>
        </Link>
      </div>
    </Layout>
  );
}
