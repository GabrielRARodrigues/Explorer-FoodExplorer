import { Routes, Route, Navigate } from 'react-router-dom'

export function UserRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
