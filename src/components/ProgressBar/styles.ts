import styled from "styled-components";

export const ProgressBarStyled = styled.progress`
  width: 100%;
  height: 2px;

  background-color: ${(props) => props.theme["gray-400"]};
  border: none;


&::-moz-progress-bar {
  background: ${(props) => props.theme["green-700"]};
}

&::-webkit-progress-value {
  background: red;
}

&::-webkit-progress-bar {
  background: blue;
}
`