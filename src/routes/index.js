import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
// @layouts
import Layout from '../layout'
// import Version1 from '../Version1'
// import Version2 from '../Version2'
import Version3 from '../Version3'
import ComingSoon from '../pages/ComingSoon'

// @Pages Auth

// @Pages PUBLIC

// ----------------------------------------------------------------------
export default function () {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="" element={<Layout title="" />}>
          <Route path="/" element={<Version3 title="" />} />
          <Route path="/download" element={<ComingSoon title="" />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
