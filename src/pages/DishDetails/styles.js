import styled from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows: auto 1fr auto;

  & > main {
    padding: 1.4rem 5%;

    grid-area: content;
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    & > main {
      padding: 1.6rem 5.6rem 3.4rem;
    }
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    & > main {
      padding: 0 12rem 0;
    }
  }
`
export const Content = styled.div`
  height: 100%;
  padding-block: 2rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.6rem;

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding-block: 2.4rem;
    gap: 2.4rem;
  }
`

export const Dish = styled.section`
  max-width: 31.6rem;
  height: 100%;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  & > img {
    width: 100%;
    max-width: 26.4rem;
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 100%;
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    gap: 4.8rem;

    & > img {
      width: 100%;
      max-width: 39rem;
    }
  }
`

export const DishContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  & > h2 {
    font-family: ${({ theme }) => theme.FONT.FAMILY['POPPINS']};
    font-size: 2.8rem;
    font-weight: ${({ theme }) => theme.FONT.WEIGHT['MEDIUM']};
    line-height: ${({ theme }) => theme.FONT.HEIGHT['MD']};
  }

  & > p {
    font-family: ${({ theme }) => theme.FONT.FAMILY['POPPINS']};
    line-height: ${({ theme }) => theme.FONT.HEIGHT['MD']};
    text-align: center;
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    align-items: start;

    & > h2 {
      font-size: ${({ theme }) => theme.FONT.SIZE['3XLG']};
    }

    & > p {
      font-size: ${({ theme }) => theme.FONT.SIZE['XLG']};
      text-align: left;
    }
  }
`

export const Ingredients = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: start;
    gap: 1.2rem;
  }
`

export const DishActions = styled.div`
  width: 100%;
  max-width: 31.6rem;
  margin-top: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  & > button {
    font-size: ${({ theme, $isAdmin }) =>
      $isAdmin ? theme.FONT.SIZE['SM'] : '1.2rem'};
    line-height: 1.6rem;
    font-weight: ${({ theme }) => theme.FONT.WEIGHT['MEDIUM']};
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    & > button {
      font-size: ${({ theme }) => theme.FONT.SIZE['SM']};
    }
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: auto;
    gap: 3.2rem;

    & > button {
      line-height: 2.4rem;

      svg {
        display: none;
      }
    }
  }
`
