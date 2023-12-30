import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & > label {
    line-height: ${({ theme }) => theme.FONT.HEIGHT['SM']};
    color: ${({ theme }) => theme.COLORS.LIGHT[400]};
  }

  & > textarea {
    height: 17.2rem;
    padding: 1.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK[800]};
    border: 0;
    border-radius: 8px;

    resize: none;

    &::placeholder {
      font-family: ${({ theme }) => theme.FONT.FAMILY['ROBOTO']};
      font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
      font-weight: ${({ theme }) => theme.FONT.WEIGHT['REGULAR']};
      line-height: ${({ theme }) => theme.FONT.HEIGHT['SM']};
      color: ${({ theme }) => theme.COLORS.LIGHT[500]};
    }
  }
`
