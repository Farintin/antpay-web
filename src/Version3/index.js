// import PropTypes from 'prop-types'
// import { useEffect, useState } from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

function Layout() {
  let render

  // handleSize()
  if (window.innerWidth > 998) {
    render = <Desktop />
  } else {
    render = <Mobile />
  }

  return render
}



export default Layout