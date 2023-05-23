import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
// ----------------------------------------------------------------------
import ThemeProvider from './theme'
import Layout from './layout'
import Splash from './pages/Splash'
import QrSignIn from './pages/QrSignIn'
import PhoneSignIn from './pages/PhoneSignIn'
import OtpSignIn from './pages/OtpSignIn'
import SetProfile from './pages/SetProfile'
import HomeView from './pages/HomeView'
import './App.css'
// ----------------------------------------------------------------------


export default function () {
  // const { location } = window
  // console.log('location:', location)

  return (
    <ThemeProvider>
      <AnimatePresence>
      
        <Routes>
          <Route path="" element={<Layout title="" />}>
            <Route path="/" element={<Splash title="" />} />
            <Route path="/qrSignIn" element={<QrSignIn title="" />} />
            <Route path="/phoneSignIn" element={<PhoneSignIn title="" />} />
            <Route path="/otpSignIn" element={<OtpSignIn title="" />} />
            <Route path="/setProfile" element={<SetProfile title="" />} />
            <Route path="/home" element={<HomeView title="" />} />
          </Route>
        </Routes>

      </AnimatePresence>
    </ThemeProvider>
  )
}