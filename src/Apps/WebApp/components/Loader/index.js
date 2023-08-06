import ClipLoader from "react-spinners/ClipLoader"

import { Root } from "./component"





export default function ({ style }) {
  return (
    <Root
      style={style}
    >
      <ClipLoader 
        color="#6E01CE"
        loading
        size={78}
        speedMultiplier={1.2}
        aria-label="Loading Spinner"
        data-testid="loader" 
        className='animate'
          />
    </Root>
  )
}