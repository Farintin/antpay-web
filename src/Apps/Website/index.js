import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import ThemeProvider from './theme'
// @layouts
import WebsiteLayout from './layout'
// @pages
import Website from './pages/LandingPage'
import ComingSoon from './pages/ComingSoon'
// @Pages Auth
// @Pages PUBLIC
// ----------------------------------------------------------------------



export default function () {
  const location = useLocation()
  return (
    <ThemeProvider>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="" element={<WebsiteLayout title="" />}>
            <Route path="/" element={<Website title="" />} />
            <Route path="/download" element={<ComingSoon title="" />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  )
}
