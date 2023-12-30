import { createContext, useState, useEffect } from 'react'

import { api } from '../../services/api'
import { Error } from '../../utils/alerts'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    const userData = {
      email,
      password
    }

    try {
      const response = await api.post('sessions', userData)
      const user = response.data

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))

      setData({ user })
    } catch (error) {
      if (error.response) {
        Error({ title: error.response.data.message })
      } else {
        Error({ title: 'Não foi possível entrar.' })
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@foodexplorer:user')

    setData({})
    try {
      await api.delete('cookies/token')
    } catch {}
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodexplorer:user')

    if (user) {
      setData({
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
