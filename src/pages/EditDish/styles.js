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
    padding: 1rem 3.2rem;

    grid-area: content;
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    & > main {
      padding: 4rem 4%;
    }
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    & > main {
      padding-inline: 12.4rem;
    }
  }
`
export const Content = styled.section`
  max-width: 112rem;
  margin: 2.4rem auto 0;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  & > h1 {
    font-family: ${({ theme }) => theme.FONT.FAMILY['POPPINS']};
    font-size: ${({ theme }) => theme.FONT.SIZE['2XLG']};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT['MEDIUM']};
    line-height: ${({ theme }) => theme.FONT.HEIGHT['MD']};
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  & > fieldset {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    & > div:nth-of-type(2) {
      gap: 1.6rem;

      div {
        padding: 1.6rem 1.4rem;
        background-color: ${({ theme }) => theme.COLORS.DARK[800]};

        input {
          max-width: 100%;
        }
      }
    }
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 3.2rem;

    & > fieldset {
      display: flex;
      flex-direction: row;
      gap: 3.2rem;
    }

    fieldset:nth-of-type(1) {
      & > div:nth-of-type(1) {
        flex: 1;
      }

      & > div:nth-of-type(2) {
        flex: 1;
      }

      & > div:nth-of-type(3) {
        flex: 1;
      }
    }

    fieldset:nth-of-type(2) {
      & > div:nth-of-type(1) {
        flex: 2;
      }

      & > div:nth-of-type(2) {
        flex: 1;
      }
    }

    & > button {
      width: fit-content;
      align-self: end;
    }
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    fieldset:nth-of-type(1) {
      & > div:nth-of-type(1) {
        flex: 2;
      }

      & > div:nth-of-type(2) {
        flex: 3;
      }

      & > div:nth-of-type(3) {
        flex: 2;
      }
    }
  }
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2.4rem;

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: min(5%, 3.2rem);
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: end;
    gap: 3.2rem;

    & > button {
      width: fit-content;
    }
  }
`
