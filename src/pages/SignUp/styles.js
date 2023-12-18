import styled from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  padding-inline: 5%;

  & > main {
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0;

    & > main {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }
`

export const Content = styled.div`
  margin-top: 7.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  & > h2 {
    display: none;

    font-family: ${({ theme }) => theme.FONT.FAMILY['POPPINS']};
    font-size: ${({ theme }) => theme.FONT.SIZE['2XLG']};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT['MEDIUM']};
    line-height: ${({ theme }) => theme.FONT.HEIGHT['MD']};
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin: 0;
    padding: 4.2rem;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.COLORS.DARK[700]};

    & > h2 {
      display: block;
    }
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 6.4rem;
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 31.6rem;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    min-width: 34.8rem;
  }
`
