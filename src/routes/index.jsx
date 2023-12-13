import { useEffect } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'
import { USER_ROLE } from '../utils/roles'
import { api } from '../services/api'

import { AuthRoutes } from './auth.routes'
import { UserRoutes } from './user.routes'
import { AdminRoutes } from './admin.routes'

export function Routes() {
  const { user } = useAuth()

  useEffect(() => {
    api.get('users/validation').catch(error => {
      if (error.response?.status === 401) {
        signOut()
      }
    })
  }, [])

  function AccessRoutes() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />
      case USER_ROLE.USER:
        return <UserRoutes />
      default:
        return <UserRoutes />
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoutes /> : <AuthRoutes />}</BrowserRouter>
  )
}
