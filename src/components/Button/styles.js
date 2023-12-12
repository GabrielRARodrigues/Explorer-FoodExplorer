import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 1.2rem 2.4rem;

  background: ${({ theme, $tertiary, $secondary }) =>
    $tertiary
      ? theme.COLORS.DARK[800]
      : $secondary
      ? theme.COLORS.TINTS.TOMATO[400]
      : theme.COLORS.TINTS.TOMATO[100]};

  border: 0;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-family: ${({ theme }) => theme.FONT.FAMILY['POPPINS']};
  font-size: ${({ theme }) => theme.FONT.SIZE['SM']};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT['MEDIUM']};
  line-height: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};

  &:disabled {
    filter: brightness(0.8);
    cursor: default;
  }

  & > svg {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  }
`
