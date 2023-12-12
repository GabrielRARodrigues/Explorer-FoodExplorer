import { PiCaretLeft } from 'react-icons/pi'
import { Container } from './styles'

export function LinkToBack({
  children = 'voltar',
  to = -1,
  isIcon = true,
  large = false,
  ...rest
}) {
  return (
    <Container to={to} $large={large} {...rest}>
      {isIcon && <PiCaretLeft />}
      {children}
    </Container>
  )
}
