import Box from "@mui/material/Box"
import styled from "@mui/material/styles/styled"


const size = 7.2
const Root = styled(Box)(() => ({
  display: 'flex',
  flexFlow: 'wrap',
  width: size*3,
  height: size*7,
  margin: `0 ${size/2}px`,
  '& .pixel': {
    width: '33.3%',
    height: '14.3%',
    backgroundColor: '#fff',
    '&.pa-0': {
      opacity: 0
    },
    '&.pa-1': {
      opacity: 0
    },
    '&.pa-2': {
      opacity: 0
    },
    
    '&.pz-0': {
      opacity: 0
    },
    '&.pz-1': {
      opacity: 0
    },
    '&.pz-2': {
      opacity: 0
    }
  },
  '&.F': F,
  '&.E': E,
  '&.A': A,
  '&.T': T,
  '&.U': U,
  '&.R': R,
  '&.S': S,
  '&.dot': dot
}))

const F = {
  '& .p1-1': {
    opacity: 0
  },
  '& .p1-2': {
    opacity: 0
  },
  
  '& .p3-1': {
    opacity: 0
  },
  '& .p3-2': {
    opacity: 0
  },

  '& .p4-1': {
    opacity: 0
  },
  '& .p4-2': {
    opacity: 0
  }
}
const E = {
  '& .p1-1': {
    opacity: 0
  },
  '& .p1-2': {
    opacity: 0
  },
  
  '& .p3-1': {
    opacity: 0
  },
  '& .p3-2': {
    opacity: 0
  }
}
const A = {
  '& .p0-0': {
    opacity: 0
  },
  '& .p0-2': {
    opacity: 0
  },

  '& .p1-1': {
    opacity: 0
  },
  
  '& .p3-1': {
    opacity: 0
  },

  '& .p4-1': {
    opacity: 0
  }
}
const T = {
  '& .p1-0': {
    opacity: 0
  },
  '& .p1-2': {
    opacity: 0
  },
  
  '& .p2-0': {
    opacity: 0
  },
  '& .p2-2': {
    opacity: 0
  },
  
  '& .p3-0': {
    opacity: 0
  },
  '& .p3-2': {
    opacity: 0
  },

  '& .p4-0': {
    opacity: 0
  },
  '& .p4-2': {
    opacity: 0
  }
}
const U = {
  '& .p0-1': {
    opacity: 0
  },
  
  '& .p1-1': {
    opacity: 0
  },
  
  '& .p2-1': {
    opacity: 0
  },
  
  '& .p3-1': {
    opacity: 0
  },
  
  '& .p4-0': {
    opacity: 0
  },
  '& .p4-2': {
    opacity: 0
  }
}
const R = {
  '& .p0-2': {
    opacity: 0
  },
  
  '& .p1-1': {
    opacity: 0
  },
  
  '& .p2-2': {
    opacity: 0
  },

  '& .p3-1': {
    opacity: 0
  },
  
  '& .p4-1': {
    opacity: 0
  }
}
const S = {
  '& .p0-0': {
    opacity: 0
  },
  
  '& .p1-1': {
    opacity: 0
  },
  '& .p1-2': {
    opacity: 0
  },

  '& .p2-0': {
    opacity: 0
  },
  '& .p2-2': {
    opacity: 0
  },
  
  '& .p3-0': {
    opacity: 0
  },
  '& .p3-1': {
    opacity: 0
  },

  '& .p4-2': {
    opacity: 0
  },
}
const dot = {
  '& .pixel': {
    opacity: 0,
    '&.p4-1': {
      opacity: 1
    }
  }
}



export default function ({ style, ...others }) {
  return (
    <Root style={style} {...others} >
      <Box className="pixel pa-0"></Box>
      <Box className="pixel pa-1"></Box>
      <Box className="pixel pa-2"></Box>
      
      <Box className="pixel p0-0"></Box>
      <Box className="pixel p0-1"></Box>
      <Box className="pixel p0-2"></Box>
      
      <Box className="pixel p1-0"></Box>
      <Box className="pixel p1-1"></Box>
      <Box className="pixel p1-2"></Box>
      
      <Box className="pixel p2-0"></Box>
      <Box className="pixel p2-1"></Box>
      <Box className="pixel p2-2"></Box>
      
      <Box className="pixel p3-0"></Box>
      <Box className="pixel p3-1"></Box>
      <Box className="pixel p3-2"></Box>
      
      <Box className="pixel p4-0"></Box>
      <Box className="pixel p4-1"></Box>
      <Box className="pixel p4-2"></Box>
      
      <Box className="pixel pz-0"></Box>
      <Box className="pixel pz-1"></Box>
      <Box className="pixel pz-2"></Box>
    </Root>
  )
}