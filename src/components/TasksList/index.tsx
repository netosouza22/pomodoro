import { CheckSquare, Square } from "@phosphor-icons/react";
import { useTask } from "../../contexts/TaskContext";
import { ButtonsContainer, FinishTaskButton, Task, TaskInfo, TaskListsContainer } from "./styles";

export default function TasksList() {

  const { tasks, finishTask } = useTask();

  return (
    <TaskListsContainer>
      {tasks && tasks.map((task) => (
        <Task key={task.id}>

          <TaskInfo isFinished={task.isFinished}>
            <FinishTaskButton onClick={() => finishTask(task.id)}>
              {task.isFinished ?
                <CheckSquare weight="bold" /> : <Square weight="bold" />
              }
            </FinishTaskButton>

            <span>
              {task.name}
            </span>
          </TaskInfo>

          <ButtonsContainer>
            <div>a</div>
            <div>b</div>
          </ButtonsContainer>
        </Task>
      ))
      }

    </TaskListsContainer >
  )
}