import { Container } from './styles'

export function Logo({
  large = false,
  isAdmin = false,
  dark = false,
  ...rest
}) {
  return (
    <Container $large={large} $dark={dark} {...rest}>
      <div>food explorer</div>
      {isAdmin && <span>admin</span>}
    </Container>
  )
}
