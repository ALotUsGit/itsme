import Image from "next/image";

import { XCircleIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

type Props = {
  show: boolean;
  src: string;
  previewId: string;
};

const Preview = ({ show, src, previewId }: Props) => {
  return (
    <>
      <dialog
        className={twMerge(
          "fixed left-0 top-0 z-50 hidden h-screen w-screen items-center justify-center bg-black/50",
          show && "flex",
        )}
      >
        <div className="relative w-4/5 max-w-[1440px]">
          <button
            type="button"
            className="absolute right-8 py-4 md:-right-12 md:top-0 md:py-0"
          >
            <XCircleIcon className="size-6 md:size-10 md:text-white" />
          </button>
          <div className="max-h-[80vh] w-full overflow-y-auto rounded bg-white">
            <Image
              src={src}
              alt={previewId}
              width={1440}
              height={1480}
              className="h-auto w-full object-cover object-top"
            ></Image>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Preview;
