import styled from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: fit-content;
  height: 3.4rem;

  padding: 1rem 1.6rem;

  display: flex;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? 'transparent' : theme.COLORS.LIGHT[600]};
  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.LIGHT[500]}` : 0};
  border-radius: 8px;

  line-height: ${({ theme }) => theme.FONT.HEIGHT['SM']};

  & > input {
    width: 100%;
    max-width: ${({ $inputMaxWidth }) =>
      $inputMaxWidth !== '0px' ? $inputMaxWidth : '7rem'};

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: 0;

    &::placeholder {
      font-family: ${({ theme }) => theme.FONT.FAMILY['ROBOTO']};
      font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
      font-weight: ${({ theme }) => theme.FONT.WEIGHT['REGULAR']};
      line-height: ${({ theme }) => theme.FONT.HEIGHT['SM']};
      color: ${({ theme }) => theme.COLORS.LIGHT[500]};
    }

    &:read-only {
      cursor: default;
    }
  }

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    border: 0;

    svg {
      font-size: 1.3rem;
      color: ${({ theme, $isNew }) =>
        $isNew ? theme.COLORS.LIGHT[500] : theme.COLORS.LIGHT[100]};
    }
  }
`
