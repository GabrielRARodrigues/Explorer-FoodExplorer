import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { Container, Content, Form } from './styles'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'

import { api } from '../../services/api'

import { Error, Alert } from '../../utils/alerts'

import { emailRegex, passwordRegex } from '../../utils/validations/regex/form'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSignUp(event) {
    event.preventDefault()

    if (!name || !email || !password) {
      return Error({ title: 'Todos os campos devem ser preenchidos' })
    }

    const userData = {
      name,
      email,
      password
    }

    try {
      await api.post('users', userData)

      Alert({ title: 'Usuário cadastrado com sucesso!' })
      navigate('/')
    } catch (error) {
      if (error.response) {
        Error({ title: error.response.data.message })
      } else {
        Error({ title: 'Não foi possível realizar o cadastro' })
      }
    }
  }

  return (
    <Container>
      <main>
        <Logo large />
        <Content>
          <h2>Crie sua conta</h2>
          <Form onSubmit={handleSignUp}>
            <Input
              type="text"
              name="name"
              placeholder="Exemplo: Maria da Silva"
              label="Seu nome"
              id="user_name"
              onChange={event => setName(event.target.value)}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Exemplo: exemplo@exemplo.com.br"
              title="O e-mail não apresenta o formato esperado. Exemplo da estrutura de e-mail válido: exemplo@exemplo.com.br"
              label="Email"
              id="user_email"
              onChange={event => setEmail(event.target.value)}
              required
              pattern={emailRegex.source}
            />
            <Input
              type="password"
              name="password"
              placeholder="No mínimo 8 caracteres"
              title="A senha não apresenta o formato esperado. Uma senha deve conter pelo menos oito caracteres, um caractere maiúsculo, um caractere minusculo, um número e um caractere especial"
              label="Senha"
              id="user_password"
              onChange={event => setPassword(event.target.value)}
              required
              pattern={passwordRegex.source}
            />
            <Button type="submit">Criar Conta</Button>
          </Form>

          <Link to="/">Já tenho uma conta</Link>
        </Content>
      </main>
    </Container>
  )
}
