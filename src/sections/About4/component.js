import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  position: 'relative',
  zIndex: 0
}))

const Bg = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundImage: 'url(/image/stickers-bg-black_w1500-180deg.png)',
  backgroundPosition: '18% 36%',
  zIndex: -2,
  opacity: .18
}))

const Main = styled(Box)(() => ({
  position: 'relative',
  '& .wrapper': {
  }
}))

const Gradient = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: -1,
  background: `linear-gradient(360deg, #22003D -500%, #ADFFE1 100%)`,
  opacity: .87
}))

const About = styled(Grid)(({ theme }) => ({
  marginTop: -120,
  '& .col': {
    '&.col-1': {
      display: 'flex',
      alignItems: 'flex-end',
      '& .content': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .heading': {
          '& .text': {
            fontSize: 40,
            fontWeight: 700,
            color: theme.palette.primary.main,
            lineHeight: '75%'
          }
        },
        '& .article': {
          marginTop: 32,
          paddingBottom: 32,
          '& .text': {
            fontSize: 16.5,
            fontWeight: 500,
            color: theme.palette.primary.main,
            lineHeight: '150%'
          }
        }
      }
    },
    '&.col-2': {
      '& img.notification': {
        width: '100%'
      }
    }
  },
  [theme.breakpoints.down("lg")]: {
    '& .col': {
      '&.col-1': {
        '& .content': {
          '& .heading': {
            '& .text': {
              fontSize: 27
            }
          },
          '& .article': {
            marginTop: 24,
            paddingBottom: 24,
            '& .text': {
              fontSize: 13.5
            }
          }
        }
      },
      '&.col-2': {
        '& img.notification': {
          width: '87%'
        }
      }
    }
  }
}))


export { Root, Bg, Gradient, Main, About }