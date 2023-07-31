import styled from "styled-components";
interface IFormContainer {
  inputError: boolean,
}

export const FormContainer = styled.div<IFormContainer>`
  width: 100%;
  display: flex;
  height: 2.25rem;

  margin: 0.25rem 0px 0.5rem;
  outline-color: red !important;

  & input {
    flex: 1;
    padding: 0 1rem;
    border-radius: 0.25rem;
    letter-spacing: .025rem;
    font-weight: 500;
    color: ${(props) => props.theme["gray-700"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-700"]};
    }
    
    outline: 0;
    border: none;

    &:focus{
      border: 2px solid ${(props) =>
    props.inputError ? props.theme["red-500"] : props.theme["green-700"]};
    }
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