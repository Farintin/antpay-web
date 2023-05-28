import { useLayoutEffect, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'
import { Root, Loader } from "./component"
import { LogoAquaGradientBrandnameWhiteDotAqua } from "../../components/Logo"



export default function () {
  const rootDom = useRef(null)
  const [load, setLoad] = useState(false)
  const [loadPercent, setLoadPercent] = useState(0)
  const loadTimeout = 100
  const navigate = useNavigate()



  useLayoutEffect(() => {
    setLoadPercent(15)
  }, [])

  useEffect(() => {
    setLoad(true)
  }, [])
  
  useEffect(() => {
    if (loadPercent === 100) {
      setTimeout(() => {
        // navigate('/qrSignIn')
        // navigate('/setProfile')
        navigate('/phoneSignIn')
        // navigate('/home')
      }, 100)
    } else if (loadPercent === 15 ) {
      rootDom.current.querySelector('.bar').classList.add('loading')
    } else if (loadPercent === 75 ) {
      rootDom.current.querySelector('.bar').classList.remove('loading')
    }

  }, [loadPercent])

  useEffect(() => {
    if (load) {

      setTimeout(() => {
        setLoadPercent(100)
      }, loadTimeout)

    }
    setLoadPercent(75)
  }, [load])


  return (
    <Root ref={rootDom}>

      <LogoAquaGradientBrandnameWhiteDotAqua 
          className="logo" />

      <Loader 
          sx={{
            m: 2
          }}
      >
          <Box className="bar" sx={{ width: loadPercent/100 }} />
      </Loader>

      <Box 
        className="e2e"
        sx={{
          m: 2
        }}
      >
        <svg 
          id="Layer_2" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 341.1 403.93"
          className='padlock'
        >
          <g id="Layer_1-2">
            <g>
              <path d="M157.89,0c8.03,0,16.05,0,24.08,0,.37,.35,.7,.95,
              1.11,1.01,51.4,8.02,85.4,37.4,102.6,85.79,4.43,12.48,5.19,
              26.5,6.14,39.91,1,14.19,.23,28.51,.23,
              43.23h49.05v233.69H198.28v-45.78h80.9v-45.9h-43.05v-49.34h43.03v-44.75h-80.85v-48.19h41.95c0-16.46,
              .4-32.46-.11-48.44-.56-17.71-6.18-33.87-18.6-46.83-19.66-20.52-43.58-27.54-71.01-19.61-26.99,
              7.8-43.58,25.74-46.57,53.99-1.94,18.36-1.6,36.96-2.25,
              55.46-.05,1.44,.21,2.88,.36,
              4.75h45.08v49.34H61.99v44.75h45.03v49.14H61.81v44.55h86.51v47.17H0V167.26H48.06c1.03-20.04,
              1.37-39.64,3.17-59.11C55.89,57.51,94.14,14.54,143.79,3.26,148.49,2.19,153.19,1.09,157.89,0Z"/>
              <path d="M196.64,312.94h-47.69v-48.86h47.69v48.86Z"/>
            </g>
          </g>
        </svg>
        <Typography 
          className="text"
        >
          End-to-end encrypted
        </Typography>
      </Box>

    </Root>
  )
}