export type TaskType = {
  taskId: string;
  taskName: string;
  completed: boolean;
};

export type FetchedData = {
  tasks: TaskType[];
};
