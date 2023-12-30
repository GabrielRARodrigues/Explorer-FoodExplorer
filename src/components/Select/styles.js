import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & > span {
    cursor: default;
    line-height: ${({ theme }) => theme.FONT.HEIGHT['SM']};
    color: ${({ theme }) => theme.COLORS.LIGHT[400]};
  }

  & > button {
    height: 4.8rem;
    padding: 1.6rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    border: 0;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.DARK[900]};

    font-size: ${({ theme }) => theme.FONT.SIZE['SM']};
    color: ${({ theme }) => theme.COLORS.LIGHT[400]};

    &:hover,
    &:focus {
      filter: brightness(1.2);
    }

    svg {
      font-size: ${({ theme }) => theme.FONT.SIZE['XLG']};
    }
  }
`

export const Options = styled.div`
  width: 100%;

  display: ${({ $isActive }) => ($isActive ? 'flex' : 'none')};
  flex-direction: column;

  position: absolute;
  left: 0;
  top: 100%;
`

export const Option = styled.div`
  width: 100%;

  height: 4.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK[900]};
  border-top: 2px solid ${({ theme }) => theme.COLORS.DARK[400]};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK[700]};
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  }
`
