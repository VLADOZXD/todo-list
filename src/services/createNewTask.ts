import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

const createNewTask = async (userId: string | undefined, newTask: string) => {
  if (userId) {
    const docRef = doc(db, "users", userId);
    const querySnapshot = await getDoc(docRef);

    const data = querySnapshot.data();

    if (data) {
      const newTasks = data.tasks.concat({
        taskId: Math.random().toString(),
        taskName: newTask,
        completed: false,
      });

      await updateDoc(docRef, { tasks: newTasks });
    }
  }
};

export default createNewTask;
