import { useRef, useEffect } from 'react'
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import { styled } from '@mui/material/styles'
import { HomeIcon, AppsIcon, SendIcon, PuzzleIcon } from "./icon"



const Root = styled(Box)(() => ({
  position: 'fixed',
  right: 0,
  top: '48%',
  transform: 'translateY(-50%)',
  marginRight: '5.4%',
  zIndex: 1,
  '& > .wrapper': {
    filter: 'url(#goo)',
    position: 'relative',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

const buttonWidth = 57
const Button = styled(Link)(() => ({
  borderRadius: '50%',
  width: buttonWidth,
  height: buttonWidth,
  backgroundColor: '#750dc3',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  margin: '7px 0',
  transition: '.4s ease-in-out',
  '& > .wrapper': {
    borderRadius: 'inherit',
    width: '42%',
    height: '42%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '.1s linear',
    '& .icon': {
      width: '50%',
      strokeWidth: 2,
      stroke: '#fff',
      fill: '#fff'
    }
  },
  '& .node': {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: '#750dc3',
    zIndex: -1,
    transform: 'translateY(-50%)',
    transition: '.4s ease-in-out',
    '&.lg': {
      width: '75%',
      height: '75%',
      '&.top': {
        top: '-12%'
      }
    },
    '&.sm': {
      width: '20%',
      height: '20%',
      '&.top': {
        top: '-5%',
        width: '35%',
        height: '16%'
      },
      '&.bottom': {
        bottom: '-25%',// '-31%',//
        width: '33%',// '40%',// 
        height: '21%'// '40%'// 
      }
    }
  },
  '&:hover': {
    // margin: '19px 0',
    // width: buttonWidth*1,
    // height: buttonWidth*1,
    '& > .wrapper': {
      width: '60%',
      height: '60%',
      transition: '.1s linear'
    }
  },
  '&.active': {
    margin: '30px 0 26px',
    width: 57,
    height: 57,
    backgroundColor: '#fafafa',
    // transition: '.4s ease-in-out',
    '& > .wrapper': {
      width: '78%',
      height: '78%',
      transition: '.4s ease-in-out',
      '& .icon': {
        width: '50%',
        fill: '#750dc3',
        stroke: '#750dc3',
        strokeWidth: 2,
        transition: '.4s ease-in-out'
      }
    },
    '& .node': {
      opacity: 0,
      top: '50%',
      width: 0,
      height: 0,
      backgroundColor: '#fff',
      transition: '.4s ease-in-out'
    },
    '& + .button .node.lg.top': {
      opacity: 0,
      top: '50%',
      width: 0,
      height: 0
    }
  }
}))



export default function () {
  const menu = useRef(null)

  useEffect(() => {
    const sections = document.querySelectorAll(".page-section")
    const buttons = menu.current.querySelectorAll('.button')
    /* buttons.forEach((link) => {
      link.onclick = function () {
        menu.current.querySelectorAll('.button').forEach((link) => {
          link.classList.remove('active')
        })
        link.classList.add('active')
      }
    }) */
    window.addEventListener("scroll", () => {
      let current = ""
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const y = window.pageYOffset
        const vh = window.innerHeight
        if ((y + vh) > (sectionTop + 100)) {
          current = section.getAttribute("id")
        }
        if (y <= 200) {
          current = 'home-section'
        }
      })
    
      buttons.forEach((button) => {
        button.classList.remove("active")
        if (button.classList.contains(current)) {
          button.classList.add("active")
        }
      })
    })
  }, [])

  return (
    <Root ref={menu}>
      <Box className="wrapper">
        
        <Button className="button active home-section" href="#home-section">
          <Box className="wrapper">
            <HomeIcon />
          </Box>
          <Box className="node sm bottom" />
        </Button>
        
        <Button className="button about-section" href="#about-section">
          <Box className="wrapper">
            <PuzzleIcon style={{ margin: '2px 2px 0 0', transform: 'rotateZ(-72deg)' }} />
          </Box>
          <Box className="node lg top" />
        </Button>
        
        <Button className="button features-section" href="#features-section">
          <Box className="wrapper">
            <AppsIcon />
          </Box>
          <Box className="node lg top" />
        </Button>
        
        <Button className="button contact-section" href="#contact-section">
          <Box className="wrapper">
            <SendIcon style={{ margin: '2px 2px 0 0' }} />
          </Box>
          <Box className="node lg top" />
          <Box className="node sm top" />
        </Button>
      
      </Box>
            
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display: 'none'}}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -9" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" result="main" />
          </filter>
        </defs>
      </svg>

    </Root> 
  )
}
