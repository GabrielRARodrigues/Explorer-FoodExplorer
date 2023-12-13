import { Routes, Route, Navigate } from 'react-router-dom'

export function AuthRoutes() {
  const user = localStorage.getItem('@foodexplorer:user')

  return (
    <Routes>{!user && <Route path="*" element={<Navigate to="/" />} />}</Routes>
  )
}
