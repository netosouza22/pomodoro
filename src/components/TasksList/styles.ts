import styled from "styled-components";

interface ITaskInfo {
  isFinished: boolean,
}

export const TaskListsContainer = styled.div`

`

export const Task = styled.div`
  width: 100%;
  height: 2.25rem;
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme["gray-100"]};
  border-bottom: 1px solid ${(props) => props.theme["gray-300"]};
`

export const TaskInfo = styled.div<ITaskInfo>`
  display: flex;
  gap: 0.75rem;

  color: ${(props) => props.isFinished ? props.theme["gray-500"] : props.theme["gray-700"]};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  & span {
    text-decoration: ${(props) => props.isFinished ? "line-through" : "none"};
  }

  svg {
    fill: ${(props) => props.isFinished ? props.theme["gray-500"] : props.theme["gray-700"]};
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const FinishTaskButton = styled.button`
  border: none;

  display: flex;
  gap: 0.75rem;
`