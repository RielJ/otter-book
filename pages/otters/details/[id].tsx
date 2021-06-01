import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import { initializeApollo } from "../../../lib/apollo";
import GET_OTTER from "../../../lib/queries/getOtter";

export interface OtterDetailsProps {}

export default function OtterDetails({
  otter,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  console.log(otter);
  return (
    <Layout>
      <div>
        <h1>Otter Details {id}</h1>
      </div>
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  console.log(id);
  const client = initializeApollo();
  const { data } = await client.query({
    query: GET_OTTER,
    variables: {
      input: { id },
    },
  });
  console.log("GET SERVERSIDE PROPS", data.getOtter);
  return {
    props: {
      otter: data.getOtter || null,
    },
  };
};
