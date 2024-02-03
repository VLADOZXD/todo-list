import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

import { TaskType } from "@/types/fetchedData";

const deleteTask = async (userId: string | undefined, taskId: string) => {
  if (userId) {
    const docRef = doc(db, "users", userId);
    const querySnapshot = await getDoc(docRef);

    const data = querySnapshot.data();

    if (data) {
      const newTasks = data.tasks.filter(
        (task: TaskType) => task.taskId !== taskId
      );

      await updateDoc(docRef, { tasks: newTasks });
    }
  }
};

export default deleteTask;
