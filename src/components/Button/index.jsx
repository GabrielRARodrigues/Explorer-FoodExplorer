import { Container } from './styles'

export function Button({
  children,
  type = 'button',
  icon: Icon,
  disabled = false,
  secondary = false,
  tertiary = false,
  ...rest
}) {
  return (
    <Container
      type={type}
      disabled={disabled}
      $disabled={disabled}
      $secondary={secondary}
      $tertiary={tertiary}
      {...rest}
    >
      {Icon && <Icon />}
      {children}
    </Container>
  )
}
