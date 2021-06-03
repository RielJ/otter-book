import { Formik, FormikErrors } from "formik";
import { Values } from "pages/otters/create";
import React, { ReactElement } from "react";
import UploadImage from "./UploadImage";
import * as Yup from "yup";
import Thumb from "./Thumb";

interface Props {
  onSubmit: (values: Values) => void;
}

export default function CreateOtterForm({ onSubmit }: Props): ReactElement {
  const initialValues: Values = {
    name: "",
    location: "",
    about: "",
    imageFile: null,
  };

  const CreateOtterSchema = Yup.object().shape({
    name: Yup.string().required("Name Required!"),
    location: Yup.string().required("Location Required!"),
    about: Yup.string().required("Description Required!"),
    imageFile: Yup.mixed()
      .required("Image Required!")
      .test(
        "fileSize",
        "File Size is too large",
        (value) => value && value.size <= 50000000
      )
      .test(
        "fileType",
        "Unsupported File Format",
        (value) =>
          value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
      ),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={CreateOtterSchema}
        render={({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue,
          errors,
          touched,
        }) => {
          return (
            <form
              onSubmit={handleSubmit}
              className="blur relative bg-opacity-50 bg-black p-5 rounded-md text-white"
            >
              <div className="text-4xl text-center font-medium ">Add Otter</div>
              <div className="m-5 lg:grid grid-cols-12 gap-5">
                <div className="col-span-full xl:col-span-4 md:h-auto flex flex-col items-center justify-center">
                  <div className="inline-block rounded-lg">
                    <div className="w-72 h-72 relative">
                      <Thumb file={values.imageFile} />
                    </div>
                  </div>
                </div>

                <div className="xl:col-span-8 col-span-full space-y-5 xl:ml-5 mt-5 xl:mt-0">
                  <div>
                    <label htmlFor="image" className="font-medium text-lg">
                      Image
                    </label>
                    <UploadImage
                      setFieldValue={setFieldValue}
                      className={
                        "text-center py-2 cursor-pointer " +
                        ((touched.imageFile &&
                          errors.imageFile &&
                          "border-2 rounded-md border-red-400") ||
                          "border-b-2 border-gray-400")
                      }
                    />
                    {touched.imageFile && errors.imageFile && (
                      <div className="pt-1 text-red-300">
                        {errors.imageFile}
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="name" className="font-medium text-lg">
                      Name
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      name="name"
                      className={
                        "px-2 py-4 mt-1 block w-full sm:text-sm  bg-transparent blur-sm text-xl focus:border-blue-500 outline-none " +
                        ((touched.name &&
                          errors.name &&
                          "border-2 rounded-md border-red-400") ||
                          "border-b-2 border-gray-400")
                      }
                    />
                    {touched.name && errors.name && (
                      <div className="pt-1 text-red-300">{errors.name}</div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="location" className="font-medium text-lg">
                      Location
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.location}
                      name="location"
                      className={
                        "px-2 py-4 mt-1 block w-full sm:text-sm  bg-transparent blur-sm text-xl focus:border-blue-500 outline-none " +
                        ((touched.location &&
                          errors.location &&
                          "border-2 rounded-md border-red-400") ||
                          "border-b-2 border-gray-400")
                      }
                    />
                    {touched.location && errors.location && (
                      <div className="pt-1 text-red-300">{errors.location}</div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="about" className="font-medium text-lg">
                      Description
                    </label>
                    <textarea
                      rows={5}
                      name="about"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.about}
                      className={
                        "px-2 mt-1 block w-full sm:text-sm  bg-transparent blur-sm text-xl focus:border-blue-500 outline-none " +
                        ((touched.about &&
                          errors.about &&
                          "border-2 rounded-md border-red-400") ||
                          "border-b-2 border-gray-400")
                      }
                    />
                    {touched.about && errors.about && (
                      <div className="pt-1 text-red-300">{errors.about}</div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 p-2 rounded-md font-medium hover:shadow-lg"
                  >
                    Add Otter
                  </button>
                </div>
              </div>
            </form>
          );
        }}
      />
    </>
  );
}
