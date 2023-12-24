import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.footer`
  padding: 2rem 2.8rem;

  grid-area: footer;

  background-color: ${({ theme }) => theme.COLORS.DARK[600]};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  & > span {
    font-size: ${({ theme }) => theme.FONT.SIZE['XSM']};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT['REGULAR']};
    color: ${({ theme }) => theme.COLORS.LIGHT[200]};
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 2.4rem 2.8rem;

    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 2.4rem 12.4rem;

    & > span {
      font-size: ${({ theme }) => theme.FONT.SIZE['SM']};
      line-height: ${({ theme }) => theme.FONT.HEIGHT['LG']};
    }
  }
`
