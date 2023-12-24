import styled from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  max-width: calc(98vw - 24px);

  & > .dishes-slider {
    width: 100%;

    .dishes-slider__slide {
      width: auto;
    }

    .swiper-button-prev {
      width: 4rem;
      height: 4rem;

      top: 40%;

      &::after {
        content: '';
        width: 100%;
        height: 100%;
        background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='white' stroke-width='0' viewBox='0 0 256 256' height='40' width='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z'%3E%3C/path%3E%3C/svg%3E");
      }
    }

    .swiper-button-next {
      width: 4rem;
      height: 4rem;
      top: 40%;

      &::after {
        content: '';
        width: 100%;
        height: 100%;

        background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='white' stroke-width='0' viewBox='0 0 256 256' height='40' width='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z'%3E%3C/path%3E%3C/svg%3E");
      }
    }
  }

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: calc(98vw - 12.4rem * 2);
  }
`
