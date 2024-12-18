import { TWorks } from "@/app/types/works-type";
import works from "../../public/works.json";
import ImageList from "./image/ImageList";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

type Task = {
  taskTitle: string;
  taskEpxlain: string[];
};

type ImgType = { previewId: string; src: string };

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
          {work?.url && (
            <>
              <span className="hidden md:block"> | </span>
              <Link
                href={work?.url}
                target="_blank"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                사이트 보기 <ArrowUpRightIcon className="size-4" />
              </Link>
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
              <ul className="pl-12 flex flex-col gap-y-2">
                {task.taskEpxlain.map((explain: string, idx: number) => (
                  <li
                    key={"taskDesc" + idx}
                    className="list-disc whitespace-pre-wrap text-gray-600"
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
        {work?.imgs.map(({ previewId, src }: ImgType) => (
          <ImageList key={previewId} previewId={previewId} src={src} />
        ))}
      </ul>
    </>
  );
};

export default WorkDetail;
