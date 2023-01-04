import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
// @layouts
import LayoutV1 from '../layoutV1'
import LayoutV2 from '../layoutV2'

// @Pages Auth

// @Pages PUBLIC

// ----------------------------------------------------------------------
export default function () {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="v1" element={<LayoutV1 title="" />} />
        <Route path="v2" element={<LayoutV2 title="" />} />
      </Routes>
    </AnimatePresence>
  )
}
