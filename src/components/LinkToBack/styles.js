import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.FONT.FAMILY['POPPINS']};
  font-size: ${({ theme }) => theme.FONT.SIZE['XLG']};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT['MEDIUM']};
  line-height: ${({ theme }) => theme.FONT.HEIGHT['MD']};

  & > svg {
    font-size: ${({ theme }) => theme.FONT.SIZE['2XLG']};
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-weight: ${({ theme }) => theme.FONT.WEIGHT['BOLD']};
  }
`
