import { TWorks } from "@/app/types/works-type";
import Image from "next/image";
import Link from "next/link";

const WorkList = ({ id, title, startDate, endDate, imgs, tasks }: TWorks) => {
  return (
    <Link
      href={`/works/${id}`}
      scroll={false}
      className="flex flex-col rounded-lg border border-gray-300 bg-white px-3 py-4 md:px-6 md:py-7"
    >
      <span className="text-xs/none text-gray-400">
        {startDate.substring(2)} ~{" "}
        {endDate === "진행중" ? "진행중" : endDate.substring(2)}
      </span>
      <h3 className="mb-4 mt-2 font-semibold leading-none tracking-tight lg:text-lg">
        {title}
      </h3>
      <div className="mb-4 h-28 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 xl:h-52">
        <Image
          src={imgs[0]}
          alt={""}
          width="365"
          height="180"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <ul className="flex flex-col gap-0.5">
        {tasks.map((task, idx) => (
          <li key={id + "task" + idx} className="relative pl-2 text-sm text-gray-600">
            <span className="absolute left-0">·</span> {task.taskTitle}
          </li>
        ))}
      </ul>
    </Link>
  );
};

export default WorkList;
