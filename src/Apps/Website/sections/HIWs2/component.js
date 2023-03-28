import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  borderRadius: 42,
  backgroundColor: '#fff',
  padding: '45px 54px',
  marginTop: -169,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  scale: '97.5%',
  '& .heading': {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 700,
    lineHeight: '60px',
    color: theme.palette.primary.main
  },
  '& .steps': {
    margin: '81px 0 54px',
    '& .col': {
      display: 'flex',
      alignItems: 'center',
      padding: '0 36px 0 6px',
      '& > .item': {
        margin: 8
      },
      '& .number': {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .goo': {
          padding: 4,
          width: 80,
          height: 80,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          filter: 'url(#hiwsGoo)',
          '& .node': {
            backgroundColor: theme.palette.primary.main,
            borderRadius: '50%',
            position: 'absolute',
            '&.xl': {
              width: '60%',
              height: '55%'
            },
            '&.lg': {
              width: '25%',
              height: '25%'
            },
            '&.md': {
              width: '20%',
              height: '20%'
            },
            '&.sm': {
              width: '15%',
              height: '15%'
            },
            '&.xs': {
              width: '6%',
              height: '6%'
            }
          }
        },
        '& .text': {
          color: '#fff',
          fontSize: 30,
          fontWeight: 700,
          position: 'absolute'
        }
      },
      '& .article': {
        marginLeft: -4,
        '& .text': {
          color: '#000',
          fontSize: 14,
          fontWeight: 700,
          lineHeight: '22px'
        }
      }
    }
  }
}))



export { Root }