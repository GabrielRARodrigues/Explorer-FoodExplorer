import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & > label {
    line-height: ${({ theme }) => theme.FONT.HEIGHT['SM']};
    color: ${({ theme }) => theme.COLORS.LIGHT[400]};
  }
`

export const InputContainer = styled.div`
  width: 100%;
  min-height: 4.8rem;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK[800]};

  position: relative;

  & > label {
    padding: 1.2rem 3.2rem;

    display: flex;
    align-items: center;
    gap: 8px;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    cursor: pointer;

    svg {
      font-size: ${({ theme }) => theme.FONT.SIZE['XLG']};
      color: ${({ theme, $isFile }) =>
        $isFile ? theme.COLORS.TINTS.MINT[100] : theme.COLORS.LIGHT[100]};
    }

    span {
      font-family: ${({ theme }) => theme.FONT.FAMILY['POPPINS']};
      font-size: ${({ theme }) => theme.FONT.SIZE['SM']};
      font-weight: ${({ theme }) => theme.FONT.WEIGHT['MEDIUM']};
      line-height: 2.4rem;
      color: ${({ theme, $isFile }) =>
        $isFile ? theme.COLORS.TINTS.MINT[100] : theme.COLORS.LIGHT[100]};
    }

    @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding-inline: 1.8rem;
    }

    @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding-inline: 3.2rem;
    }
  }
`
