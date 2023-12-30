import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Container, Button, Logout } from './styles'

import { PiList, PiReceipt, PiSignOut, PiMagnifyingGlass } from 'react-icons/pi'

import { Logo } from '../Logo'
import { Input } from '../Input'

import { useAuth } from '../../hooks/useAuth'

import { USER_ROLE } from '../../utils/roles'
import { Confirm } from '../../utils/alerts'
import { SideMenu } from '../SideMenu'

export function Header({ requests = 0, setSearch, ...rest }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const navigate = useNavigate()

  const { user, signOut } = useAuth()

  const isAdmin = user.role === USER_ROLE.ADMIN

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

  function handleNewDish() {
    navigate(`/dishes/new/`)
  }

  function handleOpenMenu() {
    setMenuIsOpen(true)
  }

  function handleCloseMenu() {
    setMenuIsOpen(false)
  }

  return (
    <>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={handleCloseMenu}
        isAdmin={isAdmin}
        setSearch={setSearch}
      />
      <Container {...rest}>
        <button onClick={handleOpenMenu}>
          <PiList />
        </button>
        <Logo isAdmin={isAdmin} isLink />
        <Input
          id="search-header"
          icon={PiMagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
          inputAlign="center"
          onChange={event => {
            setSearch(event.target.value)
          }}
        />
        <Button $isAdmin={isAdmin} onClick={isAdmin && handleNewDish}>
          <PiReceipt />
          <span>{!isAdmin && requests}</span>
        </Button>
        <Logout onClick={handleSignOut}>
          <PiSignOut />
        </Logout>
      </Container>
    </>
  )
}
