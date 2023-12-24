import { PiCaretLeft } from 'react-icons/pi'
import { Container } from './styles'

export function LinkToBack({
  children = 'voltar',
  to = -1,
  isIcon = true,
  ...rest
}) {
  return (
    <Container to={to} {...rest}>
      {isIcon && <PiCaretLeft />}
      {children}
    </Container>
  )
}
