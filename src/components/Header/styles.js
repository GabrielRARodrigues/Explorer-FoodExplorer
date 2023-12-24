import styled from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.header`
  padding: 5.6rem 2.8rem 2.4rem;

  grid-area: header;

  background-color: ${({ theme }) => theme.COLORS.DARK[700]};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  button:first-child {
    background: none;
    border: 0;
  }

  svg {
    font-size: ${({ theme }) => theme.FONT.SIZE['XLG']};
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  }

  & > div {
    display: none;
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 2.4rem 6.4rem;

    gap: 3.2rem;

    & > div {
      display: flex;
      flex: 1;
    }

    button:first-child {
      display: none;
    }
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 2.4rem 12rem;
  }
`

export const Button = styled.button`
  position: relative;

  display: flex;
  align-items: center;

  background: none;
  border: 0;

  & > svg {
    ${({ $isAdmin }) => ($isAdmin ? 'display:none;' : '')}
    font-size: ${({ theme }) => theme.FONT.SIZE['2XLG']};
  }

  & > span {
    ${({ $isAdmin }) => ($isAdmin ? 'display:none;' : '')}
    padding: 2px 5.5px;

    position: absolute;
    top: 0;
    right: 0;

    background-color: ${({ theme }) => theme.COLORS.TINTS.TOMATO[200]};
    border-radius: 100%;

    font-family: ${({ theme }) => theme.FONT.FAMILY['POPPINS']};
    font-size: ${({ theme }) => theme.FONT.SIZE['SM']};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT['MEDIUM']};
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};

    transform: translate(25%, -25%);
  }

  @media screen and (min-width: ${({ $isAdmin }) =>
      $isAdmin ? DEVICE_BREAKPOINTS.MD : DEVICE_BREAKPOINTS.LG}) {
    padding: 1.2rem 3.2rem;

    position: static;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    background-color: ${({ theme }) => theme.COLORS.TINTS.TOMATO[100]};
    border-radius: 5px;

    & > span {
      padding: 0;

      position: static;
      background: none;

      display: flex;
      align-items: center;
      justify-content: center;

      transform: none;

      &::before {
        content: 'Pedidos (';
        ${({ $isAdmin }) => ($isAdmin ? 'content:"Novo prato"' : '')}
      }

      &::after {
        content: ')';
        ${({ $isAdmin }) => ($isAdmin ? 'content:""' : '')}
      }
    }
  }
`

export const Logout = styled.button`
  background: none;
  border: 0;

  display: none;

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
  }
`
