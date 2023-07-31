
import { CaretDoubleUp, CheckSquare, Circle, Square, Trash } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { useTask } from "../../contexts/TaskContext";
import { ButtonsContainer, StyledButton, Task, TaskInfo, TaskListsContainer } from "./styles";

export default function TasksList() {
  const { tasks, finishTask, deleteTask, priorizeTask } = useTask();

  const theme = useTheme()

  return (
    <TaskListsContainer>
      {tasks && tasks.map((task, index) => (
        <Task key={task.id}>

          <TaskInfo isFinished={task.isFinished}>
            <StyledButton onClick={() => finishTask(task.id)}>
              {task.isFinished ?
                <CheckSquare weight="bold" /> : <Square weight="bold" />
              }
            </StyledButton>

            <span>
              {task.name}
            </span>
          </TaskInfo>

          <ButtonsContainer>
            <StyledButton onClick={() => index !== 0 && priorizeTask(index)} disabled={index === 0 || task.isFinished} >
              {
                index === 0 ?
                  <em title="Tarefa ativa">
                    <Circle
                      width={12}
                      weight="fill"
                      color={
                        !task.isFinished
                          ? theme["green-500"]
                          : theme["gray-300"]}
                    />
                  </em>
                  :
                  <em title="Priorizar tarefa">
                    <CaretDoubleUp
                      width={12}
                      weight="bold"
                      color={
                        !task.isFinished
                          ? theme["yellow-500"]
                          : theme["gray-300"]}
                    />
                  </em>
              }
            </StyledButton>
            <StyledButton onClick={() => deleteTask(task.id)}>
              <em title="Deletar tarefa">
                <Trash width={24} weight="bold" color={theme["red-500"]} />
              </em>
            </StyledButton>
          </ButtonsContainer>
        </Task>
      ))
      }

    </TaskListsContainer >
  )
}