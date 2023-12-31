import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const HomeContainer = styled.main`
  font-family: 'Roboto', sans-serif;
  flex: 1;


  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    gap: 1.5rem;
  }

  @media ${device.laptop} {
    justify-content: space-between;

    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;

    & > div {
      gap: 3.5rem;
    }
  }
`

export const ControllPomodoroContainer = styled.section`
width: 100%;
`

export const BaseCountdownButton = styled.button`

  border: 0;
  padding: 1rem 4rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
  }

  @media ${device.laptop} {
    width: 100%;
    padding: 1rem;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};
  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
