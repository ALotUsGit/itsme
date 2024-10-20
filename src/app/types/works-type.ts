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
  img: string;
  img2?: string;
  skills?: string;
  tasks: Tasks[];
};
