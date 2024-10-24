"use client";

import { XCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = { children?: React.ReactNode };

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const back = () => {
    router.back();
  };

  useEffect(() => {
    const body = document.querySelector("body") as HTMLElement;
    body.style.overflow = "hidden";
  }, []);

  return (
    <dialog className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50">
      <div className="relative max-w-screen-lg md:w-4/5">
        <button
          type="button"
          onClick={back}
          className="absolute right-8 py-4 md:-right-12 md:top-0 md:py-0"
        >
          <XCircleIcon className="size-6 md:size-10 md:text-white" />
        </button>

        <div className="flex h-screen flex-col gap-12 overflow-y-auto overflow-x-hidden rounded bg-white p-8 md:max-h-[80vh]">
          {children}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
