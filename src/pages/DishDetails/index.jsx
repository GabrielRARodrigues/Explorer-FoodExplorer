import { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import {
  Container,
  Content,
  Dish,
  DishActions,
  DishContent,
  Ingredients
} from './styles'

import { PiReceipt } from 'react-icons/pi'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { LinkToBack } from '../../components/LinkToBack'
import { Ingredient } from '../../components/Ingredient'
import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/api'

import { USER_ROLE } from '../../utils/roles'
import { Error } from '../../utils/alerts'

export function DishDetails() {
  const { user } = useAuth()

  const [data, setData] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [requests, setRequests] = useState(0)

  const { id } = useParams()
  const navigate = useNavigate()

  const isAdmin = user.role === USER_ROLE.ADMIN

  const dishImageUrl = `${api.defaults.baseURL}files/${data?.dish_image}`

  function handleEditDish() {
    navigate(`/dishes/edit/${id}`)
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`dishes/${id}`)
        setData(response.data)
      } catch (error) {
        if (error.response) {
          await Error({ title: error.response.data.message })

          return navigate(-1)
        } else {
          await Error({ title: 'Não foi possível buscar o prato.' })

          return navigate(-1)
        }
      }
    }

    fetchDish()
  }, [])

  return (
    <Container>
      <Header requests={requests} />
      <main>
        <Content>
          <LinkToBack />
          {data && (
            <Dish>
              <img
                src={dishImageUrl}
                alt={`${data.description ? data.description : data.name}`}
              />
              <DishContent>
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <Ingredients>
                  {data.ingredients.map(ingredient => (
                    <li key={ingredient.id}>
                      <Ingredient>{ingredient.name}</Ingredient>
                    </li>
                  ))}
                </Ingredients>
                <DishActions $isAdmin={isAdmin}>
                  {isAdmin ? (
                    <Button onClick={handleEditDish}>Editar prato</Button>
                  ) : (
                    <>
                      <Stepper number={quantity} setNumber={setQuantity} />
                      <Button
                        icon={PiReceipt}
                        onClick={() => {
                          setRequests(prevState => prevState + quantity)
                        }}
                      >{`pedir ∙ R$ ${data.price.replace('.', ',')}`}</Button>
                    </>
                  )}
                </DishActions>
              </DishContent>
            </Dish>
          )}
        </Content>
      </main>
      <Footer />
    </Container>
  )
}
