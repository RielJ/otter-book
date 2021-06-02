import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import ItemCard from "../../../components/item-card";
import Layout from "../../../layout/main-layout";
import { initializeApollo } from "../../../lib/apollo-graphql/apollo";
import GET_OTTER from "../../../lib/apollo-graphql/queries/getOtter";
import GET_OTTER_LIST from "../../../lib/apollo-graphql/queries/getOtterList";
import { Otter } from "../../../lib/apollo-graphql/schema.types";

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
      <div className="mt-5 grid md:grid-cols-5 grid-cols-1 gap-6 px-7 blur bg-opacity-50 bg-black p-5 rounded-md text-gray-300">
        <div className="col-span-3">
          <ItemCard
            src={otter.imageUrl || "/otter_1.jpg"}
            name={otter?.name || ""}
            hideTitle={true}
          />
        </div>
        <div className="flex flex-col justify-center col-span-2">
          <h1 className="text-5xl font-bold">{otter.name}</h1>
          <h2 className="text-2xl">{otter.location}</h2>
        </div>
        <div className="col-span-full">
          <h1 className="text-3xl font-medium">About</h1>
          <p>{otter.about}</p>
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
