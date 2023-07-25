import Grid from "@mui/material/Grid"

import NavBar from "../NavBar"
import UsersStatus from "../UsersStatus"
import ChatsList from "../ChatsList"

import { Root } from "./component"





export default function (props) {
  return (
    <Root
      style={props.style}
      className={``}
    >
      <Grid
        className='grid-stack'
      >

        <Grid item className='row row-1'>
          <NavBar/>
        </Grid>

        <Grid item className='row row-2'>
          <UsersStatus/> 
        </Grid>

        <Grid item  className='row row-3'>
          <ChatsList/>
        </Grid>

      </Grid>
    </Root>
  )
}