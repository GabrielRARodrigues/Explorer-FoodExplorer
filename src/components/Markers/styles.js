import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & > label {
    color: ${({ theme }) => theme.COLORS.LIGHT[400]};
    line-height: ${({ theme }) => theme.FONT.HEIGHT['SM']};
  }

  & > div {
    padding: 8px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK[800]};
    border: 0;
    border-radius: 8px;
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    & > div {
      gap: 1.6rem;
    }
  }
`
