import styled from "styled-components";

export const AddTaskButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 2px;

  position: absolute;

  right: 1rem;
  top: 0.5rem;

  background: ${(props) => props.theme["gray-500"]};
  opacity: 0.5;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  box-shadow: 0 0 0.1875rem ${(props) => props.theme.white};

  &:hover {
    cursor: pointer;
    background-color: white;
    opacity: 1;
  }
`

export const TaskListContainer = styled.div`
  width: 385px;
  height: 400px;

  border-radius: 4px;
  background: ${(props) => props.theme["gray-700"]};
  box-shadow: 2px 2px 2px 0px rgba(255, 255, 255, 0.10);
`

export const TaskListHeader = styled.div`
  width: 100%;
  padding: 10px 0px;
  border-radius: 4px 4px 0px 0px;

  position: relative;

  background-color: ${(props) => props.theme["green-700"]};

  text-align: center;
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`