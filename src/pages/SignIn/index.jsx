import { useState } from 'react'

import { Link } from 'react-router-dom'

import { Container, Content, Form } from './styles'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'

import { useAuth } from '../../hooks/useAuth'

import { Error } from '../../utils/alerts'

import { emailRegex, passwordRegex } from '../../utils/validations/regex/form'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  async function handleSignIn(event) {
    event.preventDefault()

    if (!email || !password) {
      return Error({
        title: 'Os campos e-mail e senha devem ser obrigatoriamente preenchidos'
      })
    }

    const userData = {
      email,
      password
    }

    signIn(userData)
  }

  return (
    <Container>
      <main>
        <Logo large />
        <Content>
          <h2>Faça login</h2>
          <Form onSubmit={handleSignIn}>
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
            <Button type="submit">Entrar</Button>
          </Form>

          <Link to="/register">Criar uma conta</Link>
        </Content>
      </main>
    </Container>
  )
}
