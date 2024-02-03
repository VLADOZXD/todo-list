import { useEffect, useState } from "react";
import useAuthentication from "./useAuthentication";
import getUserTodo from "@/services/getUserTodo";

import { FetchedData } from "@/types/fetchedData";

const useFetch = () => {
  const [fetchedTasks, setFetchedTasks] = useState<FetchedData>();
  const { user } = useAuthentication();

  useEffect(() => {
    if (user) {
      getUserTodo(user.uid).then((data) => {
        setFetchedTasks(data);
      });
    }
  }, [user]);

  return fetchedTasks;
};

export default useFetch;
