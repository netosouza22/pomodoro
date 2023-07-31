import styled from "styled-components";

interface ITaskInfo {
  isFinished: boolean,
}

export const TaskListsContainer = styled.div`
  height: 19.0625rem;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }

    ::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
    }

`

export const Task = styled.div`
  width: 100%;
  height: 2.25rem;
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme["white"]};
  border-bottom: 1px solid ${(props) => props.theme["gray-300"]};
`

export const TaskInfo = styled.div<ITaskInfo>`
  display: flex;
  align-items: center;
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
  gap: 0.5rem;
`
export const StyledButton = styled.button`
  height: 1.25rem;
  width: 1.25rem;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  background-color: transparent;
  cursor: pointer;

  em {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:disabled {
    cursor: default;
  }
`