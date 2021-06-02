import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import ItemCard from "../../../components/item-card";
import Layout from "../../../layout/main-layout";
import { initializeApollo } from "../../../lib/apollo-graphql/apollo";
import GET_OTTER from "../../../lib/apollo-graphql/queries/getOtter";
import GET_OTTER_LIST from "../../../lib/apollo-graphql/queries/getOtterList";
import { Otter } from "../../../lib/apollo-graphql/schema.types";
import Link from "next/link";
export interface OtterDetailsProps {
  params?: {
    id: string;
  };
}

export default function OtterDetails({
  otter,
}: InferGetStaticPropsType<GetStaticProps>) {
  return (
    <Layout>
      <div className="mt-5 grid md:grid-cols-5 grid-cols-1 gap-6 px-7 relative blur bg-opacity-50 bg-black p-5 rounded-md text-gray-300">
        <div
          className="absolute z-50 shadow-lg"
          style={{
            top: "-1.25rem",
            left: "-1.25rem",
            zIndex: 50,
          }}
        >
          <Link href="/otters/">
            <a className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block cursor-pointer bg-blue-600 text-white hover:bg-blue-700 rounded-md"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                }}
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
        </div>
        <div className="col-span-3">
          <ItemCard
            src={otter?.imageUrl || "/otter_1.jpg"}
            name={otter?.name || ""}
            hideTitle={true}
          />
        </div>
        <div className="flex flex-col justify-center col-span-2">
          <h1 className="text-5xl font-bold">{otter?.name}</h1>
          <h2 className="text-2xl">{otter?.location}</h2>
        </div>
        <div className="col-span-full">
          <h1 className="text-3xl font-medium">About</h1>
          <p>{otter?.about}</p>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const client = initializeApollo();
  const res = await client.query({
    query: GET_OTTER_LIST,
  });

  const paths = res.data.getOtterList.map((otter: Otter) => ({
    params: { id: otter.id },
  }));
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = initializeApollo();
  const { data } = await client.query({
    query: GET_OTTER,
    variables: {
      input: { id: params?.id },
    },
  });
  return {
    props: {
      otter: data.getOtter || null,
    },
  };
};
