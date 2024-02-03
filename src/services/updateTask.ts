import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

import { TaskType } from "@/types/fetchedData";

const updateTask = async (
  userId: string | undefined,
  taskId: string,
  isChecked: boolean
) => {
  if (userId) {
    const docRef = doc(db, "users", userId);
    const querySnapshot = await getDoc(docRef);

    const data = querySnapshot.data();

    if (data) {
      const taskIndex = data.tasks.findIndex(
        (task: TaskType) => task.taskId === taskId
      );

      data.tasks[taskIndex].completed = isChecked;

      await updateDoc(docRef, { tasks: data.tasks });
    }
  }
};

export default updateTask;
