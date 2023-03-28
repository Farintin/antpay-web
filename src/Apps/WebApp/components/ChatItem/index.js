import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Root } from "./component"
import Avatar from "../Avatar"



export default function (props) {

  return (
    <Root style={props.style}>
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>
          <Grid item xs={2.4} className='col col-1'>
            <Avatar 
              style={{
                width: 54,
                height: 54,
                borderColor: '#6E01CE'
              }}
              image={props.contact.avatar} />
          </Grid>
          <Grid item xs={7.2} className='col col-2'>
            <Typography className="text name bold">
              {props.contact.userName}
            </Typography>
            <Typography className="text chat">
              {props.contact.lastChat.length > 30 ? `${props.contact.lastChat.slice(0,30)}...` : props.contact.lastChat}
            </Typography>
          </Grid>
          <Grid item xs={2.4} className='col col-3'>
            <Typography className="text time">
              {props.contact.time}
            </Typography>
            <Box 
              className={`n ${props.contact.lastChatCount === 0 ? 'hide' : ''}`}
            >
              <Typography className="text">
                {props.contact.lastChatCount}
              </Typography>
            </Box>
          </Grid>
        </Grid>

      </Box>
    </Root>
  )
}