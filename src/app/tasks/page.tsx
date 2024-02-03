"use client";
import useFetch from "@/hooks/useFetch";

import CardLayout from "@/components/layouts/CardLayout";
import Spinner from "@/components/layouts/Spinner";
import TasksPageContent from "@/components/TasksPageContent/TasksPageContent";

const TasksPage = () => {
  const fetchedTasks = useFetch();

  return (
    <CardLayout>
      {fetchedTasks ? (
        <TasksPageContent fetchedTasks={fetchedTasks} />
      ) : (
        <Spinner />
      )}
    </CardLayout>
  );
};

export default TasksPage;
