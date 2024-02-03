"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthentication from "@/hooks/useAuthentication";
import createNewTask from "@/services/createNewTask";

import Input from "@/components/layouts/Input";
import Button from "../layouts/Button";

const NewTaskPageContent = () => {
  const [enteredTask, setEnteredTask] = useState("");
  const [error, setError] = useState(false);
  const { user } = useAuthentication();
  const router = useRouter();

  const handleSubmit = () => {
    if (enteredTask.trim().length !== 0) {
      setError(false);
      createNewTask(user?.uid, enteredTask).then(() => router.push("../tasks"));
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex h-full flex-col justify-between">
      <Input
        placeholder="Please enter a task"
        onEnter={setEnteredTask}
        error={error}
      />
      <Button text="Submit" onClick={handleSubmit} color="green" />
    </div>
  );
};

export default NewTaskPageContent;
