import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'


export default function () {
  return (
    <Box>
      <Outlet />
    </Box>
  )
}