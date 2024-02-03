import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

import { FetchedData } from "@/types/fetchedData";

const getUserTodo = async (userId: string | undefined) => {
  if (userId) {
    const docRef = doc(db, "users", userId);
    let querySnapshot = await getDoc(docRef);

    if (!querySnapshot.data()) {
      await setDoc(docRef, { tasks: [] });
      querySnapshot = await getDoc(docRef);
    }

    const data = querySnapshot.data();

    return data as FetchedData;
  }
};

export default getUserTodo;
