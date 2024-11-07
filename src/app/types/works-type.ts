type Imgs = {
  previewId: string;
  src: string;
};

type Tasks = {
  taskTitle: string;
  taskEpxlain: string[];
};

export type TWorks = {
  id: string;
  title: string;
  explain?: string;
  responsive?: string;
  members?: string;
  startDate: string;
  endDate: string;
  imgs: Imgs[];
  skills?: string;
  tasks: Tasks[];
};
