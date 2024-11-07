"use client";

import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

type Props = {
  src: string;
  previewId: string;
};

const ImageList = ({ src, previewId }: Props) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <li
      className="h-52 cursor-pointer overflow-hidden rounded-md border border-gray-300 lg:h-60"
      onClick={() => setIsShow((prev) => !prev)}
    >
      <Image
        src={src}
        alt={previewId}
        width={410}
        height={280}
        className="h-full w-full object-cover object-top"
      />
      <ImageModal show={isShow} src={src} previewId={previewId} />
    </li>
  );
};
export default ImageList;
