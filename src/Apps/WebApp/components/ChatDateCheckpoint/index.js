import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { Root } from "./component"



export default function ({ time }) {
  let timeFormat = new Date(time).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  
  const timeObj = new Date(time)
  const currentTimeObj = new Date(Date.now())
  if (currentTimeObj.getFullYear() === timeObj.getFullYear()) {
    if (currentTimeObj.getMonth() === timeObj.getMonth()) {
      const dateDiff = currentTimeObj.getDate() - timeObj.getDate()
      if (dateDiff < 7) {
        if (dateDiff === 1) {
          timeFormat = 'Yesterday'
        } else if (dateDiff === 0) {
          timeFormat = 'Today'
        } else {
          timeFormat = timeObj.toLocaleString('en-US', { weekday: 'long' })
        }
      }
    }
  }

  return (
    <Root 
      data-date={new Date(time).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      className="timeCheckpoint sticky"
    >
      <Box className="wrapper">
        <Typography
          className="text time"
        >
          {timeFormat}
        </Typography>
      </Box>
    </Root>
  )
}