import styled from 'styled-components'

export const Container = styled.span`
  padding: 0.4rem 0.8rem;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.DARK[1000]};

  font-family: ${({ theme }) => theme.FONT.FAMILY['POPPINS']};
  font-size: ${({ theme }) => theme.FONT.SIZE['SM']};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT['MEDIUM']};
  line-height: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
`
