import { FloppyDisk } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { useTask } from "../../contexts/TaskContext";
import { AddTaskButton, FormContainer } from "./styles";

export default function TaskForm() {
  const { createTask } = useTask()

  const taskInputRef = useRef<HTMLInputElement>(null)

  const [taskName, setTaskName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e?.target.value)
    setError(false);
  }

  const handleCreateTask = () => {
    if (taskName.length === 0) {
      setError(true)
      return;
    }
    createTask(taskName);
    setTaskName("");
  }

  useEffect(() => {
    if (error) {
      taskInputRef.current?.focus()
    }
  }, [error])

  return (
    <FormContainer inputError={error}>
      <input
        name="task_name"
        type="text"
        ref={taskInputRef}
        placeholder="ex: estudar para a prova"
        value={taskName}
        onChange={(e) => handleTaskName(e)}
      />
      <AddTaskButton onClick={handleCreateTask}>
        <FloppyDisk size={16} weight="bold" />
      </AddTaskButton>
    </FormContainer>
  )
}