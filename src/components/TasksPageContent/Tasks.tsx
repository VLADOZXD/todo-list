import { useState } from "react";
import useAuthentication from "@/hooks/useAuthentication";
import deleteTask from "@/services/deleteTask";

import Task from "./Task";

import { TaskType } from "@/types/fetchedData";

interface TasksProps {
  fetchedTasks: TaskType[];
}

const Tasks = ({ fetchedTasks }: TasksProps) => {
  const { user } = useAuthentication();
  const [tasks, setTasks] = useState<TaskType[]>(fetchedTasks);

  const handleOnDelete = (taskId: string) => {
    deleteTask(user?.uid, taskId).then(() =>
      setTasks(tasks.filter((task: TaskType) => task.taskId !== taskId))
    );
  };

  return (
    <div className="h-96 overflow-auto">
      {tasks.length !== 0 ? (
        <ul className="space-y-1">
          {tasks.map((task) => (
            <Task
              key={task.taskId}
              id={task.taskId}
              text={task.taskName}
              completed={task.completed}
              onDelete={handleOnDelete}
            />
          ))}
        </ul>
      ) : (
        <div className="text-center w-96 max-[520px]:w-56 text-gray-400 text-lg font-medium">
          Not a tasks yet
        </div>
      )}
    </div>
  );
};

export default Tasks;
