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
    <dialog className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/50">
      <div className="relative max-h-[80vh] w-4/5 max-w-screen-lg rounded bg-white px-4 py-8">
        <button
          type="button"
          onClick={back}
          className="absolute -right-10 top-0"
        >
          <XCircleIcon className="size-8 text-white" />
        </button>

        {children}
      </div>
    </dialog>
  );
};

export default Modal;
