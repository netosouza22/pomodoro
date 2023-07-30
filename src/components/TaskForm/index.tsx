import { Plus } from "@phosphor-icons/react";
import { useState } from "react";
import { useTask } from "../../contexts/TaskContext";
import { AddTaskButton, FormContainer } from "./styles";

export default function TaskForm() {
  const [taskName, setTaskName] = useState<string>("");
  const { createTask } = useTask()

  const handleTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e?.target.value)
  }

  return (
    <FormContainer>
      <input name="task_name" type="text" onChange={(e) => handleTaskName(e)} />
      <AddTaskButton onClick={() => createTask(taskName)}>
        <Plus size={16} weight="bold" />
      </AddTaskButton>
    </FormContainer>
  )
}