import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from "react-redux"

import Typography from '@mui/material/Typography'

import { Root } from "./component"

import NoWifiIcon from '../../components/icons/NoWifi.icon'





export default function () {
  const { isOnline } = useSelector(state => state.socketStates)
  const navigate = useNavigate()



  useEffect(() => {
    if (isOnline) {
      navigate('/loader')
    }
  }, [isOnline])


  return (
    <Root>

      <NoWifiIcon
        className="logo"
          />
      <Typography 
        className="text"
        sx={{ my: 2, mb: 4 }}
      >
        Not connected.
      </Typography>

    </Root>
  )
}