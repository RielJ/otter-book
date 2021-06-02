import React, { useRef, useState } from "react";
import Layout from "../../layout/main-layout";
import useForm from "../../mixins/useForm";
import Image from "next/image";
import CREATE_OTTER from "../../lib/apollo-graphql/mutations/createOtter";
import { MutationCreateOtterArgs } from "../../lib/apollo-graphql/schema.types";
import { initializeApollo } from "../../lib/apollo-graphql/apollo";
import { useRouter } from "next/router";
import { useS3Upload } from "next-s3-upload";
import Spinner from "../../components/Spinner";
import Link from "next/link";

export interface CreateProps {}

const Create = () => {
  const router = useRouter();
  const client = initializeApollo();
  const initialState = {
    name: "",
    location: "",
    about: "",
  };
  const inputImage = useRef<HTMLInputElement>(null);
  const {
    onChange,
    onSubmit,
    values: form,
  } = useForm(createOtterCallback, initialState);
  let [imageUrl, setImageUrl] = useState("");
  let [loading, setLoading] = useState(false);
  let [imageUploading, setImageUploading] = useState(false);
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  async function createOtterCallback() {
    setLoading(true);
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
      console.log(data);
      router.push("/otters");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const onImageChange = async (file: File) => {
    setImageUploading(true);
    let { url } = await uploadToS3(file);
    setImageUrl(url);
    setImageUploading(false);
  };

  const onImageUpload = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    openFileDialog();
    if (inputImage && inputImage.current) inputImage.current.click();
  };

  const onImageRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setImageUrl("");
  };

  return (
    <Layout>
      <div className="flex-col justify-center relative items-center w-full">
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
        <form
          onSubmit={onSubmit}
          className="blur relative bg-opacity-50 bg-black p-5 rounded-md text-white"
        >
          <div className="text-4xl text-center font-medium ">Add Otter</div>
          <div className="m-5 lg:grid grid-cols-12 gap-5">
            <div className="md:col-span-12 lg:col-span-4 col-span-12 md:h-auto flex flex-col items-center justify-center">
              <div className="relative w-72 h-7w-72 rounded-full mdLmt-5">
                <div className="relative inline-block overflow-hidden">
                  {imageUploading && <div className="loading"></div>}
                  <FileInput
                    onChange={onImageChange}
                    type="file"
                    id="image"
                    name="image"
                    className="hidden"
                  />
                  <div className="h-72 w-72 relative">
                    <Image
                      src={imageUrl || "/otter-profile.png"}
                      alt="Otter Picture"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div className="hover:shadow-lg absolute top-0 h-full w-full rounded-full  bg-black bg-opacity-25 flex text-center items-center justify-center ">
                    <button
                      onClick={onImageUpload}
                      className="p-2 focus:outline-none hover:bg-white hover:bg-opacity-25 rounded-full transition duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                    {imageUrl && (
                      <button
                        onClick={onImageRemove}
                        className="p-2 focus:outline-none hover:bg-white hover:bg-opacity-25 rounded-full transition duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div>{}</div>
            </div>
            <div className="md:col-span-8 col-span-full space-y-5">
              {loading && imageUrl && <Spinner color="blue" />}
              <div>
                <label htmlFor="name" className="">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Otter Name"
                  onChange={onChange}
                  required
                  className="px-2 py-4 mt-1 block w-full sm:text-sm  bg-transparent blur-sm text-xl focus:border-blue-500 outline-none border-b-2 border-gray-400 "
                />
              </div>
              <div>
                <label htmlFor="location" className=" ">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Enter Otter Location"
                  onChange={onChange}
                  required
                  className="px-2 py-4 mt-1 block w-full sm:text-sm  bg-transparent blur-sm text-xl focus:border-blue-500 outline-none border-b-2 border-gray-400 "
                />
              </div>
              <div>
                <label htmlFor="about" className="">
                  About
                </label>
                <textarea
                  rows={5}
                  id="about"
                  name="about"
                  placeholder="Give Some Description to the otter"
                  onChange={onChange}
                  required
                  className="px-2 mt-1 block w-full sm:text-sm  bg-transparent blur-sm text-xl focus:border-blue-500 outline-none border-b-2 border-gray-400 "
                />
              </div>
              <div>
                <button className="w-full bg-blue-500 p-2 rounded-md font-medium hover:shadow-lg">
                  Add Otter
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Create;
