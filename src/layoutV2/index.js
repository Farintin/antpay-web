// import PropTypes from 'prop-types'
// import { useEffect, useState } from 'react'
import Desktop from './Desktop'
// import Mobile from './Mobile'

function Layout() {
  /* const [resized, setResized] = useState(false)
  const delay = 250
  let timeout = false
  let render

  // handleSize()
  if (window.innerWidth > 998) {
    render = <Desktop />
  } else {
    render = <Mobile />
  }

  window.onresize = function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      setResized(true)
    }, delay)
  }

  useEffect(() => {
    if (resized) {
      handleSize()
    }
  }, [resized])
  
  function handleSize() {
    if (window.innerWidth > 998) {
      render = <Desktop />
    } else {
      render = <Mobile />
    }
    setResized(false)
  } */

  return <Desktop />
}



export default Layout