import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useS3Upload } from "next-s3-upload";

import Layout from "layout/MainLayout";
import useForm from "mixins/useForm";

import { MutationCreateOtterArgs } from "lib/apollo-graphql/schema.types";
import { initializeApollo } from "lib/apollo-graphql/apollo";
import CREATE_OTTER from "lib/apollo-graphql/mutations/createOtter";
import BackButton from "components/BackButton";
import CreateOtterForm from "components/CreateOtterForm";
import Spinner from "components/Spinner";

export interface CreateProps {}

export interface Values {
  name: string;
  location: string;
  about: string;
  imageFile: File | null;
}

const Create = () => {
  const router = useRouter();
  const client = initializeApollo();
  let [loading, setLoading] = useState(false);
  let { uploadToS3 } = useS3Upload();

  async function createOtterCallback({ imageFile, ...form }: Values) {
    setLoading(true);
    let { url: imageUrl } = await uploadToS3(imageFile as File);
    try {
      console.log({ ...form, imageUrl });
      const { data } = await client.mutate<MutationCreateOtterArgs>({
        mutation: CREATE_OTTER,
        variables: {
          input: {
            ...form,
            imageUrl,
          },
        },
      });
      router.push("/otters");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <div className="flex-col justify-center relative items-center w-full">
        <div
          className="absolute z-10 shadow-lg md:block hidden"
          style={{
            top: "-1.25rem",
            left: "-1.25rem",
          }}
        >
          <BackButton href="/otters" />
        </div>
        <div className="absolute z-10 shadow-lg md:hidden top-3 left-3">
          <BackButton href="/otters" />
        </div>
        {loading && <Spinner className="h-20 w-20" />}
        <CreateOtterForm onSubmit={createOtterCallback} />
      </div>
    </Layout>
  );
};

export default Create;
