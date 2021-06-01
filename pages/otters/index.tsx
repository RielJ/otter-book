import React from "react";
import Layout from "../../layout/main-layout";
import ItemCard from "../../components/item-card";
import { useRouter } from "next/router";
import { InferGetServerSidePropsType } from "next";
import GET_OTTER_LIST from "../../lib/queries/getOtterList";
import { initializeApollo } from "../../lib/apollo";
import { Otter as OtterType } from "../../lib/graphql";

export default function Home({
  otters,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <Layout home={true}>
      <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {otters &&
          otters.map((otter: OtterType, index: number) => {
            return (
              <div
                key={otter.id}
                onClick={() => router.push(`/otters/details/${otter.id}`)}
              >
                <ItemCard
                  src={otter.imageUrl || "/otter_1.jpg"}
                  name={otter?.name || ""}
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
  const { data } = await client.query({
    query: GET_OTTER_LIST,
  });
  return {
    props: {
      otters: data.getOtterList.data || null,
    },
  };
}
