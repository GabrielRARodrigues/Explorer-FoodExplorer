import styled from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  padding-block: 0.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  & > button {
    display: flex;
    align-items: center;

    background: none;
    border: 0;

    svg {
      font-size: ${({ theme }) => theme.FONT.SIZE['XLG']};
      color: ${({ theme }) => theme.COLORS.LIGHT[100]};
    }
  }

  & > span {
    font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT['REGULAR']};
    line-height: ${({ theme }) => theme.FONT.HEIGHT['SM']};
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0;

    & > span {
      font-size: ${({ theme }) => theme.FONT.SIZE['XG']};
      font-weight: ${({ theme }) => theme.FONT.WEIGHT['BOLD']};
      line-height: ${({ theme }) => theme.FONT.HEIGHT['LG']};
    }
  }
`
