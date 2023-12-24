import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper/modules'

import { Container } from './styles'

import { Dish } from '../Dish'

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export function SwiperDishes({ dishes, setRequests }) {
  return (
    <Container>
      <Swiper
        modules={[Navigation, Keyboard]}
        className="dishes-slider"
        slidesPerView={'auto'}
        spaceBetween={16}
        grabCursor={true}
        navigation={{
          enabled: false
        }}
        keyboard={{
          enabled: false
        }}
        breakpoints={{
          [DEVICE_BREAKPOINTS.LG.replace('px', '')]: {
            spaceBetween: 27,
            navigation: {
              enabled: true
            },
            keyboard: {
              enabled: true
            }
          }
        }}
      >
        {dishes.map(dish => (
          <SwiperSlide className="dishes-slider__slide" key={dish.id}>
            <Dish {...dish} setRequests={setRequests} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
/*
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import { Dish } from '../Dish'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export function SwiperDishes({ dishes }) {
  console.log(DEVICE_BREAKPOINTS.MD.replace('px', ''))

  return (
    <Splide
      options={{
        gap: '2.7rem',
        pagination: false,
        width: '95vw',
        arrows: true,
        fixedWidth: '30.5rem',

        breakpoints: {
          [DEVICE_BREAKPOINTS.MD.replace('px', '')]: {
            arrows: false,
            gap: '1.6rem',
            fixedWidth: '21rem'
          },
          [DEVICE_BREAKPOINTS.SM.replace('px', '')]: {
            arrows: false,
            gap: '1.6rem'
          }
        }
      }}
    >
      {dishes.map(dish => (
        <>
          <SplideSlide key={dish.id}>
            <Dish {...dish} />
          </SplideSlide>
          <SplideSlide key={dish.id}>
            <Dish {...dish} />
          </SplideSlide>
          <SplideSlide key={dish.id}>
            <Dish {...dish} />
          </SplideSlide>
          <SplideSlide key={dish.id}>
            <Dish {...dish} />
          </SplideSlide>
        </>
      ))}
    </Splide>
  )
}

*/
