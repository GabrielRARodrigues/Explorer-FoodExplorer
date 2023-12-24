import { useEffect, useState } from 'react'

import {
  Banner,
  BannerContent,
  BannerImage,
  Container,
  Content
} from './styles'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

import { api } from '../../services/api'

import { Error } from '../../utils/alerts'
import { SwiperDishes } from '../../components/SwiperDishes'

export function Home() {
  const [search, setSearch] = useState('')
  const [requests, setRequests] = useState(0)
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    async function fetchDishes() {
      try {
        let response = await api.get(`dishes?name=${search}`)

        if (response.data.length === 0) {
          response = await api.get(`dishes?ingredients=${search}`)
        }

        setDishes(response.data)
      } catch (error) {
        if (error.response) {
          return Error({
            title: error.response.data.message
          })
        } else {
          return Error({
            title: 'Não foi possível buscar os pratos.'
          })
        }
      }
    }

    fetchDishes()
  }, [search])

  return (
    <Container>
      <Header setSearch={setSearch} requests={requests} />
      <main>
        <Banner>
          <BannerImage />
          <BannerContent>
            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </BannerContent>
        </Banner>
        <Content>
          <section>
            <h2>Refeições</h2>
            <SwiperDishes
              dishes={dishes.filter(dish => dish.category === 'Refeição')}
              setRequests={setRequests}
            />
          </section>
          <section>
            <h2>Sobremesas</h2>
            <SwiperDishes
              dishes={dishes.filter(dish => dish.category === 'Sobremesa')}
              setRequests={setRequests}
            />
          </section>
          <section>
            <h2>Bebidas</h2>
            <SwiperDishes
              dishes={dishes.filter(dish => dish.category === 'Bebidas')}
              setRequests={setRequests}
            />
          </section>
        </Content>
      </main>
      <Footer />
    </Container>
  )
}
