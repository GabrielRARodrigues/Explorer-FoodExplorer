import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { DishDetails } from '../pages/DishDetails'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes/details/:id" element={<DishDetails />} />
      <Route path="/dishes/new" element={<NewDish />} />
      <Route path="/dishes/edit/:id" element={<EditDish />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
