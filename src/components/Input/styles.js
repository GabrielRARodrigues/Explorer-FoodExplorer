import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  & > label {
    font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT['REGULAR']};
    line-height: ${({ theme }) => theme.FONT.HEIGHT['SM']};
    color: ${({ theme }) => theme.COLORS.LIGHT[400]};
  }

  & > div {
    padding: 1.2rem 1.4rem;

    background: ${({ theme }) => theme.COLORS.DARK[900]};

    display: flex;
    align-items: center;
    justify-content: ${({ $inputAlign }) => $inputAlign};
    gap: 14px;

    border: 0;
    border-radius: 8px;

    svg {
      font-size: ${({ theme }) => theme.FONT.SIZE['XLG']};
      color: ${({ theme }) => theme.COLORS.LIGHT[400]};
    }

    input {
      width: 100%;
      max-width: 30rem;

      background: transparent;
      border: 0;

      &::placeholder {
        font-family: ${({ theme }) => theme.FONT.FAMILY['ROBOTO']};
        font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
        font-weight: ${({ theme }) => theme.FONT.WEIGHT['REGULAR']};
        line-height: ${({ theme }) => theme.FONT.HEIGHT['SM']};
        color: ${({ theme }) => theme.COLORS.LIGHT[500]};
      }
    }
  }
`
