import { useEffect, useState } from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import { Buttons, Container, Content, Form } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { LinkToBack } from '../../components/LinkToBack'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Markers } from '../../components/Markers'
import { Select } from '../../components/Select'
import { Input } from '../../components/Input'
import { FileInput } from '../../components/FileInput'
import { CurrencyInput } from '../../components/CurrencyInput'

import { DISH_CATEGORIES } from '../../utils/categories'

import { Alert, Confirm, Error } from '../../utils/alerts'

import { priceRegex, categoryRegex } from '../../utils/validations/regex/form'

import { api } from '../../services/api'

export function EditDish() {
  const [data, setData] = useState(null)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [dishImage, setDishImage] = useState(null)

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`dishes/${id}`)

        setData(response.data)
        setCategory(response.data.category)
        setIngredients(
          response.data.ingredients.map(ingredient => ingredient.name)
        )
      } catch (error) {
        if (error.response) {
          const result = await Error({ title: error.response.data.message })

          if (result.isConfirmed || !result.isConfirmed) return navigate(-1)
        } else {
          const result = await Error({
            title: 'Não foi possível buscar os dados do prato.'
          })

          if (result.isConfirmed || !result.isConfirmed) return navigate(-1)
        }
      }
    }

    fetchDish()
  }, [])

  async function handleDeleteDish() {
    const result = await Confirm({
      title: 'Você realmente deseja excluir este prato?',
      text: 'Essa ação é irreversível e os dados do prato não poderão ser recuperados',
      confirmButtonText: 'Excluir permanentemente'
    })

    if (result.isConfirmed) {
      try {
        await api.delete(`dishes/${id}`)

        await Alert({ title: 'Prato excluído com sucesso' })
        navigate(-1)
      } catch (error) {
        if (error.response) {
          Error({ title: error.response.data.message })
        } else {
          Error({ title: 'Não foi possível excluir o prato.' })
        }
      }
    }
  }

  async function handleUpdateDish(event) {
    event.preventDefault()

    if (price) {
      if (!price.match(priceRegex)) {
        return Error({
          title:
            'O preço informado é inválido. Informe um preço válido seguindo a seguinte estrutura: 25.00'
        })
      }
      if (Number(price) === 0) {
        return Error({ title: 'O preço de um prato não pode ser zero' })
      }
    }

    if (category) {
      if (!category.match(categoryRegex)) {
        return Error({
          title:
            'O campo de categoria precisa corresponder a uma das seguintes opções: Refeição, Sobremesa ou Bebida'
        })
      }
    }

    if (newIngredient) {
      return Error({
        title:
          'Você preencheu o campo para adicionar um novo ingrediente, mas não clicou em adicionar. Adicione o ingrediente ou deixe o campo vazio'
      })
    }

    const dish = {
      name,
      category,
      description,
      price,
      ingredients
    }

    try {
      await api.put(`dishes/${id}`, dish)

      if (dishImage) {
        const dishImageAsFormData = new FormData()
        dishImageAsFormData.append('dish_image', dishImage)

        await api.patch(`dishes/image/${id}`, dishImageAsFormData)
      }

      await Alert({ title: 'Prato atualizado com sucesso' })
      navigate(-1)
    } catch (error) {
      if (error.response) {
        return Error({ title: error.response.data.message })
      } else {
        return Error({ title: 'Não foi possível atualizar o prato' })
      }
    }
  }

  return (
    <Container>
      <Header />
      <main>
        <LinkToBack />
        <Content>
          <h1>Editar prato</h1>
          <Form onSubmit={handleUpdateDish}>
            <fieldset>
              <FileInput
                id="dish_image"
                name="dish_image"
                label="Imagem do prato"
                placeholder="Selecione a imagem"
                file={dishImage}
                filledPlaceholder="Imagem Selecionada"
                onChange={event => setDishImage(event.target.files[0])}
              />
              <Input
                id="name"
                name="name"
                value={name}
                label="Nome"
                placeholder={data?.name || 'Ex.: Salada Ceaser'}
                onChange={event => setName(event.target.value)}
              />
              <Select
                options={DISH_CATEGORIES}
                label="Categoria"
                option={category}
                setOption={setCategory}
              />
            </fieldset>
            <fieldset>
              <Markers
                markers={ingredients}
                label="Ingredientes"
                setMarkers={setIngredients}
                newMarker={newIngredient}
                setNewMarker={setNewIngredient}
                markerName="ingrediente"
              />
              <CurrencyInput
                id="price"
                name="price"
                label="Preço"
                placeholder={
                  `R$ ${data?.price.replace('.', ',')}` || 'R$ 00,00'
                }
                setValue={setPrice}
              />
            </fieldset>
            <fieldset>
              <TextArea
                id="description"
                name="description"
                label="Descrição"
                placeholder={
                  data?.description ||
                  'Fale brevemente sobre o prato, seus ingredients e composição'
                }
                onChange={event => {
                  setDescription(event.target.value)
                }}
              />
            </fieldset>

            <Buttons>
              <Button type="button" tertiary onClick={handleDeleteDish}>
                Excluir prato
              </Button>
              <Button type="submit" secondary>
                Salvar alterações
              </Button>
            </Buttons>
          </Form>
        </Content>
      </main>
      <Footer />
    </Container>
  )
}
