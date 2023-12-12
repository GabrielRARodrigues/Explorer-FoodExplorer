import { Link } from 'react-router-dom'

import { Container } from './styles'

export function Logo({
  large = false,
  isAdmin = false,
  dark = false,
  isLink = false,
  ...rest
}) {
  function IsLinkOrNot() {
    if (isLink) {
      return (
        <Link to="/">
          <Container $large={large} $dark={dark} {...rest}>
            <div>food explorer</div>
            {isAdmin && <span>admin</span>}
          </Container>
        </Link>
      )
    }

    return (
      <Container $large={large} $dark={dark} {...rest}>
        <div>food explorer</div>
        {isAdmin && <span>admin</span>}
      </Container>
    )
  }

  return <IsLinkOrNot />
}
