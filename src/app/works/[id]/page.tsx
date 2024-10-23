"use client";

import WorkDetail from "@/components/WorkDetail";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  params: { id: string };
};

const page = ({ params: { id } }: Props) => {
  return (
    <main className="px-4">
      <header className="sticky top-0 bg-white/60 py-3 backdrop-blur-sm">
        <nav className="mx-auto max-w-7xl">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeftIcon className="size-4" />
            목록으로
          </Link>
        </nav>
      </header>

      <section className="mx-auto flex max-w-7xl flex-col gap-10 py-12">
        <WorkDetail id={id} />
      </section>
    </main>
  );
};
export default page;
