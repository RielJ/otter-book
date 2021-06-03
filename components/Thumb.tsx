import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  file: File | null;
}

export default function Thumb({ file }: Props): ReactElement {
  const [thumb, setThumb] = useState("/otter-profile.png");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!file) {
      return;
    }
    setLoading(true);
    let reader = new FileReader();
    reader.onloadend = () => {
      setLoading(false);
      setThumb(reader.result as string);
    };

    reader.readAsDataURL(file);
  }, [file]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Image
          layout="fill"
          objectFit="cover"
          src={thumb || "/otter-profile.png"}
          alt={file?.name || "Otter"}
        />
      )}
    </>
  );
}
