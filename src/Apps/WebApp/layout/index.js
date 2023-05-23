import { Outlet } from 'react-router-dom'
import { Root } from "./layout.component"


export default function () {
  return (
    <Root>
      <Outlet />
    </Root>
  )
}