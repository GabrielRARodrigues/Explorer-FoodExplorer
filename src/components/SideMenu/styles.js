import styled from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.aside`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK[400]};

  display: flex;
  flex-direction: column;

  position: absolute;

  z-index: 2;

  transform: translateX(-200%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open='true'] {
    transform: translateX(0);
  }

  &[data-menu-is-open='true'] ~ main {
    display: none;
  }

  & > div {
    padding: 3.6rem 2.8rem 0;

    display: flex;
    flex-direction: column;
    gap: 3.6rem;
    flex: 1;
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    &[data-menu-is-open='true'] {
      transform: translateX(-200%);
    }

    &[data-menu-is-open='true'] ~ main {
      display: initial;
    }
  }
`

export const Header = styled.header`
  padding: 5.6rem 2.8rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK[700]};

  display: flex;
  align-items: center;
  gap: 1.6rem;

  font-size: ${({ theme }) => theme.FONT.SIZE['XG']};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT['REGULAR']};
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: none;
    border: 0;

    svg {
      font-size: 3rem;
      color: ${({ theme }) => theme.COLORS.LIGHT[100]};
    }
  }
`
export const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
`

export const Option = styled.li`
  padding: 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK[1000]};

  & > a {
    font-family: ${({ theme }) => theme.FONT.FAMILY['POPPINS']};
    font-size: ${({ theme }) => theme.FONT.SIZE['XLG']};
    line-height: ${({ theme }) => theme.FONT.HEIGHT['MD']};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT['LIGHT']};
  }
`
