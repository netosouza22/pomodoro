import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const LayoutContainer = styled.div`
  max-width: 74rem;


  margin: 0vh auto;
  padding: 2.5rem;

  background-color: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  font-size: 0.875rem;

  @media ${device.tablet} {
    margin: 5vh auto;

    min-height: calc(100vh - 10vh);
  }
`
