"use client";
import { useRouter } from "next/navigation";

import Tasks from "@/components/TasksPageContent/Tasks";
import Button from "@/components/layouts/Button";

import { FetchedData } from "@/types/fetchedData";

interface TasksPageContentProps {
  fetchedTasks: FetchedData;
}

const TasksPageContent = ({ fetchedTasks }: TasksPageContentProps) => {
  const router = useRouter();

  const handleAddNew = () => {
    router.push("tasks/new-task");
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <Tasks fetchedTasks={fetchedTasks.tasks} />
      <Button text="Add new todo" onClick={handleAddNew} color="green" />
    </div>
  );
};

export default TasksPageContent;
