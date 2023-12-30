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
