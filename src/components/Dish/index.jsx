import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { Actions, Container } from './styles'

import {
  PiHeartStraight,
  PiHeartStraightFill,
  PiPencilSimple
} from 'react-icons/pi'

import { Stepper } from '../Stepper'
import { Button } from '../Button'

import { api } from '../../services/api'

import { useAuth } from '../../hooks/useAuth'
import { USER_ROLE } from '../../utils/roles'

export function Dish({
  id,
  dish_image,
  name,
  price,
  description,
  setRequests
}) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const { user } = useAuth()

  const navigate = useNavigate()

  const isAdmin = user.role === USER_ROLE.ADMIN

  function handleToggleFavorite() {
    setIsFavorite(prevState => !prevState)
  }

  function handleEditDish() {
    navigate(`/dishes/edit/${id}`)
  }

  const dishImageUrl = `${api.defaults.baseURL}files/${dish_image}`

  return (
    <Container>
      <button onClick={isAdmin ? handleEditDish : handleToggleFavorite}>
        {isAdmin ? (
          <PiPencilSimple />
        ) : isFavorite ? (
          <PiHeartStraightFill />
        ) : (
          <PiHeartStraight />
        )}
      </button>
      <div>
        <img src={dishImageUrl} alt={`${description ? description : name}`} />
        <Link to={`/dishes/details/${id}`}>{`${name} >`}</Link>
        {description && (
          <p>
            {description.length > 65
              ? description.substr(0, 65) + '...'
              : description}
          </p>
        )}
        <h3>{`R$ ${price.replace('.', ',')}`}</h3>
        {!isAdmin && (
          <Actions>
            <Stepper number={quantity} setNumber={setQuantity} />

            <Button
              onClick={() => {
                setRequests(prevState => prevState + quantity)
              }}
            >
              incluir
            </Button>
          </Actions>
        )}
      </div>
    </Container>
  )
}
