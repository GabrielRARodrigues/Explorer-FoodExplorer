import styled from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.h2`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 8px;

  font-size: ${({ theme, $large, $dark }) =>
    $dark ? theme.FONT.SIZE['XG'] : $large ? '3.8rem' : theme.FONT.SIZE['XG']};
  color: ${({ theme, $dark }) =>
    $dark ? theme.COLORS.LIGHT[700] : theme.COLORS.LIGHT[100]};

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ $large }) => ($large ? '10px' : '8px')};

    &::before {
      content: '';
      width: ${({ theme, $large }) =>
        $large ? theme.FONT.SIZE['4XLG'] : theme.FONT.SIZE['XLG']};
      height: ${({ theme, $large }) =>
        $large ? theme.FONT.SIZE['4XLG'] : theme.FONT.SIZE['XLG']};
      background-image: url(/images/icon-mobile${({ $large, $dark }) =>
        $dark ? '-dark' : $large ? '-large' : ''}.svg);
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  & > span {
    font-size: ${({ theme }) => theme.FONT.SIZE['XSM']};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT['REGULAR']};
    line-height: ${({ theme }) => theme.FONT.HEIGHT['LG']};
    color: ${({ theme }) => theme.COLORS.TINTS.CAKE[200]};
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    gap: 0;

    font-size: ${({ theme, $large }) =>
      $large ? theme.FONT.SIZE['4XLG'] : theme.FONT.SIZE['XLG']};

    & > div {
      gap: ${({ $large }) => ($large ? '20px' : '10px')};

      &::before {
        content: '';
        width: ${({ $large }) => ($large ? '5rem' : '3rem')};
        height: ${({ $large }) => ($large ? '5rem' : '3rem')};
        background-image: url(/images/icon-desktop${({ $large, $dark }) =>
          $dark ? '-dark' : $large ? '-large' : ''}.svg);
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`
