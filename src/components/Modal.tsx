"use client";

import { XCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

type Props = { children?: React.ReactNode };

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const back = () => {
    router.back();
  };

  return (
    <dialog className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50">
      <div className="relative w-4/5 max-w-screen-lg">
        <button
          type="button"
          onClick={back}
          className="absolute -right-8 top-0 md:-right-12"
        >
          <XCircleIcon className="size-6 text-white md:size-10" />
        </button>

        <div className="flex max-h-[80vh] flex-col gap-12 overflow-y-auto overflow-x-hidden rounded bg-white p-8">
          {children}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
