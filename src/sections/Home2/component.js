import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import styled from "@mui/material/styles/styled"



const Root = styled(Box)(() => ({
  height: '100vh',
  position: 'relative',
  zIndex: 0
}))

const Bg = styled('img')(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  objectFit: 'cover',
  objectPosition: 'center',
  zIndex: -1
}))

const Main = styled(Container)(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  // position: 'relative',
  '& .content': {
    width: '45%',
    marginTop: '0%',
    marginBottom: '5%',
    // position: 'absolute',
    // top: '55%',
    // transform: 'translate(0px,-50%)',
    '& > *': {
      margin: '16px 0',
      display: 'inline-block'
    },
    '& .text': {
      color: '#fff',
      fontSize: 15,
      fontWeight: 500,
      lineHeight: '150%',
      '&.heading': {
        fontSize: 36.3,
        fontWeight: 700,
        lineHeight: '175%',
        '& .image': {
          width: 66,
          margin: '0 13.5px -8.4px 0',
          display: 'inline-block',
          '&:first-of-type': {
            marginLeft: -7
          },
          '&:last-of-type': {
            marginRight: 0
          },
          '&.clock': {
            width: 45,
            margin: '0 6px -7.5px 0',
            '&.one': {
              marginLeft: 13.5
            },
            '&:last-of-type': {
              marginRight: 8
            }
          }
        },
        '& .stickerText': {
          position: 'relative',
          display: 'inline-block',
          margin: '0 20px',
          '& .text': {
            fontSize: '168%',
            fontWeight: 800,
            lineHeight: 'inherit',
            fontStyle: 'italic',
            color: '#7de7c0',// '#9affda',// '#62ffd7',
            // letterSpacing: -4,
            // fontFamily: '"MrsSheppards", cursive',
            fontFamily: '"CevicheOne", cursive',
            '&.goo': {
              filter: 'url(#stickerTextGoo)',
              color: '#750dc3',
              textShadow: '0 0 12px #8721d3'
            },
            '&.main': {
              position: 'absolute',
              top: 0
            }
          }
        },
        '& .transactText': {
          fontSize: '120%'
        },
        '& .smallText': {
          fontSize: '93%'
        }
      }
    }
  }
}))



export { Root, Bg, Main }