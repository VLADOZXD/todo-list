"use client";
import { useState } from "react";
import updateTask from "@/services/updateTask";
import useAuthentication from "@/hooks/useAuthentication";

import CheckIcon from "@/components/Icons/CheckIcon";
import DeleteIcon from "@/components/Icons/DeleteIcon";

interface TaskProps {
  id: string;
  text: string;
  completed: boolean;
  onDelete: (taskId: string) => void;
}

const Task = ({ id, text, completed, onDelete }: TaskProps) => {
  const { user } = useAuthentication();
  const [isCheck, setCheck] = useState(completed);

  const handleOnComplete = () => {
    setCheck((prevState) => {
      updateTask(user?.uid, id, !prevState);
      return !prevState;
    });
  };

  const handleOnDelete = () => {
    onDelete(id);
  };

  return (
    <li className="list-none w-96 max-[520px]:w-56 p-2 rounded-md transition-colors ease-out duration-300 hover:bg-gray-50 group">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-1">
            <input
              id={id}
              type="checkbox"
              onChange={handleOnComplete}
              checked={isCheck}
              className="hidden peer"
            />
            <label
              htmlFor={id}
              className="flex w-6 h-6 rounded-full border-2 border-gray-300 transition-colors ease-out duration-300 hover:bg-gray-300 peer-checked:bg-green-500 peer-checked:border-green-500 group"
            >
              <CheckIcon className="w-5 h-5 fill-white opacity-0 hover:opacity-100 group-[.peer:checked+&]:opacity-100 peer" />
            </label>
          </div>
          <div>{text}</div>
        </div>
        <button
          onClick={() => onDelete(id)}
          className="opacity-0 transition-transform ease-out duration-75 group-hover:opacity-100 active:scale-105"
        >
          <DeleteIcon className="w-5 h-5 fill-gray-600" />
        </button>
      </div>
    </li>
  );
};

export default Task;
