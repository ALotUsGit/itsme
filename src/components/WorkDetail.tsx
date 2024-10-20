import { TWorks } from "@/app/types/works-type";

type Props = {
  id: string;
};

const WorkDetail = ({ id }: Props) => {
  const works = require("/public/works.json");
  const work = works.find((work: TWorks) => work.id === id);

  return (
    <>
      <div className="flex flex-col items-center">
        <p className="font-semibold text-primary">{work.responsive}</p>
        <h2 className="mb-6 mt-2 text-2xl font-bold">{work.title}</h2>
        <p className="flex flex-col gap-2 text-center text-gray-500">
          <span>{work.members}</span>
          <span>
            {work.startDate} ~ {work.endDate}
          </span>
        </p>
      </div>

      <p>{work.explain}</p>
    </>
  );
};

export default WorkDetail;
