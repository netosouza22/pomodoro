import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const CountdownContainer = styled.div`
  font-family: 'Roboto mono', monospace;
  font-size: 3rem;
  color: ${({ theme }) => theme['gray-100']};
  line-height: 1.5rem;

  display: flex;
  gap: .5rem;

  span {
    background: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  span:nth-child(3) {
    background: none;
    color: ${({ theme }) => theme['green-500']};
    padding: 1.5rem 0;

    overflow: hidden;
    width: 2rem;
    display: flex;
    justify-content: center;
  }

  @media ${device.tablet} {
    font-size: 10rem;
    line-height: 8rem;

    gap: 1rem;

    span:nth-child(3) {
      padding: 2rem 0;

      width: 4rem;
    }
    
    span {
      padding: 2rem 1rem;
    }
  }
`
