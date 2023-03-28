import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .bg': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    opacity: .9
  },
  '& .grid': {
    position: 'relative',
    '& .col': {
      '&.col-1': {
        '& .image': {
          width: '100%',
          // position: 'relative',
          '& img': {
            // position: 'absolute',
            width: '120%',
            height: 'auto',
            marginLeft: '-10%',
            marginTop: '-25%'
          }
        }
      },
      '&.col-2': {
        '& .heading': {
          fontSize: 32,
          fontWeight: 800,
          lineHeight: '120%',
          color: theme.palette.primary.main,
          textAlign: 'center',
          padding: 32
        },
        '& .steps': {
          marginTop: 0,
          marginLeft: '0%',
          '& .row': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '32px 0',
            '& > .item': {
              margin: 12
            },
            '& .number': {
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '& .goo': {
                padding: 4,
                width: 72,
                height: 72,
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
                fontSize: 22.5,
                fontWeight: 700,
                position: 'absolute'
              }
            },
            '& .article': {
              padding: '0 15%',
              '& .text': {
                color: '#000',
                fontSize: 15,
                fontWeight: 700,
                lineHeight: '24px',
                textAlign: 'center'
              }
            }
          }
        }
      }
    }
  }
}))



export { Root }