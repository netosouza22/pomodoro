import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const TaskListContainer = styled.div`

  max-width: 21.0625rem;

  height: 24.375rem;
  margin-top: 1rem;

  border-radius: 4px;
  background: ${(props) => props.theme["gray-700"]};

  @media ${device} {
    width: 24.0625rem;
  }
`

export const AddTaskButton = styled.button`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.125rem;

  position: absolute;

  right: 0.75rem;
  top: 0.5rem;

  background: ${(props) => props.theme["gray-100"]};
  opacity: 0.5;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  box-shadow: 0 0 0.1875rem ${(props) => props.theme.white};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["gray-500"]};
    opacity: 1;
  }
  
`

export const TaskListHeader = styled.div`
  width: 100%;
  padding: 0.625rem 0px;
  border-radius: 0.25rem 0.25rem 0px 0px;

  position: relative;

  background-color: ${(props) => props.theme["green-700"]};

  text-align: center;
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
