import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
// @layouts
import Layout from '../layout'

// @Pages Auth

// @Pages PUBLIC

// ----------------------------------------------------------------------
export default function () {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="" element={<Layout title="" />} />
      </Routes>
    </AnimatePresence>
  )
}
