// eslint-disable-next-line
import { useEffect, useState } from "react"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import { Root } from "./component"

import Avatar from "../Avatar"





export default function ({ contact, style }) {
  const defaultAvatar = '/image/avatar.svg'
  let user
  if (contact && contact.userAccExist) {
    user = contact.user
  }

  return (
    <Root style={style}>
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>
          <Grid item xs={2.4} className='col col-1'>
            <Avatar 
              style={{
                width: 54,
                height: 54,
                borderColor: '#6E01CE'
              }}
              image={user ? user.avatar.thumb_url : defaultAvatar}
                />
          </Grid>
          <Grid item xs={7.2} className='col col-2'>
            <Typography className="text name bold">
              {user ? user.name : contact?.phone.number}
            </Typography>
            <Typography className="text chat">
              {/* props.contact.lastChat.length > 30 ? `${props.contact.lastChat.slice(0,30)}...` : props.contact.lastChat */}
              {/* eslint-disable-next-line */}
              {user ? (user.desc.length > 30 ? `${user.desc.slice(0,30)}...` : user.desc) : ''}
            </Typography>
          </Grid>
          <Grid item xs={2.4} className='col col-3'>
            <Typography className="text time">
              {/* props.contact.time */}
              11:20 AM
            </Typography>
            <Box 
              className="n"// {`n ${props.contact.lastChatCount === 0 ? 'hide' : ''}`}
            >
              <Typography className="text">
                {0/* props.contact.lastChatCount */}
              </Typography>
            </Box>
          </Grid>
        </Grid>

      </Box>
    </Root>
  )
}