import React, { useEffect } from "react";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

import MainLayout from "layout/MainLayout";
import OtterCard from "components/OtterCard";

import GET_OTTER_LIST from "lib/apollo-graphql/queries/getOtterList";
import { initializeApollo } from "lib/apollo-graphql/apollo";
import { Otter as OtterType } from "lib/apollo-graphql/schema.types";
import Link from "next/link";

export default function Home({
  otters,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  useEffect(() => {}, [otters]);
  return (
    <MainLayout>
      <div className="flex flex-row justify-end">
        <Link href="/otters/create">
          <a className="text-white bg-blue-500 hover:bg-blue-400 px-5 py-2 rounded-sm font-bold text-lg sm:w-auto w-full text-center sm:text-left">
            Add New Otter
          </a>
        </Link>
      </div>
      <div className="mt-5 grid md:grid-cols-2 gap-6">
        {otters &&
          otters.map((otter: OtterType, index: number) => {
            return (
              <div
                key={otter.id}
                onClick={() => router.push(`/otters/details/${otter.id}`)}
              >
                <OtterCard
                  image={{
                    src: otter.imageUrl || "/otter_1.jpg",
                    alt: otter.name || "Otter",
                  }}
                  title={otter.name || ""}
                  body={otter.about || ""}
                />
              </div>
            );
          })}
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const client = initializeApollo();
  const res = await client.query({
    query: GET_OTTER_LIST,
  });
  return {
    props: {
      otters: res.data.getOtterList,
    },
  };
}
