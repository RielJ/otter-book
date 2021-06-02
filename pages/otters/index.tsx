import React, { useEffect } from "react";
import Layout from "../../layout/main-layout";
import ItemCard from "../../components/item-card";
import { useRouter } from "next/router";
import { InferGetServerSidePropsType } from "next";
import GET_OTTER_LIST from "../../lib/apollo-graphql/queries/getOtterList";
import { initializeApollo } from "../../lib/apollo-graphql/apollo";
import { Otter as OtterType } from "../../lib/apollo-graphql/schema.types";
import OtterCard from "../../components/OtterCard";

export default function Home({
  otters,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  useEffect(() => {}, [otters]);
  return (
    <Layout home={true}>
      <div className="mt-5 grid sm:grid-cols-2 gap-6">
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
    </Layout>
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
