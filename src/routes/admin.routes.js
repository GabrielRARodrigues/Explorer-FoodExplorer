import { Routes, Route, Navigate } from 'react-router-dom'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
