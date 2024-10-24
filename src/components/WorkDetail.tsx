import Image from "next/image";
import { TWorks } from "@/app/types/works-type";
import works from "../../public/works.json";

type Task = {
  taskTitle: string;
  taskEpxlain: string[];
};

type Props = {
  id: string;
};

const WorkDetail = ({ id }: Props) => {
  const work = works.find((work: TWorks) => work.id === id);

  return (
    <>
      <div className="flex flex-col border-b border-gray-300 pb-10">
        <p className="font-medium text-primary">{work?.responsive}</p>
        <h2 className="mb-2 mt-4 text-2xl font-bold">{work?.title}</h2>
        <p className="flex flex-col gap-2 text-gray-500 md:flex-row">
          <span>
            {work?.startDate} ~ {work?.endDate}
          </span>
          {work?.members !== "" && (
            <>
              <span className="hidden md:block"> | </span>
              <span>{work?.members}</span>
            </>
          )}
        </p>
        <p className="mt-6 whitespace-pre-line text-gray-500">
          {work?.explain} <br />
        </p>
      </div>

      {work?.skills !== "" && (
        <div>
          <h3 className="mb-4 text-lg/none font-medium text-primary">
            사용 기술 및 언어
          </h3>
          <p className="text-gray-600">{work?.skills}</p>
        </div>
      )}

      <div>
        <h3 className="mb-4 text-lg/none font-medium text-primary">
          주요 역할
        </h3>
        {work?.tasks.map((task: Task, idx: number) => (
          <div key={work.id + idx} className="mb-6">
            <h4 className="mb-2 text-lg font-semibold">
              <span className="mr-3 text-xl">
                {(idx + 1).toString().padStart(2, "0")}
              </span>
              {task.taskTitle}
            </h4>
            {task.taskEpxlain.length > 0 && (
              <ul className="pl-12">
                {task.taskEpxlain.map((explain: string, idx: number) => (
                  <li
                    key={"taskDesc" + idx}
                    className="list-disc text-gray-600"
                  >
                    {explain}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {work?.imgs.map((img: string, idx: number) => (
          <li
            key={img + idx}
            className="h-52 overflow-hidden rounded-md border border-gray-300 lg:h-60"
          >
            <Image
              src={img}
              alt={id}
              width={400}
              height={400}
              className="h-full w-full object-cover object-top"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default WorkDetail;
