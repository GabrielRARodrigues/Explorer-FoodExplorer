import { Link, useNavigate } from 'react-router-dom'

import { Container, Header, Navigation, Option } from './styles'

import { PiX, PiMagnifyingGlass } from 'react-icons/pi'

import { Input } from '../Input'
import { Footer } from '../Footer'

import { useAuth } from '../../hooks/useAuth'

import { Confirm } from '../../utils/alerts'

export function SideMenu({
  menuIsOpen,
  onCloseMenu,
  isAdmin = false,
  setSearch,
  ...rest
}) {
  const { signOut } = useAuth()

  const navigate = useNavigate()

  async function handleSignOut() {
    const result = await Confirm({
      title: 'Você tem certeza que deseja sair?',
      confirmButtonText: 'Sim, desejo sair'
    })

    if (result.isConfirmed) {
      navigate('/')
      signOut()
    }
  }

  return (
    <Container data-menu-is-open={menuIsOpen} {...rest}>
      <Header>
        <button onClick={onCloseMenu}>
          <PiX />
        </button>
        Menu
      </Header>
      <div>
        <Input
          id="search-side"
          icon={PiMagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
          onChange={event => {
            setSearch(event.target.value)
          }}
        />
        <nav>
          <Navigation>
            {isAdmin && (
              <Option>
                <Link to="/dishes/new">Novo Prato</Link>
              </Option>
            )}

            <Option>
              <Link to="/" onClick={handleSignOut}>
                Sair
              </Link>
            </Option>
          </Navigation>
        </nav>
      </div>
      <Footer />
    </Container>
  )
}
