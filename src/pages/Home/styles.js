import styled from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

import bannerImageDesktop from '../../assets/images/banner-desktop.png'
import bannerImageMobile from '../../assets/images/banner-mobile.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows: auto 1fr auto;

  & > main {
    padding: 4.5rem 0 2.4rem 2.4rem;

    grid-area: content;
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    & > main {
      padding: 16.4rem 12.4rem 4.8rem;

      grid-area: content;
    }
  }
`

export const Banner = styled.div`
  width: 100%;
  max-width: 41rem;
  padding-inline: 0.6rem 1.6rem;
  margin: 0 auto 6.2rem;

  display: none;

  position: relative;

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 112rem;
    padding: 0;
  }
`

export const BannerImage = styled.div`
  width: 19rem;
  height: 15rem;

  position: absolute;
  left: -2.4rem;
  bottom: 0;

  background-image: url(${bannerImageMobile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 65.6rem;
    height: 41.2rem;

    left: -6.4rem;

    background-image: url(${bannerImageDesktop});
    background-size: contain;
    background-position: top;
  }
`

export const BannerContent = styled.div`
  width: 100%;
  padding: 3.6rem 2rem 2.4rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background: var(--gradients-200);
  border-radius: 3px;

  & > div {
    max-width: 21.5rem;

    h2 {
      font-family: ${({ theme }) => theme.FONT.FAMILY['POPPINS']};
      font-size: ${({ theme }) => theme.FONT.SIZE['XG']};
      font-weight: ${({ theme }) => theme.FONT.WEIGHT['SEMIBOLD']};
      line-height: ${({ theme }) => theme.FONT.HEIGHT['MD']};
    }

    p {
      font-family: ${({ theme }) => theme.FONT.FAMILY['POPPINS']};
      font-size: ${({ theme }) => theme.FONT.SIZE['XSM']};
      font-weight: ${({ theme }) => theme.FONT.WEIGHT['REGULAR']};
      line-height: ${({ theme }) => theme.FONT.HEIGHT['MD']};
    }
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 8.8rem 10rem 9.2rem;

    & > div {
      max-width: 42.2rem;

      h2 {
        font-size: ${({ theme }) => theme.FONT.SIZE['3XLG']};
        font-weight: ${({ theme }) => theme.FONT.WEIGHT['MEDIUM']};
        line-height: ${({ theme }) => theme.FONT.HEIGHT['MD']};
      }

      p {
        font-family: ${({ theme }) => theme.FONT.FAMILY['ROBOTO']};
        font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
        font-weight: ${({ theme }) => theme.FONT.WEIGHT['REGULAR']};
        line-height: ${({ theme }) => theme.FONT.HEIGHT['SM']};
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  & > section {
    h2 {
      margin-bottom: 2.4rem;

      font-family: ${({ theme }) => theme.FONT.FAMILY['POPPINS']};
      font-size: ${({ theme }) => theme.FONT.SIZE['XG']};
      font-weight: ${({ theme }) => theme.FONT.WEIGHT['MEDIUM']};
      line-height: ${({ theme }) => theme.FONT.HEIGHT['MD']};
    }
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 4.8rem;

    & > section {
      h2 {
        font-family: ${({ theme }) => theme.FONT.FAMILY['POPPINS']};
        font-size: ${({ theme }) => theme.FONT.SIZE['2XLG']};
        font-weight: ${({ theme }) => theme.FONT.WEIGHT['MEDIUM']};
        line-height: ${({ theme }) => theme.FONT.HEIGHT['MD']};
      }
    }
  }
`
