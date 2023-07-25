import Box from "@mui/material/Box"
import Stack from '@mui/material/Stack'

import { Root } from "./component"

import ChatMessageTextBox from "../../components/ChatMessageTextBox"
import Plus from '../../components/icons/Plus.icon'
import Mic from '../../components/icons/Mic.icon'
import Camera from '../../components/icons/Camera.icon'





export default function () {
  return (
    <Root>
      <Box className="wrapper">

        <Stack direction="row" spacing={0} className='stack'>

          <Box className="iconButton ui-ignore">
            <Plus/>
          </Box>

          <ChatMessageTextBox
            style={{
              flexGrow: 1
            }}
              />

          <Box className="iconButton ui-ignore">
            <Camera
              style={{
                width: 'calc(var(--icon-w) * 1.55)'
              }}
                />
          </Box>
          
          <Box className="iconButton ui-ignore">
            <Mic
              style={{
                width: 'calc(var(--icon-w) * 1.08)'
              }}
                />
          </Box>
        </Stack>

      </Box>
    </Root>
  )
}