import Box from "@mui/material/Box"
import { Root } from "./component"
import StatusAvatar from "../../components/StatusAvatar"
import UserStatusAvatar from "../../components/UserStatusAvatar"
import { usersStatus } from '../../resource/userStatus'



export default function () {
  return (
    <Root>
      <Box className="wrapper">

      <Box className="slider">
        <Box className="wrapper">

          <UserStatusAvatar image="/image/status/1-2.png" />
          {
            usersStatus.map((status,i) => (
              <StatusAvatar 
                key={i}
                image={status.thumbnail}
                userName={status.userName} />
            ))
          }

        </Box>
      </Box>

      </Box>
    </Root>
  )
}