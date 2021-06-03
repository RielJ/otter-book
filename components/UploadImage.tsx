import { ReactElement } from "react";
import { useDropzone } from "react-dropzone";

interface UploadImageProps {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  className?: string;
}

export default function UploadImage({
  setFieldValue,
  className,
}: UploadImageProps): ReactElement {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
      setFieldValue("imageFile", acceptedFiles[0]);
    },
  });
  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />

        <div className={className}>
          {isDragActive ? (
            <p>Drag Here!</p>
          ) : (
            <h4>Drop files here or Click to Select Files</h4>
          )}
        </div>
      </div>
    </div>
  );
}
