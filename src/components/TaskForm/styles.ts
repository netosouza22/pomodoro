import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  height: 2.25rem;

  margin: 0px 0px 1rem;

  & input {
    flex: 1
  }
`

export const AddTaskButton = styled.button`
  width: 2.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  svg {
    fill: ${(props) => props.theme["green-700"]};
  }
`