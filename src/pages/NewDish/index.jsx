import { useState } from 'react'

import { Container, Content, Form } from './styles'

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

import { Alert, Error } from '../../utils/alerts'

import { priceRegex, categoryRegex } from '../../utils/validations/regex/form'

import { api } from '../../services/api'

export function NewDish() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState(DISH_CATEGORIES[0])
  const [dishImage, setDishImage] = useState(null)

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  function buttonIsDisabled() {
    if (!name || !price || !dishImage || !category) {
      return true
    }

    return false
  }

  function cleanFields() {
    setName('')
    setPrice('')
    setDescription('')
    setCategory(DISH_CATEGORIES[0])
    setDishImage(null)
    setIngredients([])
  }

  async function handleCreateDish(event) {
    event.preventDefault()

    if (!name || !price || !dishImage || !category) {
      return Error({
        title:
          'Os campos de imagem, nome, categoria e preço devem ser obrigatoriamente preenchidos'
      })
    }

    if (Number(price) === 0) {
      return Error({ title: 'O preço de um prato não pode ser zero' })
    }

    if (!category.match(categoryRegex)) {
      return Error({
        title:
          'O campo de categoria precisa corresponder a uma das seguintes opções: Refeição, Sobremesa ou Bebida'
      })
    }

    if (!price.match(priceRegex)) {
      return Error({
        title:
          'O preço informado é inválido. Informe um preço válido seguindo a seguinte estrutura: 25.00'
      })
    }

    if (newIngredient) {
      return Error({
        title:
          'Você preencheu o campo para adicionar um novo Ingrediente, mas não clicou em adicionar. Adicione o Ingrediente ou deixe o campo vazio'
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
      const response = await api.post('dishes', dish)
      const { id } = response.data

      const dishImageAsFormData = new FormData()
      dishImageAsFormData.append('dish_image', dishImage)
      await api.patch(`dishes/image/${id}`, dishImageAsFormData)

      await Alert({ title: 'Prato criado com sucesso' })
      cleanFields()
      event.target.reset()
    } catch (error) {
      if (error.response) {
        return Error({ title: error.response.data.message })
      } else {
        return Error({ title: 'Não foi possível criar o prato' })
      }
    }
  }

  return (
    <Container>
      <Header />
      <main>
        <LinkToBack />
        <Content>
          <h1>Novo prato</h1>
          <Form onSubmit={handleCreateDish}>
            <fieldset>
              <FileInput
                id="dish_image"
                name="dish_image"
                label="Imagem do prato"
                placeholder="Selecione a imagem"
                file={dishImage}
                filledPlaceholder="Imagem Selecionada"
                onChange={event => setDishImage(event.target.files[0])}
                required
              />
              <Input
                id="name"
                name="name"
                value={name}
                label="Nome"
                placeholder="Ex.: Salada Ceaser"
                onChange={event => setName(event.target.value)}
                required
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
                placeholder="R$ 00,00"
                setValue={setPrice}
                required
              />
            </fieldset>
            <fieldset>
              <TextArea
                id="description"
                name="description"
                label="Descrição"
                placeholder="Fale brevemente sobre o prato, seus ingredients e composição"
                onChange={event => {
                  setDescription(event.target.value)
                }}
              />
            </fieldset>

            <Button type="submit" secondary disabled={buttonIsDisabled()}>
              Salvar alterações
            </Button>
          </Form>
        </Content>
      </main>
      <Footer />
    </Container>
  )
}
