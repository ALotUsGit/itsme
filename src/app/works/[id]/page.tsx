"use client";

import WorkDetail from "@/components/WorkDetail";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  params: { id: string };
};

const page = ({ params: { id } }: Props) => {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeftIcon className="size-4" />
          목록으로
        </Link>
      </div>
      <WorkDetail id={id} />
    </section>
  );
};
export default page;
