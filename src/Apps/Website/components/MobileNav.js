import { useRef, useEffect, useState } from 'react'
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'
import Link from "@mui/material/Link"
import { alpha, styled } from '@mui/material/styles'
import { LogoAquaGradientBrandnameWhiteDotAqua  } from './Logo'



const Root = styled(Box)(() => ({
}))

const Button = styled(Link)(({ theme }) => ({
  position: 'absolute',
  left: 16+9,
  top: 72,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 4,
  width: 42,
  zIndex: 2,
  '& .line': {
    width: '100%',
    height: 5,
    borderRadius: 4,
    backgroundColor: theme.palette.primary.main,
    marginTop: 6,
    '&.one': {
      marginTop: 0
    }
  },
  '&.fixed': {
    '--w': '66px',
    position: 'fixed',
    width: 'var(--w)',
    height: 'calc(var(--w) * .96)',
    left: 0,
    top: 0,
    padding: '21px 0 0 19.5px',
    borderRadius: '4.8px 22.5px 24px 22.5px',
    backgroundColor: theme.palette.primary.main,
    margin: 4.5,
    alignItems: 'flex-start',
    '& .line': {
      width: 30,
      backgroundColor: '#fff',
      height: 4,
    }
  },
  [theme.breakpoints.up("sm")]: {
    left: 24+9
  }
}))

const Menu = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '78vw',
  // minWidth: 270,
  height: '100vh',
  backgroundColor: alpha(theme.palette.primary.main, .87),
  borderRadius: '0 42px 42px 0',
  zIndex: 2,
  '& > .wrapper': {
    width: '100%',
    height: '100%',
    padding: '72px 42px 72px 36px',
    '& .header': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    '& .links': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 32,
      '& .link': {
        marginTop: 32,
        '& .label': {
          color: '#fff',
          fontSize: 19.5,
          textTransform: 'uppercase',
          fontWeight: 600,
          letterSpacing: 1
        }
      }
    }
  },
  '&.hide': {
    display: 'none'
  }
}))

const CloseButton = styled(Box)(() => ({
  '--w': '24px',
  width: 'var(--w)',
  height: 'var(--w)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 2,
  '& .line': {
    width: '100%',
    height: 3,
    borderRadius: 4,
    backgroundColor: '#fff',
    position: 'absolute',
    '&.one': {
      transform: 'rotateZ(-45deg)'
    },
    '&.two': {
      transform: 'rotateZ(45deg)'
    }
  }
}))



export default function () {
  const [open, setOpen] = useState(false)
  const [click, setClick] = useState(false)
  const [buttonClick, setButtonClick] = useState(false)
  const [menuClick, setMenuClick] = useState(false)
  const menu = useRef(null)
  const button = useRef(null)
  const delay = 200
  let timeout = false

  const clickHandler = () => {
    setOpen(!open)
    setButtonClick(true)
    // console.log('buttonClick');
  }
  const menuClickHandler = () => {
    setMenuClick(true)
    // console.log('menuClick');
  }
  
  useEffect(() => {
    menu.current.querySelectorAll('.links .link').forEach((link) => {
      link.onclick = function () {
        setOpen(false)
        // console.log('linkClick');
      }
    })
    window.onclick = function () {
      setClick(true)
      // console.log('click');
    }

    const rootDom = window
    rootDom.onscroll = function () {
      if (!timeout) {
        timeout = setTimeout(() => {
          scroll()
        }, delay)
      }
    }
    function scroll() {
      if (button.current) {
        // console.log('scroll');
        const height = 100
        // console.log(rootDom.scrollY);
        if (rootDom.scrollY > height) {
          button.current.classList.add('fixed')
        } else {
          button.current.classList.remove('fixed')
        }
      }
  
      clearTimeout(timeout)
      timeout = false
    }
  }, [])

  useEffect(() => {
    if (open) {
      menu.current.classList.remove('hide')
    } else {
      menu.current.classList.add('hide')
    }
  }, [open])

  useEffect(() => {
    if (open && click && !buttonClick && !menuClick) {
      setOpen(false)
    }

    if (click) {
      setClick(false)
    }
    if (buttonClick) {
      setButtonClick(false)
    }
    if (menuClick) {
      setMenuClick(false)
    }
  }, [click, buttonClick, menuClick])

  // useEffect(() => {}, [visible])

  return (
    <Root>

        <Button ref={button} onClick={clickHandler}>
          <Box className="line one" />
          <Box className="line" />
          <Box className="line" />
        </Button>
        
        <Menu ref={menu} className='hide' onClick={() => menuClickHandler()}>
          <Box className='wrapper'>
            <Box className='header'>
              <LogoAquaGradientBrandnameWhiteDotAqua 
                href=""
                style={{ 
                  width: '75%',
                  marginLeft: -6,
                  display: 'flex'
                }}
              />

              <CloseButton onClick={clickHandler}>
                <Box className='line one' />
                <Box className='line two' />
              </CloseButton>
            </Box>

            <Box className='links'>
              <Link href='#home-section' className='link'>
                <Typography className='label'>home</Typography>
              </Link>
              <Link href='#about-section' className='link'>
                <Typography className='label'>about</Typography>
              </Link>
              <Link href='#features-section' className='link'>
                <Typography className='label'>services</Typography>
              </Link>
              <Link href='#contact-section' className='link'>
                <Typography className='label'>contact us</Typography>
              </Link>
            </Box>
          </Box>
        </Menu>

    </Root> 
  )
}
