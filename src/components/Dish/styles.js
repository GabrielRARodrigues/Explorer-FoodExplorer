import styled from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 21rem;
  height: 29.2rem;
  padding: 2.4rem;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK[200]};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK[300]};

  & > button {
    position: absolute;
    top: 1rem;
    right: 1rem;

    background: 0;
    border: 0;

    svg {
      font-size: ${({ theme }) => theme.FONT.SIZE['XLG']};
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    img {
      max-width: 8.8rem;
    }

    a {
      font-family: ${({ theme }) => theme.FONT.FAMILY['POPPINS']};
      font-size: ${({ theme }) => theme.FONT.SIZE['SM']};
      font-weight: ${({ theme }) => theme.FONT.WEIGHT['MEDIUM']};
      line-height: 2.4rem;
    }

    p {
      display: none;

      font-size: ${({ theme }) => theme.FONT.SIZE['SM']};
      font-weight: ${({ theme }) => theme.FONT.WEIGHT['REGULAR']};
      line-height: ${({ theme }) => theme.FONT.HEIGHT['LG']};
      color: ${({ theme }) => theme.COLORS.LIGHT[400]};
      text-align: center;
    }

    h3 {
      font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
      font-weight: ${({ theme }) => theme.FONT.WEIGHT['REGULAR']};
      line-height: ${({ theme }) => theme.FONT.HEIGHT['SM']};
      color: ${({ theme }) => theme.COLORS.TINTS.CAKE[200]};
    }
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 30.5rem;
    height: 46.3rem;

    & > button {
      right: 1.8rem;
    }

    & > div {
      gap: 1.5rem;

      img {
        max-width: 17.6rem;
      }

      a {
        font-size: ${({ theme }) => theme.FONT.SIZE['XLG']};
        font-weight: ${({ theme }) => theme.FONT.WEIGHT['BOLD']};
        line-height: ${({ theme }) => theme.FONT.HEIGHT['MD']};
      }

      p {
        display: flex;
      }

      h3 {
        font-size: ${({ theme }) => theme.FONT.SIZE['2XLG']};
        font-weight: ${({ theme }) => theme.FONT.WEIGHT['REGULAR']};
        line-height: ${({ theme }) => theme.FONT.HEIGHT['LG']};
      }
    }
  }
`
export const Actions = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: fit-content;

    flex-direction: row;
  }
`
